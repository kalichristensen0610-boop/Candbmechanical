import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { GoogleReviewCta } from "@/components/google-review-cta";
import { SectionHeading } from "@/components/section-heading";
import { whyChoose } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About C&B",
  description: "About C&B, serving homeowners throughout Treasure Valley and Valley County with HVAC, gas piping, propane service, heating, cooling, and mechanical work.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
        <Image src="/images/projects/sheet-metal-ductwork.jpg" alt="C&B sheet metal ductwork" fill className="object-cover opacity-42" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/88 to-black/30" />
        <div className="relative mx-auto max-w-5xl text-center">
          <h1 className="text-6xl font-black leading-[.95] tracking-tight md:text-8xl">About C&amp;B</h1>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div className="space-y-4 text-center text-xl leading-8 text-zinc-650">
            <SectionHeading title="Quality work. Clear communication." eyebrow="Company" />
            <p>
              C&amp;B is built on honest recommendations, safe installations, and dependable service for homeowners, builders, remodels, shops, ADUs, and custom projects.
            </p>
            <p>
              The company focuses on natural gas and propane piping, while also bringing hands-on mechanical experience with HVAC systems, water heaters, mini splits, sheet metal, and residential project coordination.
            </p>
            <p>
              Every project is handled with attention to detail, practical planning, and a goal of making the work straightforward from first conversation to final installation.
            </p>
          </div>
          <aside className="rounded-lg bg-zinc-950 p-7 text-white shadow-premium">
            <h2 className="text-center text-3xl font-extrabold">The C&amp;B Standard</h2>
            <div className="mt-7 grid gap-3">
              {whyChoose.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/8 px-4 py-3 text-sm font-bold text-white/82">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-flame" />
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-zinc-100 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1fr] lg:items-center">
          <div className="text-center">
            <SectionHeading eyebrow="Meet the Owner" title="Meet the Owner" />
            <div className="mt-6 space-y-4 text-xl leading-8 text-zinc-650">
              <p>
                Gary has built his reputation on honest work, quality craftsmanship, and taking care of customers the right way.
              </p>
              <p>
                He helps customers through equipment planning, gas line questions, propane service, Intermountain Gas coordination, and final installation so projects feel clear and manageable.
              </p>
              <p className="font-black text-zinc-950">
                His goal is simple: honest recommendations, quality workmanship, clear communication, and service customers can trust.
              </p>
            </div>
          </div>
          <aside className="grid gap-5">
            <figure className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 shadow-premium">
              <div className="relative aspect-[4/5]">
                <Image src="/images/about/gary-family-photo.webp" alt="C&B owner Gary with family" fill className="object-cover" sizes="(min-width: 1024px) 35vw, 100vw" />
              </div>
              <figcaption className="px-5 py-4 text-sm font-bold text-zinc-600">Owner-led service with family values and local accountability.</figcaption>
            </figure>
          </aside>
        </div>
      </section>

      <GoogleReviewCta />

      <CtaBand title="Bring in C&B for gas piping, HVAC, water heaters, mini splits, or custom mechanical work." />
    </main>
  );
}
