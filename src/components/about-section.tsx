import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="about" className="bg-[#eef2f6] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr] lg:min-h-[520px]">
          <div className="relative min-h-[430px] overflow-hidden rounded-lg bg-slate-200 sm:min-h-full">
            <Image
              src="/images/bathroom%202.JPEG"
              alt="Finished bathroom with vanity, bath and toilet"
              fill
              sizes="(min-width: 1024px) 28vw, (min-width: 640px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-3">
            <div className="relative min-h-[210px] overflow-hidden rounded-lg bg-slate-200">
              <Image
                src="/images/double%20sink.JPEG"
                alt="Double vanity plumbing installation"
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative min-h-[210px] overflow-hidden rounded-lg bg-slate-200">
              <Image
                src="/images/toilet%20and%20sink.JPEG"
                alt="Toilet and sink plumbing installation"
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <SectionHeading
            label="About James / JK Plumbing"
            title="Local plumbing work with clear scope and clean finish."
            description="JK Plumbing Solutions is led by Director James Khouri and based in Campbelltown, servicing homes, businesses and project sites across Sydney."
          />

          <div className="mt-7 space-y-5 text-base leading-8 text-slate-650">
            <p>
              The focus is simple: understand the job properly, explain the options clearly, and complete the work cleanly.
            </p>
            <p>
              That applies whether you are calling about a blocked drain, a hot water issue, gas work, a leaking fixture, a renovation fit-off or plumbing for a new build.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Director</p>
              <p className="mt-2 text-sm font-semibold text-navy-950">{site.director}</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Licence</p>
              <p className="mt-2 text-sm font-semibold text-navy-950">{site.plumbingLicence}</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Base</p>
              <p className="mt-2 text-sm font-semibold text-navy-950">{site.location}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
