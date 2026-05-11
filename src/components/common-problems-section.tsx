import { ArrowRight, Droplet, Flame, Hammer, Home, Thermometer, TriangleAlert } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

const problemIcons = [Droplet, Thermometer, TriangleAlert, Flame, Home, Hammer] as const;

export function CommonProblemsSection() {
  return (
    <section id="problems" className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <SectionHeading
              label="What's Happening At Your Place?"
              title="Start with the problem. The plumbing category can come after."
              description="Most calls are not neat service categories. They start with water where it should not be, water not moving, water running cold, or a job that needs to be built properly."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-lg bg-charcoal-950 p-6 text-white shadow-xl shadow-slate-200/70">
              <p className="text-sm font-semibold text-plumbing-orange">Call-first advice</p>
              <p className="mt-2 text-2xl font-semibold leading-tight">
                Tell James what you can see, hear or smell. Send photos after if they help.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                You do not need the perfect trade terms. Just explain the issue and where the job is.
              </p>
              <a
                href={site.phone.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                Call {site.phone.display}
                <ArrowRight aria-hidden="true" size={17} />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {site.commonProblems.map((problem, index) => {
            const Icon = problemIcons[index];

            return (
              <Reveal key={problem.title} delay={index * 0.04}>
                <article className="flex h-full flex-col justify-between rounded-lg border border-slate-200 bg-slate-50 p-6 transition hover:border-plumbing-blue/40 hover:bg-white hover:shadow-lg hover:shadow-slate-200/70">
                  <div>
                    <div className="flex size-11 items-center justify-center rounded-lg bg-white text-plumbing-blue shadow-sm">
                      <Icon aria-hidden="true" size={22} />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold leading-tight text-navy-950">{problem.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{problem.description}</p>
                  </div>
                  <a
                    href={site.phone.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-plumbing-orange"
                  >
                    {problem.action}
                    <ArrowRight aria-hidden="true" size={16} />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
