import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  location?: string;
  message?: string;
};

const configuredRecipients = process.env.CONTACT_TO_EMAILS ?? "Kalichristensen0610@gmail.com,Gary@CandBMechanical.com";
const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT ?? 465);
const smtpSecure = (process.env.SMTP_SECURE ?? "true").toLowerCase() !== "false";
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const fromEmail = process.env.CONTACT_FROM_EMAIL ?? (smtpUser ? `C&B Website <${smtpUser}>` : undefined);

export async function POST(request: Request) {
  try {
    const payload = normalizePayload((await request.json()) as ContactPayload);
    const required = ["name", "phone", "email", "service", "location", "message"] as const;
    const missing = required.some((key) => !payload[key]);

    if (missing) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!smtpHost || !smtpUser || !smtpPass || !fromEmail || !configuredRecipients) {
      return NextResponse.json({ error: "Email delivery is not configured" }, { status: 500 });
    }

    const submittedAt = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "America/Boise",
    });

    const recipients = configuredRecipients.split(",").map((email) => email.trim()).filter(Boolean);
    const subject = `New C&B estimate request from ${payload.name}`;
    const text = [
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

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    try {
      await transporter.sendMail({
        from: fromEmail,
        to: recipients,
        replyTo: payload.email,
        subject,
        text,
      });
    } catch {
      return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
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
