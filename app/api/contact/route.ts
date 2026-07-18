import { NextResponse } from "next/server";
import net from "node:net";
import tls from "node:tls";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  location?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const payload = normalizePayload((await request.json()) as ContactPayload);
    const required = ["name", "phone", "email", "service", "location", "message"] as const;
    const missing = required.some((key) => !payload[key]);

    if (missing) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const settings = getEmailSettings();

    if (!settings) {
      return NextResponse.json({ error: "Email delivery is not configured" }, { status: 500 });
    }

    const submittedAt = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "America/Boise",
    });

    const subject = `New C&B estimate request from ${payload.name}`;
    const message = [
      "New website estimate request",
      "",
      `Name: ${payload.name}`,
      `Phone: ${payload.phone}`,
      `Email: ${payload.email}`,
      `Service requested: ${payload.service}`,
      `Property/project location: ${payload.location}`,
      `Submitted: ${submittedAt}`,
      "",
      "Message:",
      payload.message,
    ].join("\n");

    try {
      await sendSmtpMail(settings, {
        subject,
        replyTo: payload.email,
        text: message,
      });
    } catch {
      return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export function GET() {
  return NextResponse.json({
    ok: true,
    emailConfigured: Boolean(getEmailSettings()),
  });
}

function normalizePayload(payload: ContactPayload): Required<ContactPayload> {
  return {
    name: payload.name?.trim() ?? "",
    phone: payload.phone?.trim() ?? "",
    email: payload.email?.trim() ?? "",
    service: payload.service?.trim() ?? "",
    location: payload.location?.trim() ?? "",
    message: payload.message?.trim() ?? "",
  };
}

type EmailSettings = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  recipients: string[];
};

type MailMessage = {
  subject: string;
  replyTo: string;
  text: string;
};

function getEmailSettings(): EmailSettings | null {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const recipients = (process.env.CONTACT_TO_EMAILS ?? "Kalichristensen0610@gmail.com,Gary@CandBMechanical.com")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  if (!host || !user || !pass || recipients.length === 0) {
    return null;
  }

  return {
    host,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: (process.env.SMTP_SECURE ?? "true").toLowerCase() !== "false",
    user,
    pass,
    from: process.env.CONTACT_FROM_EMAIL ?? `C&B Website <${user}>`,
    recipients,
  };
}

async function sendSmtpMail(settings: EmailSettings, message: MailMessage) {
  const client = await SmtpClient.connect(settings);

  try {
    await client.expect(220);
    await client.command(`EHLO ${settings.host}`, 250);
    await client.command("AUTH LOGIN", 334);
    await client.command(Buffer.from(settings.user).toString("base64"), 334);
    await client.command(Buffer.from(settings.pass).toString("base64"), 235);
    await client.command(`MAIL FROM:<${settings.user}>`, 250);

    for (const recipient of settings.recipients) {
      await client.command(`RCPT TO:<${recipient}>`, [250, 251]);
    }

    await client.command("DATA", 354);
    await client.command(formatEmail(settings, message), 250);
    await client.command("QUIT", 221);
  } finally {
    client.close();
  }
}

function formatEmail(settings: EmailSettings, message: MailMessage) {
  const headers = [
    `From: ${settings.from}`,
    `To: ${settings.recipients.join(", ")}`,
    `Reply-To: ${message.replyTo}`,
    `Subject: ${message.subject}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=utf-8",
  ];

  return `${headers.join("\r\n")}\r\n\r\n${message.text.replace(/\n/g, "\r\n").replace(/^\./gm, "..")}\r\n.`;
}

class SmtpClient {
  private buffer = "";
  private waiters: Array<() => void> = [];

  private constructor(private socket: net.Socket | tls.TLSSocket) {
    socket.setTimeout(12000);
    socket.on("data", (chunk) => {
      this.buffer += chunk.toString("utf8");
      this.flush();
    });
  }

  static connect(settings: EmailSettings) {
    return new Promise<SmtpClient>((resolve, reject) => {
      const socket = settings.secure
        ? tls.connect(settings.port, settings.host, { servername: settings.host })
        : net.connect(settings.port, settings.host);

      const fail = (error: Error) => reject(error);

      socket.once("error", fail);
      socket.once("timeout", () => reject(new Error("SMTP connection timed out")));
      socket.once(settings.secure ? "secureConnect" : "connect", () => {
        socket.off("error", fail);
        resolve(new SmtpClient(socket));
      });
    });
  }

  async command(command: string, expected: number | number[]) {
    this.socket.write(`${command}\r\n`);
    await this.expect(expected);
  }

  expect(expected: number | number[]) {
    const accepted = Array.isArray(expected) ? expected : [expected];

    return new Promise<void>((resolve, reject) => {
      const check = () => {
        const response = this.readResponse();

        if (!response) {
          this.waiters.push(check);
          return;
        }

        const code = Number(response.slice(0, 3));

        if (accepted.includes(code)) {
          resolve();
          return;
        }

        reject(new Error(`SMTP expected ${accepted.join(" or ")} but received ${response}`));
      };

      check();
    });
  }

  close() {
    this.socket.end();
  }

  private readResponse() {
    const match = this.buffer.match(/(?:^|\r\n)(\d{3} [\s\S]*?\r\n)/);

    if (!match || match.index === undefined) {
      return null;
    }

    const end = match.index + match[0].length;
    const response = this.buffer.slice(match.index, end).trim();
    this.buffer = this.buffer.slice(end);
    return response;
  }

  private flush() {
    const waiters = this.waiters.splice(0);
    waiters.forEach((waiter) => waiter());
  }
}
