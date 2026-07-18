import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { seoServiceAreaSentence, serviceAreas, services } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://candbmechanicalandgas.com"),
  title: {
    default: "C&B | HVAC, Gas Piping, Propane & Mechanical in Idaho",
    template: "%s | C&B",
  },
  description: `${seoServiceAreaSentence} Idaho gas piping specialist for natural gas, propane, Intermountain Gas coordination, water heaters, mini splits, sheet metal, remodels, and ADUs.`,
  keywords: [
    "HVAC Contractor Treasure Valley",
    "HVAC Contractor Boise",
    "HVAC Contractor McCall",
    "HVAC Contractor Donnelly",
    "HVAC Contractor Cascade",
    "Heating Services Valley County",
    "Cooling Services Valley County",
    "Gas Line Installation Idaho",
    "Propane Services Idaho",
    "Intermountain Gas Contractor",
  ],
  openGraph: {
    title: "C&B | Idaho HVAC, Gas Piping & Propane Specialist",
    description: "Licensed, bonded, and insured gas piping, propane, HVAC, heating, cooling, and mechanical work throughout Treasure Valley and Valley County.",
    images: ["/images/projects/gas-meter-black-iron-regulator.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: "C&B Mechanical",
    alternateName: "C&B",
    telephone: "+12089722102",
    description:
      "C&B provides HVAC, heating, cooling, gas line installation, propane service, natural gas piping, water heaters, mini splits, sheet metal, and mechanical service throughout Treasure Valley and Valley County in Idaho.",
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area.city,
    })),
    makesOffer: services.slice(0, 10).map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.summary,
      },
    })),
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
