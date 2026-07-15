import Image from "next/image";
import Link from "next/link";
import { googleReviewUrl } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Image src="/images/brand/cb-logo-transparent.png" alt="C&B Gas Piping logo" width={320} height={213} className="h-24 w-auto object-contain sm:h-28" />
          <Link href="tel:2089722102" className="mt-5 inline-flex rounded-md bg-flame px-5 py-3 text-base font-black uppercase tracking-wide text-white hover:bg-red-700">
            Call 208-972-2102
          </Link>
        </div>
        <FooterGroup
          title="Services"
          links={[
            ["Gas Piping", "/services/natural-propane-gas-lines"],
            ["Propane Systems", "/services/natural-propane-gas-lines"],
            ["Outdoor Fire Features", "/services/fire-pits"],
            ["Appliance Connections", "/services/electric-to-gas-conversions"],
            ["New Construction", "/services/custom-homes-remodels-adus"],
            ["Repairs & Upgrades", "/services/residential-gas-line-relocation"],
          ]}
        />
        <FooterGroup
          title="Company"
          links={[
            ["About C&B", "/about"],
            ["Contact", "/contact"],
            ["Request an Estimate", "/contact"],
            ["Reviews", googleReviewUrl],
          ]}
        />
        <FooterGroup
          title="Service Areas"
          links={[
            ["Treasure Valley", "/service-areas/surrounding-treasure-valley"],
            ["Valley County", "/service-areas"],
            ["Cascade", "/service-areas/cascade"],
            ["Donnelly", "/service-areas/donnelly"],
            ["McCall", "/service-areas/mccall"],
          ]}
        />
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-sm font-bold uppercase tracking-wide text-white/45">
        C&amp;B Mechanical. Licensed, bonded, and insured. Established 2017.
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs font-bold uppercase tracking-[.12em] text-white/40">
        <p>&copy; 2026 C&amp;B Gas Piping. All Rights Reserved.</p>
        <p className="mt-1">Developed &amp; Designed by Christensen &amp; Co. Agency</p>
      </div>
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3 className="text-sm font-black uppercase tracking-[.18em] text-white">{title}</h3>
      <div className="mt-4 grid gap-2 text-base text-white/68">
        {links.map(([label, href]) => {
          const isExternal = href.startsWith("http");

          return (
            <Link key={href} href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className="hover:text-white">
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
