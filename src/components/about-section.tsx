import Image from "next/image";
import { BadgeCheck, UserRound } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="about" className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal className="relative min-h-[430px] overflow-hidden rounded-lg bg-slate-100">
          <Image
            src="/images/bathroom.jpg"
            alt="Finished bathroom plumbing work"
            fill
            sizes="(min-width: 1024px) 44vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <SectionHeading
            label="About"
            title="Led by James Khouri, built on reliable workmanship."
            description="JK Plumbing Solutions is a Campbelltown based plumbing business servicing Sydney homes, businesses and project sites."
          />

          <div className="mt-7 space-y-5 text-base leading-8 text-slate-650">
            <p>
              Director James Khouri has kept the business focused on the things customers notice straight away: turning up with a plan, explaining the issue in plain English and treating small repairs with the same care as larger projects.
            </p>
            <p>
              The team handles residential, commercial and maintenance plumbing across Sydney and surrounding areas, including blocked drains, hot water, gas installations, renovations, new builds and emergency repairs.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-4">
              <UserRound aria-hidden="true" size={21} className="text-plumbing-blue" />
              <span className="text-sm font-semibold text-navy-950">Director: {site.director}</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-4">
              <BadgeCheck aria-hidden="true" size={21} className="text-plumbing-blue" />
              <span className="text-sm font-semibold text-navy-950">Licence {site.plumbingLicence}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
