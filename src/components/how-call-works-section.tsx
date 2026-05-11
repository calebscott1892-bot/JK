import { Camera, CheckCircle2, ClipboardList, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

const processIcons = [Phone, Camera, ClipboardList, CheckCircle2] as const;

export function HowCallWorksSection() {
  return (
    <section className="bg-charcoal-950 px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            inverse
            align="center"
            label="How The Call Usually Works"
            title="No overcomplicated intake. Just a useful first conversation."
            description="The aim is to get the job moving without pretending every plumbing issue can be diagnosed from a form."
          />
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-plumbing-blue to-transparent lg:block" />
          <div className="grid gap-5 lg:grid-cols-4">
          {site.processSteps.map((step, index) => {
            const Icon = processIcons[index];

            return (
              <Reveal key={step.title} delay={index * 0.04}>
                <article className="relative h-full rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/20 backdrop-blur">
                  <div className="flex items-center gap-4 lg:block">
                    <div className="relative z-10 flex size-18 items-center justify-center rounded-full border-4 border-charcoal-950 bg-plumbing-orange text-white shadow-xl shadow-black/30">
                      <Icon aria-hidden="true" size={26} />
                    </div>
                    <span className="font-mono text-2xl font-semibold text-white/25 lg:mt-6 lg:block">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-tight text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
                </article>
              </Reveal>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
