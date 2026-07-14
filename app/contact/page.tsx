import type { Metadata } from "next";
import { seoServiceAreaSentence, serviceAreaSentence } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request a free estimate from C&B for gas piping, propane service, HVAC, heating, cooling, water heaters, mini splits, sheet metal, remodels, and ADUs. ${seoServiceAreaSentence}`,
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[.2em] text-flame">Request service</p>
          <h1 className="max-w-5xl text-6xl font-black leading-[.95] tracking-tight md:text-8xl">Tell C&amp;B about the project.</h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-white/72">
            Call now or send the form. C&amp;B will follow up about gas piping, propane, HVAC, heating, cooling, water heaters, remodels, and ADUs.
          </p>
          <p className="mt-5 max-w-4xl text-sm font-bold uppercase tracking-wide text-white/62">{serviceAreaSentence}</p>
          <Button asChild className="mt-7" size="lg">
            <a href="tel:2089722102">Call 208-972-2102</a>
          </Button>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <aside>
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">Fast estimates for gas piping and mechanical projects.</h2>
            <p className="mt-4 text-xl leading-8 text-zinc-600">
              Include the city, fuel type, equipment, photos if available, and any inspection notes.
            </p>
            <div className="mt-8 rounded-lg bg-zinc-950 p-6 text-white">
              <h3 className="text-2xl font-black">Helpful details</h3>
              <ul className="mt-4 grid gap-2 text-lg text-white/72">
                <li>Natural gas or propane</li>
                <li>Residential, builder, shop, ADU, or commercial</li>
                <li>Equipment being served</li>
                <li>Project location and timing</li>
              </ul>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
