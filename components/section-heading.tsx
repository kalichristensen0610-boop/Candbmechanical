import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, copy, className }: { eyebrow?: string; title: string; copy?: string; className?: string }) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? <p className="mb-3 text-xs font-black uppercase tracking-[.2em] text-flame">{eyebrow}</p> : null}
      <h2 className="text-4xl font-extrabold leading-[.98] tracking-tight text-zinc-950 md:text-6xl">{title}</h2>
      {copy ? <p className="mt-5 text-lg leading-8 text-zinc-600">{copy}</p> : null}
    </div>
  );
}
