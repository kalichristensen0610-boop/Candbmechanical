import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { serviceAreaSentence, services } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.summary} ${serviceAreaSentence}`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <main>
      <section className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
        <Image src={service.image} alt={service.title} fill className="object-cover opacity-48" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/84 to-black/18" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[.24em] text-flame">{service.eyebrow}</p>
          <h1 className="text-6xl font-black leading-[.95] tracking-tight md:text-8xl">{service.title}</h1>
          <p className="mx-auto mt-5 max-w-3xl text-xl leading-8 text-white/72">{service.hero}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild><Link href="/contact">Request Free Estimate</Link></Button>
            <Button asChild variant="secondary"><Link href="/gallery">View Project Photos</Link></Button>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.72fr]">
          <div>
            <p className="text-xl leading-8 text-zinc-600">{service.summary}</p>
            <p className="mt-5 text-xl leading-8 text-zinc-600">
              C&amp;B brings more than 27 years of mechanical experience to each project, with a focus on honest recommendations, clean workmanship, safe fuel delivery, HVAC expertise, propane service, Intermountain Gas coordination, and details that make the system easier to service in the future.
            </p>
            <p className="mt-4 text-xl leading-8 text-zinc-600">{serviceAreaSentence}</p>
            <h2 className="mt-10 text-center text-4xl font-black tracking-tight text-zinc-950">What this service can include</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.bullets.map((item) => (
                <div key={item} className="rounded-md border border-zinc-200 bg-zinc-50 p-4 font-bold text-zinc-800">{item}</div>
              ))}
            </div>
          </div>
          <aside className="overflow-hidden rounded-lg bg-zinc-950 text-white shadow-premium">
            <div className="relative aspect-[4/3]">
              <Image src={service.image} alt={`${service.title} project photo`} fill className="object-cover" />
            </div>
            <div className="p-7">
              <h3 className="text-3xl font-black">Built by C&amp;B</h3>
              <p className="mt-3 text-white/64">Licensed, bonded, insured, locally owned, and established in 2017.</p>
              <Button asChild className="mt-6 w-full"><Link href="/contact">Start This Project</Link></Button>
            </div>
          </aside>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
