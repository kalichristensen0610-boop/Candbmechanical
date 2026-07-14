import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { googleReviewUrl } from "@/lib/data";

export function GoogleReviewCta() {
  return (
    <section id="reviews" className="bg-zinc-950 px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-lg border border-white/10 bg-white/6 p-7 text-center shadow-premium md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <div className="mb-4 flex justify-center gap-1 text-flame" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="text-xs font-black uppercase tracking-[.2em] text-flame">Google Reviews</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">Worked with us? We&apos;d love your feedback.</h2>
          <p className="mt-4 max-w-3xl text-xl leading-8 text-white/70">
            Reviews help local homeowners find a dependable contractor for HVAC, gas line installation, propane service, heating, cooling, and home comfort projects.
          </p>
        </div>
        <Button asChild size="lg" className="w-full md:w-auto">
          <Link href={googleReviewUrl} target="_blank" rel="noopener noreferrer">
            Leave a Google Review
          </Link>
        </Button>
      </div>
    </section>
  );
}
