import Image from "next/image";
import { projectImages } from "@/lib/data";

export function PhotoGrid({ limit }: { limit?: number }) {
  const photos = typeof limit === "number" ? projectImages.slice(0, limit) : projectImages;

  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {photos.map((photo, index) => (
        <figure key={photo.src} className="mb-4 break-inside-avoid overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
          <div className="relative aspect-[4/3]">
            <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" priority={index < 2} />
          </div>
          <figcaption className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
            <span className="font-black text-zinc-950">{photo.category}</span>
            <span className="text-zinc-500">C&amp;B project</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
