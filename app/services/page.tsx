import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Natural gas, propane, complete home gas systems, underground gas lines, HVAC, water heaters, mini splits, sheet metal, remodels, and ADUs from C&B.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-black px-4 py-24 text-white sm:px-6 lg:px-8">
        <Image src="/images/projects/pool-heater-gas-system.jpg" alt="Pool heater gas piping by C&B" fill className="object-cover opacity-48" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/82 to-black/20" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[.24em] text-flame">Services</p>
          <h1 className="max-w-5xl text-5xl font-black leading-[.95] tracking-tight md:text-7xl">Gas piping first. Full mechanical experience behind it.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/72">
            C&amp;B handles natural gas, propane, underground lines, outdoor living fuel lines, water heaters, HVAC systems, mini splits, sheet metal, custom homes, remodels, and ADUs.
          </p>
        </div>
      </section>
      <section className="bg-zinc-100 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Choose a service" title="Specialty services built around real project needs." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
