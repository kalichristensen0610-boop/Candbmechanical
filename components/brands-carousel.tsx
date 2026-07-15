import Image from "next/image";
import { trustedBrands } from "@/lib/data";

export function BrandsCarousel() {
  const brands = [...trustedBrands, ...trustedBrands];

  return (
    <section className="overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[.2em] text-flame sm:text-base">Brands We Work With</p>
          <h2 className="text-4xl font-extrabold leading-tight text-zinc-950 md:text-5xl">Industry-leading equipment and materials.</h2>
          <p className="mt-4 text-xl leading-8 text-zinc-600">
            We partner with industry-leading manufacturers to provide dependable heating, cooling, gas, and home comfort solutions built to last.
          </p>
        </div>
        <div className="brand-carousel mt-10" aria-label="Brands C&B trusts">
          <div className="brand-track">
            {brands.map((brand, index) => (
              <div key={`${brand.name}-${index}`} className="brand-logo" aria-label={brand.name}>
                {brand.logo ? (
                  <Image src={brand.logo} alt={`${brand.name} logo`} width={150} height={64} className="max-h-12 w-auto max-w-[150px] object-contain" />
                ) : (
                  <span>{brand.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
