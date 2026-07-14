import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaBand({ title = "Ready to talk through your gas piping or mechanical project?", copy = "Send the basics and C&B will help map the next step with honest guidance and detail focused workmanship." }: { title?: string; copy?: string }) {
  return (
    <section className="bg-zinc-950 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center lg:flex-row lg:justify-between">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-black uppercase tracking-[.2em] text-flame">Free estimates</p>
          <h2 className="text-3xl font-black leading-tight md:text-5xl">{title}</h2>
          <p className="mt-4 text-white/65">{copy}</p>
        </div>
        <Button asChild size="lg">
          <Link href="tel:2089722102">Call 208-972-2102</Link>
        </Button>
      </div>
    </section>
  );
}
