import type { ReactNode } from "react";

export function LegalPage({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <main className="bg-white">
      <section className="bg-zinc-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-base font-black uppercase tracking-[.2em] text-flame sm:text-lg">{eyebrow}</p>
          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">{title}</h1>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="legal-content mx-auto max-w-4xl text-zinc-700">
          {children}
        </div>
      </section>
    </main>
  );
}
