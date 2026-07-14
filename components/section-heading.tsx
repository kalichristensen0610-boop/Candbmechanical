import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, copy, className }: { eyebrow?: string; title: string; copy?: string; className?: string }) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? <p className="mb-2 text-sm font-black uppercase tracking-[.18em] text-flame">{eyebrow}</p> : null}
      <h2 className="text-4xl font-extrabold leading-[1.02] tracking-tight text-zinc-950 sm:text-5xl md:text-6xl">{title}</h2>
      {copy ? <p className="mt-4 text-xl leading-8 text-zinc-600">{copy}</p> : null}
    </div>
  );
}
