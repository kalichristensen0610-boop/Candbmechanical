import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { serviceAreas, services } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreas.find((item) => item.slug === slug);
  if (!area) return {};
  return {
    title: `${area.city} Gas Piping & Mechanical Services`,
    description: area.summary,
  };
}

export default async function ServiceAreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = serviceAreas.find((item) => item.slug === slug);
  if (!area) notFound();

  return (
    <main>
      <section className="relative overflow-hidden bg-black px-4 py-24 text-white sm:px-6 lg:px-8">
        <Image src="/images/projects/residential-gas-meter-upgrade.jpg" alt="C&B gas piping service area" fill className="object-cover opacity-42" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/86 to-black/25" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[.24em] text-flame">{area.city}</p>
          <h1 className="max-w-5xl text-5xl font-black leading-[.95] tracking-tight md:text-7xl">Gas piping and mechanical services in {area.city}.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/72">{area.summary}</p>
          <Button asChild className="mt-8"><Link href="/contact">Request Service in {area.city}</Link></Button>
        </div>
      </section>
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">C&amp;B brings specialist gas piping experience to {area.city} projects.</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Whether you are planning a complete home gas system, underground gas line, backyard fire feature, pool heater, water heater, HVAC update, mini split, remodel, or ADU, C&amp;B can help with honest recommendations and detail-focused workmanship.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.slice(0, 10).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-md border border-zinc-200 bg-zinc-50 p-4 font-bold text-zinc-800 hover:bg-white">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title={`Need gas piping or mechanical work in ${area.city}?`} />
    </main>
  );
}
