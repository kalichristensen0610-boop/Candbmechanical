"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    const subject = encodeURIComponent(`C&B estimate request from ${values.name}`);
    const body = encodeURIComponent(
      [
        "New website estimate request",
        "",
        `Name: ${values.name}`,
        `Phone: ${values.phone}`,
        `Email: ${values.email}`,
        `Service requested: ${values.service}`,
        `Property/project location: ${values.location}`,
        "",
        "Message:",
        values.message,
      ].join("\n"),
    );

    window.location.href = `mailto:Gary@CandBMechanical.com,Kalichristensen0610@gmail.com?subject=${subject}&body=${body}`;

    form.reset();
    setStatus("success");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-lg border border-zinc-200 bg-zinc-50 p-5 shadow-sm sm:p-6">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name">
          <Input name="name" autoComplete="name" placeholder="Your name" required />
        </Field>
        <Field label="Phone">
          <Input name="phone" autoComplete="tel" placeholder="Best phone number" required />
        </Field>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Email">
          <Input name="email" type="email" autoComplete="email" placeholder="Email address" required />
        </Field>
        <Field label="Location">
          <Input name="location" autoComplete="street-address" placeholder="Project city or address" required />
        </Field>
      </div>
      <Field label="Service needed">
        <select name="service" required className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          {services.map((service) => (
            <option key={service.slug}>{service.title}</option>
          ))}
        </select>
      </Field>
      <Field label="Project details">
        <Textarea name="message" placeholder="Tell us what you need, fuel type, timeline, and any inspection notes." required />
      </Field>
      <Button type="submit" variant="dark" size="lg" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Request an Estimate"}
      </Button>
      {status === "success" ? (
        <p className="rounded-md border border-green-200 bg-green-50 p-4 font-bold text-green-800">
          Thank you! Your email app should open with your project details ready to send. You can also call C&amp;B directly at 208-972-2102.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-md border border-red-200 bg-red-50 p-4 font-bold text-red-800">
          We were unable to send your request. Please try again or call us directly.
        </p>
      ) : null}
    </form>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-black uppercase tracking-wide text-zinc-800">
      {label}
      {children}
    </label>
  );
}
