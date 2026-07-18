import Link from "next/link";
import { Phone } from "lucide-react";

export function StickyCta() {
  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 hidden flex-col gap-3 md:flex">
        <Link
          href="tel:2089722102"
          className="rounded-full bg-flame px-5 py-3 text-sm font-black uppercase tracking-wide text-white shadow-[0_18px_46px_rgba(0,0,0,.25)] transition hover:-translate-y-0.5 hover:bg-red-700"
        >
          Call Now
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-black uppercase tracking-wide text-zinc-950 shadow-[0_18px_46px_rgba(0,0,0,.18)] transition hover:-translate-y-0.5 hover:border-flame hover:text-flame"
        >
          Free Estimate
        </Link>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-zinc-200 bg-white/96 p-3 shadow-[0_-14px_38px_rgba(0,0,0,.14)] backdrop-blur md:hidden">
        <Link href="tel:2089722102" className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-flame px-4 text-sm font-black uppercase tracking-wide text-white">
          <Phone className="h-4 w-4" />
          Call Now
        </Link>
        <Link href="/contact" className="flex min-h-12 items-center justify-center rounded-full border border-zinc-300 bg-zinc-950 px-4 text-center text-sm font-black uppercase tracking-wide text-white">
          Free Estimate
        </Link>
      </div>
    </>
  );
}
