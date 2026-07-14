import Image from "next/image";
import Link from "next/link";
import { serviceAreaSentence, serviceAreas, services } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Image src="/images/brand/cb-logo-transparent.png" alt="C&B Gas Piping logo" width={320} height={213} className="h-28 w-auto object-contain" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/62">
            Idaho&apos;s gas piping specialist for natural gas, propane, mechanical systems, water heaters, HVAC, heating, cooling, mini splits, and custom residential work.
          </p>
          <p className="mt-4 max-w-sm text-xs font-bold uppercase leading-6 tracking-wide text-white/45">
            {serviceAreaSentence}
          </p>
          <Link href="tel:2089722102" className="mt-6 inline-flex rounded-md bg-flame px-5 py-3 text-sm font-black uppercase tracking-wide text-white hover:bg-red-700">
            Call 208-972-2102
          </Link>
        </div>
        <FooterGroup title="Company" links={[["About", "/about"], ["Gallery", "/gallery"], ["Contact", "/contact"]]} />
        <FooterGroup title="Services" links={services.slice(0, 6).map((service) => [service.title, `/services/${service.slug}`])} />
        <FooterGroup title="Areas" links={serviceAreas.slice(0, 8).map((area) => [area.city, `/service-areas/${area.slug}`])} />
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs font-bold uppercase tracking-wide text-white/45">
        C&amp;B Mechanical. Licensed, bonded, and insured. Established 2017.
      </div>
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3 className="text-sm font-black uppercase tracking-[.18em] text-white">{title}</h3>
      <div className="mt-4 grid gap-2 text-sm text-white/62">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="hover:text-white">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
