import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/data";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="group overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
        <Image src={service.image} alt={service.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />
        <p className="absolute bottom-4 left-4 rounded-full bg-flame px-3 py-1 text-xs font-black uppercase tracking-wide text-white">{service.category}</p>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-black leading-tight text-zinc-950">{service.title}</h3>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-flame" />
        </div>
        <p className="mt-3 text-sm leading-7 text-zinc-600">{service.summary}</p>
      </div>
    </Link>
  );
}
