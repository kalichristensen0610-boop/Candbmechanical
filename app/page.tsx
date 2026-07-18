import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BrandsCarousel } from "@/components/brands-carousel";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { GoogleReviewCta } from "@/components/google-review-cta";
import { PhotoGrid } from "@/components/photo-grid";
import { SectionHeading } from "@/components/section-heading";
import { ServiceAreaMap } from "@/components/service-area-map";
import { ServiceCard } from "@/components/service-card";
import { services, whyChoose } from "@/lib/data";

const featuredServices = services.slice(0, 6);

export default function HomePage() {
  return (
    <main>
      <section className="relative isolate min-h-[calc(94vh-5rem)] overflow-hidden bg-zinc-950 text-white sm:min-h-[calc(98vh-5rem)]">
        <Image src="/images/hero/idaho-backyard-gas-firepit.webp" alt="Idaho backyard outdoor living space with a built-in gas fire pit" fill className="hero-image-motion object-cover object-center opacity-95" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/78 via-zinc-950/48 to-zinc-950/86" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(214,32,39,.18),transparent_34%)]" />
        <div className="relative mx-auto flex min-h-[calc(94vh-5rem)] max-w-7xl items-center justify-center px-4 py-20 text-center sm:min-h-[calc(98vh-5rem)] sm:px-6 lg:px-8">
          <div className="reveal-up max-w-5xl">
            <p className="mb-5 text-base font-black uppercase tracking-[.22em] text-white/78 sm:text-lg">Natural Gas • Propane • Mechanical</p>
            <h1 className="mx-auto max-w-5xl text-6xl font-extrabold leading-[.88] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">Idaho&apos;s Gas Piping Specialist</h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-white/78 sm:text-2xl">
              Clean, dependable gas piping and mechanical work for homes, shops, remodels, outdoor living spaces, and equipment upgrades.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 shadow-[0_18px_46px_rgba(214,32,39,.32)]"><Link href="tel:2089722102">Call Now</Link></Button>
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8"><Link href="/contact">Request Free Estimate</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-4 py-5 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3">
          {["27+ Years", "Established 2017", "Licensed", "Bonded", "Insured"].map((item) => (
            <div key={item} className="min-w-[155px] rounded-full bg-white px-5 py-3 text-center text-sm font-black uppercase tracking-wide text-flame shadow-[0_12px_30px_rgba(0,0,0,.22)] ring-1 ring-white/70 sm:text-base">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
          <SectionHeading eyebrow="What C&B does" title="Natural gas, propane, and mechanical work built with care." />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Complete home gas systems",
              "Underground gas lines",
              "Outdoor living gas lines",
              "HVAC and water heaters",
            ].map((item) => (
              <div key={item} className="hover-lift reveal-up rounded-lg border border-zinc-300 bg-zinc-200/80 p-6 text-center text-xl font-extrabold text-zinc-950 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal-up bg-zinc-950 px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-base font-black uppercase tracking-[.2em] text-flame">About C&amp;B</p>
          <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">Trusted gas piping work done right.</h2>
          <p className="mt-5 text-xl leading-8 text-white/72">
            C&amp;B is known for honest work, dependable service, and clean gas piping installations for homes, shops, remodels, outdoor living spaces, and mechanical projects.
          </p>
          <Button asChild className="mt-7" variant="secondary"><Link href="/about">About C&amp;B</Link></Button>
        </div>
      </section>

      <section className="bg-zinc-100 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <SectionHeading eyebrow="Core services" title="Gas piping and mechanical services for serious residential projects." copy="C&B leads with natural gas and propane expertise, then supports the full mechanical picture when your project needs more." />
            <Button asChild variant="dark" className="mt-7"><Link href="/services">All Services <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>

      <BrandsCarousel />

      <ServiceAreaMap />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Process" title="Clear steps. Clean work." copy="C&B reviews the project, installs the system, and tests the work before the job is complete." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["01", "Review the project", "C&B looks at the fuel source, equipment, route, distance, and project timing."],
              ["02", "Build the system", "The work is installed with clean routing, practical shutoff access, and detail focused craftsmanship."],
              ["03", "Test and finish", "New and repaired gas piping can be pressure tested before equipment startup or inspection follow up."],
            ].map(([step, title, copy]) => (
              <div key={step} className="hover-lift reveal-up rounded-lg border border-zinc-200 bg-zinc-50 p-7">
                <p className="text-sm font-black text-flame">{step}</p>
                <h3 className="mt-8 text-center text-2xl font-black text-zinc-950">{title}</h3>
                <p className="mt-3 text-zinc-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col items-center gap-6 text-center">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-black uppercase tracking-[.2em] text-flame sm:text-base">Project proof</p>
              <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">Recent Projects</h2>
              <p className="mt-4 text-xl leading-8 text-white/70">Take a look at recent heating, cooling, gas line, and home comfort projects throughout Treasure Valley and Valley County.</p>
            </div>
            <Button asChild variant="secondary"><Link href="/gallery">View Full Gallery</Link></Button>
          </div>
          <div className="[&>div>figure]:border-white/10 [&>div>figure]:bg-white/5 [&>div>figure_figcaption]:text-white">
            <PhotoGrid limit={6} />
          </div>
        </div>
      </section>

      <GoogleReviewCta />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div id="why-choose" className="text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[.2em] text-flame sm:text-base">Why choose C&amp;B?</p>
            <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">Locally owned, trusted, and detail focused.</h2>
            <p className="mt-4 text-xl leading-8 text-zinc-600">
              C&amp;B works on everything from custom homes and remodels to complete mechanical systems and specialty gas installations, with a primary focus on safe natural gas and propane systems throughout Treasure Valley and Valley County.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {whyChoose.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-zinc-50 p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-flame" />
                <span className="font-bold text-zinc-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <SectionHeading eyebrow="FAQ" title="Common gas piping questions." copy="A few quick answers before you call C&B about your project." />
          <div className="grid gap-4">
            {[
              ["Do you work on both natural gas and propane?", "Yes. C&B installs and services piping for both natural gas and propane systems."],
              ["Can you install underground gas lines?", "Yes. Underground gas lines are available for pool heaters, detached shops, outdoor kitchens, fire features, generators, and equipment pads."],
              ["Do you handle outdoor fire pits and BBQ gas lines?", "Yes. C&B installs gas lines for fire pits, fire tables, built in grills, outdoor kitchens, patio heaters, pool heaters, and hot tub heaters."],
              ["Do you offer HVAC and water heater work too?", "Yes. Gas piping is the primary focus, and C&B also brings experience with HVAC systems, tank and tankless water heaters, mini splits, sheet metal, remodels, ADUs, and custom homes."],
              ["Are you licensed, bonded, and insured?", "Yes. C&B is licensed, bonded, and insured."],
              ["How do I get started?", "Call 208-972-2102 or request service through the contact page with the project location, fuel type, equipment, and timing."],
            ].map(([question, answer]) => (
              <details key={question} className="group rounded-lg border border-zinc-200 bg-zinc-50 p-5 open:bg-white open:shadow-sm">
                <summary className="cursor-pointer list-none text-lg font-black text-zinc-950">
                  {question}
                  <span className="float-right text-flame group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-7 text-zinc-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
