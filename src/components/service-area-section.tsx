import { MapPin, Navigation } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const areas = [
  "Campbelltown",
  "Macarthur region",
  "South West Sydney",
  "Liverpool area",
  "Camden and Narellan",
  "Greater Sydney",
];

export function ServiceAreaSection() {
  return (
    <section id="service-area" className="bg-navy-950 px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionHeading
            inverse
            label="Service Area"
            title="Campbelltown based, servicing all Sydney."
            description="Based in Campbelltown, JK Plumbing Solutions works across the Macarthur region, South West Sydney and wider Sydney depending on the job."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-plumbing-blue text-white">
                <MapPin aria-hidden="true" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Local base, wider Sydney coverage</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  If the job is nearby or elsewhere in Sydney, call through the details and JK Plumbing Solutions can talk you through availability, scope and the next practical step.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-3 rounded-lg bg-white/[0.07] p-4 text-sm font-medium text-slate-100">
                  <Navigation aria-hidden="true" size={16} className="text-plumbing-orange" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
