import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PhotoGrid } from "@/components/photo-grid";
import { SectionHeading } from "@/components/section-heading";
import { seoServiceAreaSentence } from "@/lib/data";

export const metadata: Metadata = {
  title: "Recent Projects",
  description: `View C&B project photos including gas piping, underground gas lines, outdoor living gas lines, HVAC, heating, cooling, water heaters, mini splits, and sheet metal work. ${seoServiceAreaSentence}`,
};

export default function GalleryPage() {
  return (
    <main>
      <section className="bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[.24em] text-flame">Recent Projects</p>
          <h1 className="max-w-5xl text-6xl font-black leading-[.95] tracking-tight md:text-8xl">Real installations. Clean details. Work you can inspect.</h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-white/72">
            Take a look at some of our recent heating, cooling, gas line, and home comfort projects throughout Treasure Valley and Valley County.
          </p>
        </div>
      </section>
      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Proof of work" title="Recent Projects" copy="Browse field photos from gas piping, pool heater lines, underground fuel lines, fire features, HVAC, water heaters, mini splits, and sheet metal projects." />
          <div className="mt-10">
            <PhotoGrid />
          </div>
        </div>
      </section>
      <CtaBand title="See something similar to your project?" copy="Send a few details and C&B can help talk through the fuel source, route, equipment, and next step." />
    </main>
  );
}
