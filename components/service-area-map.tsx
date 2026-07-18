import Link from "next/link";
import { MapPin } from "lucide-react";
import { serviceAreas } from "@/lib/data";

const mapPoints = [
  { city: "McCall", x: 50, y: 10 },
  { city: "Donnelly", x: 48, y: 20 },
  { city: "Cascade", x: 45, y: 31 },
  { city: "Caldwell", x: 20, y: 70 },
  { city: "Nampa", x: 31, y: 76 },
  { city: "Middleton", x: 37, y: 64 },
  { city: "Star", x: 45, y: 67 },
  { city: "Eagle", x: 54, y: 62 },
  { city: "Meridian", x: 54, y: 74 },
  { city: "Boise", x: 68, y: 77 },
  { city: "Kuna", x: 50, y: 88 },
];

export function ServiceAreaMap() {
  return (
    <section className="bg-zinc-100 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
        <div className="reveal-up text-center lg:text-left">
          <p className="mb-3 text-base font-black uppercase tracking-[.2em] text-flame sm:text-lg">Service Areas</p>
          <h2 className="text-4xl font-extrabold leading-tight text-zinc-950 md:text-6xl">Proudly Serving the Treasure Valley &amp; Valley County</h2>
          <p className="mt-5 text-xl leading-8 text-zinc-600">
            C&amp;B serves gas piping, propane, HVAC, and home comfort projects from Middleton across the Treasure Valley and north into Valley County.
          </p>
          <Link href="/service-areas" className="mt-7 inline-flex rounded-full bg-zinc-950 px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-flame">
            View All Service Areas
          </Link>
        </div>
        <div className="reveal-up overflow-x-auto rounded-lg border border-zinc-200 bg-white p-3 shadow-sm sm:p-5">
          <div className="relative min-h-[430px] min-w-[620px] overflow-hidden rounded-md">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_54%_68%,rgba(214,32,39,.16),transparent_26%),linear-gradient(135deg,#fff,#f4f4f5)]" />
            <div className="absolute left-[12%] top-[8%] h-[84%] w-[72%] rounded-[48%] border border-zinc-300/70" />
            <div className="absolute left-[25%] top-[18%] h-[68%] w-[45%] rotate-6 rounded-[44%] border border-dashed border-zinc-300" />
            <div className="absolute inset-x-8 top-8 flex items-center justify-between text-xs font-black uppercase tracking-[.18em] text-zinc-400">
              <span>Valley County</span>
              <span>Idaho</span>
            </div>
            <div className="absolute inset-x-8 bottom-8 text-xs font-black uppercase tracking-[.18em] text-zinc-400">Treasure Valley</div>
            {mapPoints.map((point) => {
              const area = serviceAreas.find((item) => item.city === point.city);

              if (!area) {
                return null;
              }

              return (
                <Link
                  key={point.city}
                  href={`/service-areas/${area.slug}`}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${point.x}%`, top: `${point.y}%` }}
                  aria-label={`View ${point.city} service area`}
                >
                  <span className="flex items-center gap-2 rounded-full bg-zinc-950 px-3 py-2 text-xs font-black text-white shadow-[0_14px_34px_rgba(0,0,0,.22)] transition hover:-translate-y-0.5 hover:bg-flame">
                    <MapPin className="h-3.5 w-3.5 text-flame group-hover:text-white" />
                    {point.city}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
