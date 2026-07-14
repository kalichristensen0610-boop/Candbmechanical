import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { seoServiceAreaSentence, serviceAreaSentence, serviceAreas } from "@/lib/data";

export const metadata: Metadata = {
  title: "Service Areas",
  description: seoServiceAreaSentence,
};

export default function ServiceAreasPage() {
  return (
    <main>
      <section className="bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[.24em] text-flame">Service Areas</p>
          <h1 className="text-6xl font-black leading-[.95] tracking-tight md:text-8xl">Gas piping, HVAC, and mechanical service throughout Treasure Valley and Valley County.</h1>
          <p className="mx-auto mt-5 max-w-4xl text-xl leading-8 text-white/72">{serviceAreaSentence}</p>
        </div>
      </section>
      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Local service" title="Choose your area." copy="Each area page highlights C&B's gas piping, outdoor fuel lines, propane service, HVAC, heating, cooling, water heaters, mini splits, sheet metal, and remodel support for that community." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <Link key={area.slug} href={`/service-areas/${area.slug}`} className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-premium">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-3xl font-black text-zinc-950">{area.city}</h2>
                  <ArrowUpRight className="mt-1 h-5 w-5 text-flame" />
                </div>
                <p className="mt-3 text-zinc-600">{area.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
