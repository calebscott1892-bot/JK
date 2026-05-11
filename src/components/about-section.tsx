import Image from "next/image";
import { BadgeCheck, MapPin, UserRound } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="about" className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
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
            label="About James / JK Plumbing"
            title="Local, practical and focused on the job in front of you."
            description="JK Plumbing Solutions is led by Director James Khouri and based in Campbelltown, servicing homes, businesses and project sites across Sydney."
          />

          <div className="mt-7 space-y-5 text-base leading-8 text-slate-650">
            <p>
              The focus is simple: understand the job properly, explain the options clearly, and complete the work without shortcuts.
            </p>
            <p>
              That applies whether you are calling about a blocked drain, a hot water issue, gas work, a leaking fixture, a renovation fit-off or plumbing for a new build.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-4">
              <UserRound aria-hidden="true" size={21} className="text-plumbing-blue" />
              <span className="text-sm font-semibold text-navy-950">Director: {site.director}</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-4">
              <BadgeCheck aria-hidden="true" size={21} className="text-plumbing-blue" />
              <span className="text-sm font-semibold text-navy-950">Licence {site.plumbingLicence}</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-4">
              <MapPin aria-hidden="true" size={21} className="text-plumbing-blue" />
              <span className="text-sm font-semibold text-navy-950">{site.location}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
