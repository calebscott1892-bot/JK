import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function WhyChooseSection() {
  return (
    <section className="bg-[#e9eef5] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <Reveal>
          <SectionHeading
            label="Why Choose JK Plumbing"
            title="Clear scope before the work starts."
            description="Good plumbing work starts with a direct explanation of the issue, the likely next step and what needs to be checked on site."
          />
          <div className="mt-8 rounded-lg bg-navy-950 p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-plumbing-orange">
              Licence {site.plumbingLicence}
            </p>
            <p className="mt-4 text-lg font-semibold">Licensed work with the scope discussed upfront.</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              You get the next step explained, the scope discussed and the work handled with the finish in mind.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {site.reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 0.04}>
              <div className="flex h-full gap-4 rounded-lg border border-slate-200 bg-[#f8fafc] p-5 shadow-sm">
                <span className="mt-1 font-mono text-sm font-semibold text-plumbing-blue">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-semibold leading-6 text-navy-950">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{reason.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
