import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { serviceAreas, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "HTML Sitemap",
  description: "HTML sitemap for C&B Mechanical & Gas.",
};

export default function HtmlSitemapPage() {
  return (
    <LegalPage eyebrow="Sitemap" title="HTML Sitemap">
      <div className="grid gap-8 md:grid-cols-3">
        <SitemapGroup title="Main Pages" links={[["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Service Areas", "/service-areas"], ["Gallery", "/gallery"], ["Contact", "/contact"]]} />
        <SitemapGroup title="Services" links={services.map((service) => [service.title, `/services/${service.slug}`])} />
        <SitemapGroup title="Service Areas" links={serviceAreas.map((area) => [area.city, `/service-areas/${area.slug}`])} />
      </div>
      <div className="mt-8">
        <SitemapGroup title="Policies" links={[["Privacy Policy", "/privacy-policy"], ["Terms & Conditions", "/terms-and-conditions"], ["Accessibility Statement", "/accessibility-statement"], ["Transparency Policy", "/transparency-policy"]]} />
      </div>
    </LegalPage>
  );
}

function SitemapGroup({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {links.map(([label, href]) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
