import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  location?: string;
  message?: string;
};

const configuredRecipients = process.env.CONTACT_TO_EMAILS ?? "Kalichristensen0610@gmail.com,Gary@CandBMechanical.com";
const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "C&B Website <website@candbmechanical.com>";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const required = ["name", "phone", "email", "service", "location", "message"] as const;
    const missing = required.some((key) => !payload[key]?.trim());

    if (missing) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!resendApiKey || !configuredRecipients) {
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

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: recipients,
        subject,
        text,
        reply_to: payload.email,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
