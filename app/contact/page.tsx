import type { Metadata } from "next";
import { seoServiceAreaSentence, serviceAreaSentence, services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request a free estimate from C&B for gas piping, propane service, HVAC, heating, cooling, water heaters, mini splits, sheet metal, remodels, and ADUs. ${seoServiceAreaSentence}`,
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-black px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[.24em] text-flame">Request service</p>
          <h1 className="max-w-5xl text-5xl font-black leading-[.95] tracking-tight md:text-7xl">Tell C&amp;B about the project.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/72">
            For gas odor or a suspected active leak, leave the area and contact your gas provider or emergency services first. For estimates, repairs, testing, or planning, share the details below.
          </p>
          <p className="mt-5 max-w-4xl text-sm font-bold uppercase tracking-wide text-white/62">{serviceAreaSentence}</p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <aside>
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">Free estimates for gas piping and mechanical projects.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Include the city, fuel type, equipment, photos if available, and any inspection notes. C&amp;B serves Treasure Valley and Valley County projects, including Boise, Meridian, Nampa, Eagle, Star, Middleton, Kuna, Cascade, Donnelly, McCall, and surrounding communities.
            </p>
            <div className="mt-8 rounded-lg bg-zinc-950 p-6 text-white">
              <h3 className="text-2xl font-black">Helpful details</h3>
              <ul className="mt-4 grid gap-2 text-white/70">
                <li>Natural gas or propane</li>
                <li>Residential, builder, shop, ADU, or commercial</li>
                <li>Equipment being served</li>
                <li>Approximate route or distance</li>
                <li>Any inspection or correction notes</li>
              </ul>
            </div>
          </aside>
          <form className="grid gap-5 rounded-lg border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Name"><Input name="name" autoComplete="name" placeholder="Your name" /></Field>
              <Field label="Phone"><Input name="phone" autoComplete="tel" placeholder="Best phone number" /></Field>
            </div>
            <Field label="Email"><Input name="email" type="email" autoComplete="email" placeholder="Email address" /></Field>
            <Field label="Service needed">
              <select name="service" className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                {services.map((service) => <option key={service.slug}>{service.title}</option>)}
              </select>
            </Field>
            <Field label="Project details"><Textarea name="message" placeholder="Tell us about the project, location, timeline, and any inspection notes." /></Field>
            <Button type="button" variant="dark" size="lg">Form Ready For Hosting Setup</Button>
            <p className="text-sm text-zinc-500">No fake phone or email is shown. This form can be connected to email, CRM, or hosting forms when those details are available.</p>
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-black uppercase tracking-wide text-zinc-800">
      {label}
      {children}
    </label>
  );
}
