import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function CommonProblemsSection() {
  return (
    <section id="problems" className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <SectionHeading
              label="Before The Quote"
              title="Tell us what failed, where it is, and how urgent it is."
              description="Most calls start with a plain description: water backing up, water running cold, a leak, gas work, or plumbing that needs to line up with a build."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-lg bg-charcoal-950 p-6 text-white shadow-xl shadow-slate-200/70">
              <p className="text-sm font-semibold text-plumbing-orange">Call-first advice</p>
              <p className="mt-2 text-2xl font-semibold leading-tight">
                A short call is usually faster than a long form.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Explain what you can see, what has changed, and whether anything is turned off already.
              </p>
              <a
                href={site.phone.href}
                className="mt-5 inline-flex text-sm font-semibold text-white"
              >
                Call {site.phone.display}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {site.commonProblems.map((problem, index) => (
            <Reveal key={problem.title} delay={index * 0.04}>
              <article className="flex h-full flex-col justify-between rounded-lg border border-slate-200 bg-slate-50 p-6 transition hover:border-plumbing-blue/40 hover:bg-white hover:shadow-lg hover:shadow-slate-200/70">
                <div>
                  <span className="font-mono text-sm font-semibold text-plumbing-blue">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold leading-tight text-navy-950">{problem.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{problem.description}</p>
                </div>
                <a
                  href={site.phone.href}
                  className="mt-5 inline-flex text-sm font-semibold text-plumbing-orange"
                >
                  {problem.action}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
