import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("http://127.0.0.1:3000"),
  title: {
    default: "C&B | Idaho Gas Piping, Propane, Natural Gas & Mechanical",
    template: "%s | C&B",
  },
  description: "C&B is Idaho's gas piping specialist for natural gas, propane, HVAC, water heaters, mini splits, sheet metal, remodels, and ADUs.",
  openGraph: {
    title: "C&B | Idaho's Gas Piping Specialist",
    description: "Licensed, bonded, and insured gas piping and mechanical work backed by more than 27 years of experience.",
    images: ["/images/projects/gas-meter-black-iron-regulator.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
