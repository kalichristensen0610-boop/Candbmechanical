import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Handshake, MessageCircle, ShieldCheck, Wrench } from "lucide-react";
import { BrandsCarousel } from "@/components/brands-carousel";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { GoogleReviewCta } from "@/components/google-review-cta";
import { PhotoGrid } from "@/components/photo-grid";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services, whyGary } from "@/lib/data";

const featuredServices = services.slice(0, 6);
const benefits = [
  {
    title: "Gas piping focus",
    copy: "Natural gas and propane systems are the specialty, from complete home systems to fire pits and pool heaters.",
    Icon: ShieldCheck,
  },
  {
    title: "Mechanical background",
    copy: "HVAC, water heaters, mini splits, ductwork, remodels, ADUs, and custom residential projects are all part of the experience.",
    Icon: Wrench,
  },
  {
    title: "Built for trust",
    copy: "Free estimates, clear communication, and work completed with attention to detail.",
    Icon: CheckCircle2,
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative isolate min-h-[calc(82vh-5rem)] overflow-hidden bg-zinc-950 text-white">
        <Image src="/images/projects/gas-meter-black-iron-regulator.jpg" alt="C&B black iron gas piping installation" fill className="object-cover opacity-62" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/88 to-zinc-950/18" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(214,32,39,.24),transparent_34%),linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:auto,52px_52px,52px_52px]" />
        <div className="relative mx-auto flex min-h-[calc(82vh-5rem)] max-w-7xl items-center justify-center px-4 py-14 text-center sm:px-6 lg:px-8 lg:text-left">
          <div className="max-w-5xl">
            <div className="mb-5 flex flex-wrap justify-center gap-2 lg:justify-start">
              {["Outdoor Fire", "Propane Systems", "Gas Lines", "Pool Heaters", "Appliance Hookups"].map((item) => (
                <span key={item} className="rounded-full bg-flame px-4 py-2 text-sm font-black uppercase tracking-wide text-white sm:text-base">
                  {item}
                </span>
              ))}
            </div>
            <h1 className="mx-auto max-w-5xl text-6xl font-extrabold leading-[.9] tracking-tight sm:text-7xl md:text-8xl lg:mx-0 lg:text-8xl">Idaho&apos;s Gas Piping Specialist</h1>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button asChild size="lg"><Link href="tel:2089722102">Call Now</Link></Button>
              <Button asChild size="lg"><Link href="/contact">Request Free Estimate</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-3">
          {["27+ years experience", "Established 2017", "Licensed, bonded & insured"].map((item) => (
            <div key={item} className="rounded-md border border-zinc-200 bg-zinc-50 px-5 py-4 text-center text-sm font-extrabold uppercase tracking-wide text-zinc-950">
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
              <div key={item} className="rounded-lg border border-zinc-200 bg-zinc-50 p-5 font-extrabold text-zinc-950">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[.2em] text-flame">About C&amp;B</p>
            <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">Trusted gas piping work done safely and correctly.</h2>
          </div>
          <div className="space-y-4 text-xl leading-8 text-white/70">
            <p>
              C&amp;B has built a reputation on honest work, dependable service, and gas piping installations completed safely and correctly.
            </p>
            <p>
              From natural gas and propane systems to HVAC, water heaters, outdoor fire features, and remodel support, C&amp;B keeps the work clean, clear, and built to last.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg border border-zinc-200 bg-zinc-50 p-7 shadow-sm md:p-10">
          <p className="mb-3 text-xs font-black uppercase tracking-[.2em] text-flame">Start-to-Finish Project Coordination</p>
          <h2 className="text-3xl font-extrabold leading-tight text-zinc-950 md:text-5xl">One knowledgeable point of contact from planning to final installation.</h2>
          <p className="mt-4 max-w-4xl text-xl leading-8 text-zinc-600">
            From equipment installation to coordinating with propane providers and Intermountain Gas, Gary helps guide the entire process so customers aren&apos;t left navigating multiple companies on their own. His goal is to make every project as smooth, simple, and stress-free as possible.
          </p>
        </div>
      </section>

      <section className="bg-zinc-100 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Why Homeowners Choose Gary" title="Clear communication and dependable project support." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyGary.map((item, index) => {
              const icons = [CheckCircle2, Handshake, MessageCircle, ShieldCheck];
              const Icon = icons[index % icons.length];
              return (
                <div key={item} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
                  <Icon className="mb-6 h-7 w-7 text-flame" />
                  <h3 className="text-xl font-black text-zinc-950">{item}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="Core services" title="Gas piping and mechanical services for serious residential projects." copy="C&B leads with natural gas and propane expertise, then supports the full mechanical picture when your project needs more." />
            <Button asChild variant="dark"><Link href="/services">All Services <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>

      <BrandsCarousel />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="How the work flows" title="A straightforward process from first look to final test." copy="The best gas piping work starts with a clear route, the right materials, and a plan for safe service access." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["01", "Review the project", "C&B looks at the fuel source, equipment, route, distance, and project timing."],
              ["02", "Build the system", "The work is installed with clean routing, practical shutoff access, and detail focused craftsmanship."],
              ["03", "Test and finish", "New and repaired gas piping can be pressure tested before equipment startup or inspection follow up."],
            ].map(([step, title, copy]) => (
              <div key={step} className="rounded-lg border border-zinc-200 bg-zinc-50 p-7">
                <p className="text-sm font-black text-flame">{step}</p>
                <h3 className="mt-10 text-2xl font-black text-zinc-950">{title}</h3>
                <p className="mt-3 text-zinc-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-black uppercase tracking-[.2em] text-flame">Project proof</p>
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
          <div id="why-choose">
            <p className="mb-3 text-xs font-black uppercase tracking-[.2em] text-flame">Why choose C&amp;B?</p>
            <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">Locally owned, trusted, and detail focused.</h2>
            <p className="mt-4 text-xl leading-8 text-zinc-600">
              C&amp;B works on everything from custom homes and remodels to complete mechanical systems and specialty gas installations, with a primary focus on safe natural gas and propane systems throughout Treasure Valley and Valley County.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {whyGary.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-zinc-50 p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-flame" />
                <span className="font-bold text-zinc-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {benefits.map(({ title, copy, Icon }) => (
            <div key={title} className="rounded-lg bg-white p-7 shadow-sm">
              <Icon className="mb-8 h-8 w-8 text-flame" />
              <h3 className="text-2xl font-black">{title}</h3>
              <p className="mt-3 text-zinc-600">{copy}</p>
            </div>
          ))}
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
