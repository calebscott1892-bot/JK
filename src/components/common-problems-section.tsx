import { ArrowRight, Droplet, Flame, Hammer, TriangleAlert } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

const problemIcons = [Droplet, TriangleAlert, Flame, Hammer] as const;

export function CommonProblemsSection() {
  return (
    <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <Reveal>
            <SectionHeading
              label="Common Plumbing Problems"
              title="The calls usually start with a problem that needs a straight answer."
              description="A slow drain, leaking fixture or cold shower can quickly become stressful. The first job is to understand what is happening and explain the practical next step."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-lg bg-navy-950 p-6 text-white">
              <p className="text-sm font-semibold text-plumbing-orange">Fastest path</p>
              <p className="mt-2 text-2xl font-semibold leading-tight">
                Call, describe the issue, then send photos if they help.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                That keeps the first conversation useful without turning the website into a long checklist.
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

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {site.commonProblems.map((problem, index) => {
            const Icon = problemIcons[index];

            return (
              <Reveal key={problem.title} delay={index * 0.04}>
                <article className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-orange-50 text-plumbing-orange">
                    <Icon aria-hidden="true" size={22} />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase text-plumbing-blue">{problem.service}</p>
                  <h3 className="mt-2 text-xl font-semibold leading-tight text-navy-950">{problem.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{problem.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
