import { trustedBrands } from "@/lib/data";

export function BrandsCarousel() {
  const brands = [...trustedBrands, ...trustedBrands];

  return (
    <section className="overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-black uppercase tracking-[.2em] text-flame">Brands We Trust</p>
          <h2 className="text-4xl font-extrabold leading-tight text-zinc-950 md:text-5xl">Industry-leading equipment and materials.</h2>
          <p className="mt-4 text-xl leading-8 text-zinc-600">
            We partner with industry-leading manufacturers to provide dependable heating, cooling, gas, and home comfort solutions built to last.
          </p>
        </div>
        <div className="brand-carousel mt-10" aria-label="Brands C&B trusts">
          <div className="brand-track">
            {brands.map((brand, index) => (
              <div key={`${brand}-${index}`} className="brand-logo" aria-label={brand}>
                <span>{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
