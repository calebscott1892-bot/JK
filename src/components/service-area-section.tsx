import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function ServiceAreaSection() {
  return (
    <section id="areas" className="bg-navy-950 px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionHeading
            inverse
            label="Areas"
            title="Campbelltown is the local anchor. Sydney is the wider work area."
            description="Based in Campbelltown, JK Plumbing Solutions services local jobs and wider Sydney work depending on the job, timing and scope."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-plumbing-blue text-sm font-semibold text-white">
                NSW
              </div>
              <div>
                <h3 className="text-xl font-semibold">Local base, wider Sydney coverage</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  Call through the job location and what is happening. You will get a straight answer on the practical next step.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {site.serviceAreas.map((area) => (
                <div key={area} className="rounded-lg bg-white/[0.07] p-4 text-sm font-medium text-slate-100">
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
