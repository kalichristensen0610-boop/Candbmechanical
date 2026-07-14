import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { GoogleReviewCta } from "@/components/google-review-cta";
import { SectionHeading } from "@/components/section-heading";
import { serviceAreaSentence, whyGary } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Meet Gary | About C&B",
  description: "Meet Gary, owner of C&B, serving homeowners throughout Treasure Valley and Valley County with HVAC, gas piping, propane service, heating, cooling, and mechanical work.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-black px-4 py-24 text-white sm:px-6 lg:px-8">
        <Image src="/images/projects/sheet-metal-ductwork.jpg" alt="C&B sheet metal ductwork" fill className="object-cover opacity-42" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/88 to-black/30" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[.24em] text-flame">About C&amp;B</p>
          <h1 className="max-w-5xl text-5xl font-black leading-[.95] tracking-tight md:text-7xl">Meet Gary</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/72">
            Gary has built his reputation on honest work, quality craftsmanship, and taking care of customers the right way.
          </p>
          <p className="mt-5 max-w-4xl text-sm font-bold uppercase tracking-wide text-white/62">{serviceAreaSentence}</p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.8fr]">
          <div className="space-y-6 text-lg leading-8 text-zinc-650">
            <SectionHeading title="Honest recommendations, clear communication, and work built to last." eyebrow="Owner-led workmanship" />
            <p>
              Gary has built his reputation on honest work, quality craftsmanship, and taking care of customers the right way.
            </p>
            <p>
              With years of experience serving homeowners throughout Idaho, he understands that every project is more than just an installation. It is an investment in your home&apos;s comfort, safety, efficiency, and long-term value.
            </p>
            <p>
              What sets Gary apart is his commitment to helping customers through the entire process. Whether a project involves heating and cooling equipment, gas lines, propane service, or coordinating with Intermountain Gas, Gary works to make the experience as straightforward and stress-free as possible.
            </p>
            <p>
              Many contractors complete the installation and leave the remaining coordination to the homeowner. Gary takes a different approach.
            </p>
            <p>
              From equipment selection and planning to utility coordination and final installation, he works to ensure customers have a knowledgeable point of contact throughout the project.
            </p>
            <p className="font-black text-zinc-950">
              His goal is simple: provide honest recommendations, quality workmanship, clear communication, and service that customers can trust for years to come.
            </p>
            <p>
              When you work with Gary, you&apos;re working with someone who genuinely cares about doing the job right and standing behind his work.
            </p>
          </div>
          <aside id="why-choose" className="grid gap-5">
            <figure className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 shadow-premium">
              <div className="relative aspect-[4/5]">
                <Image src="/images/about/gary-family-photo.webp" alt="C&B owner Gary with family" fill className="object-cover" sizes="(min-width: 1024px) 35vw, 100vw" />
              </div>
              <figcaption className="px-5 py-4 text-sm font-bold text-zinc-600">Owner-led service with family values and local accountability.</figcaption>
            </figure>
            <div className="rounded-lg bg-zinc-950 p-7 text-white shadow-premium">
              <h2 className="text-3xl font-extrabold">Why Homeowners Choose Gary</h2>
              <div className="mt-7 grid gap-3">
                {whyGary.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/8 px-4 py-3 text-sm font-bold text-white/82">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-flame" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-zinc-100 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg border border-zinc-200 bg-white p-7 shadow-sm md:p-10">
          <p className="mb-3 text-xs font-black uppercase tracking-[.2em] text-flame">Start-to-Finish Project Coordination</p>
          <h2 className="text-3xl font-extrabold leading-tight text-zinc-950 md:text-5xl">Gary helps guide the full process.</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-zinc-600">
            From equipment installation to coordinating with propane providers and Intermountain Gas, Gary helps guide the entire process so customers aren&apos;t left navigating multiple companies on their own.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-zinc-600">
            His goal is to make every project as smooth, simple, and stress-free as possible.
          </p>
        </div>
      </section>

      <GoogleReviewCta />

      <CtaBand title="Bring in C&B for gas piping, HVAC, water heaters, mini splits, or custom mechanical work." />
    </main>
  );
}
