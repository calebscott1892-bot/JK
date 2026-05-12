import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function HowCallWorksSection() {
  return (
    <section className="bg-charcoal-950 px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            inverse
            align="center"
            label="Call Process"
            title="A quick call, then a clear next step."
            description="The first conversation should identify the issue, the site, the timing and whether photos will help."
          />
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-white/12 lg:block" />
          <div className="grid gap-5 lg:grid-cols-4">
            {site.processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.04}>
                <article className="relative h-full rounded-xl border border-white/10 bg-white/[0.055] p-6 shadow-xl shadow-black/20">
                  <div className="relative z-10 flex size-16 items-center justify-center rounded-full border-4 border-charcoal-950 bg-plumbing-orange text-lg font-semibold text-white shadow-xl shadow-black/30">
                    0{index + 1}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-tight text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
