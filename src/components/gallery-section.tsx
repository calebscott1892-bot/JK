import Image from "next/image";
import { Camera } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function GallerySection() {
  const [featured, ...supporting] = site.workPhotos;

  return (
    <section id="gallery" className="bg-charcoal-950 px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            align="center"
            inverse
            label="Gallery"
            title="Real job photos with the rough edges left in."
            description="Not a stock-photo wall. A tighter look at drains, fixtures, bathrooms, kitchens and maintenance work using the real image set available now."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.28fr_0.72fr]">
          <Reveal>
            <article className="group relative min-h-[520px] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">
              <Image
                src={featured.src}
                alt={featured.alt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-lg bg-plumbing-orange px-3 py-2 text-xs font-semibold text-white">
                  <Camera aria-hidden="true" size={15} />
                  Featured job image
                </div>
                <h3 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-white">{featured.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-200">{featured.description}</p>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {supporting.slice(0, 4).map((photo, index) => (
              <Reveal key={photo.title} delay={index * 0.04}>
                <article className="group relative min-h-[150px] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl shadow-black/20">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 34vw, (min-width: 640px) 48vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/88 via-charcoal-950/35 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-4">
                    <div>
                      <h3 className="font-semibold text-white">{photo.title}</h3>
                      <p className="mt-1 text-sm text-slate-200">{photo.description}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="lg:col-span-2">
            <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 sm:grid-cols-3">
              {site.gallerySlots.slice(0, 3).map((slot) => (
                <div key={slot} className="rounded-xl bg-white/[0.07] p-4">
                  <p className="text-sm font-semibold text-white">{slot}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Available for approved project imagery as the gallery grows.</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
