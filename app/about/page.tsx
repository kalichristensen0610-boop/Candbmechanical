import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { whyChoose } from "@/lib/data";

export const metadata: Metadata = {
  title: "About C&B",
  description: "About C&B, a locally owned Treasure Valley gas piping and mechanical contractor founded in 2017 with more than 27 years of experience.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-black px-4 py-24 text-white sm:px-6 lg:px-8">
        <Image src="/images/projects/sheet-metal-ductwork.jpg" alt="C&B sheet metal ductwork" fill className="object-cover opacity-42" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/88 to-black/30" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[.24em] text-flame">About C&amp;B</p>
          <h1 className="max-w-5xl text-5xl font-black leading-[.95] tracking-tight md:text-7xl">Quality workmanship, honesty, and attention to detail.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/72">
            Founded in 2017, C&amp;B is backed by more than 27 years of hands-on experience serving homeowners and builders throughout the Treasure Valley.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.8fr]">
          <div className="space-y-6 text-lg leading-8 text-zinc-650">
            <SectionHeading title="A trusted name in the community since 2017." eyebrow="Owner-led workmanship" />
            <p>
              At C&amp;B, quality workmanship, honesty, and attention to detail are the foundation of every successful project. As a local contractor, I take pride in providing dependable service, quality craftsmanship, and treating every customer with the respect they deserve.
            </p>
            <p>
              Over the years, I&apos;ve built a reputation for reliability by working on everything from custom homes and remodels to complete mechanical systems and specialty gas installations. My experience includes sheet metal fabrication, HVAC systems, tank and tankless water heaters, mini-splits, ADUs, and custom residential projects.
            </p>
            <p>
              Today, my primary focus is what I enjoy most: designing and installing safe, dependable natural gas and propane systems. Whether it&apos;s a complete home gas piping system, underground gas lines, a backyard BBQ, fire pit, patio heater, pool heater, hot tub, or an electric-to-gas conversion, every project is completed with precision and built to last.
            </p>
            <p>
              When I&apos;m not working, you&apos;ll usually find me enjoying Idaho&apos;s outdoors, camping, and spending time with family and friends. I believe the best business relationships are built on trust, communication, and standing behind the work I do. My goal is simple: provide quality craftsmanship and earn customers for life.
            </p>
            <p className="font-black text-zinc-950">Thank you for considering C&amp;B. I look forward to helping with your next project.</p>
          </div>
          <aside id="why-choose" className="rounded-lg bg-zinc-950 p-7 text-white shadow-premium">
            <h2 className="text-3xl font-extrabold">The C&amp;B Standard</h2>
            <div className="mt-7 grid gap-3">
              {whyChoose.map((item) => (
                <div key={item} className="rounded-md border border-white/10 bg-white/8 px-4 py-3 text-sm font-bold text-white/82">{item}</div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <CtaBand title="Bring in C&B for gas piping, HVAC, water heaters, mini splits, or custom mechanical work." />
    </main>
  );
}
