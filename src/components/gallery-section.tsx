import { Camera, Image as ImageIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function GallerySection() {
  return (
    <section id="gallery" className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            align="center"
            label="Gallery"
            title="Project photos, ready for real job images."
            description="This section is set up for approved work photos from drains, bathrooms, kitchens, commercial maintenance and new build plumbing."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.gallerySlots.map((slot, index) => (
            <Reveal key={slot} delay={index * 0.04}>
              <article
                className="group overflow-hidden rounded-lg border border-slate-200 bg-slate-50"
                data-image-slot={`/images/client/${slot.toLowerCase().replaceAll(" ", "-")}.jpg`}
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-[linear-gradient(135deg,#f8fafc_0%,#e2e8f0_100%)]">
                  <div className="flex size-14 items-center justify-center rounded-lg bg-white text-plumbing-blue shadow-sm">
                    <ImageIcon aria-hidden="true" size={25} />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 p-4">
                  <div>
                    <h3 className="font-semibold text-navy-950">{slot}</h3>
                    <p className="mt-1 text-sm text-slate-600">Photo coming soon</p>
                  </div>
                  <Camera aria-hidden="true" size={20} className="shrink-0 text-plumbing-orange" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
