import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function ProjectRangeSection() {
  return (
    <section className="overflow-hidden bg-charcoal-950 px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal>
          <SectionHeading
            inverse
            label="From Small Fixes To Major Projects"
            title="Same standard, different scale."
            description="The work might be a leaking tap, a drain investigation, a bathroom renovation or plumbing for a new build. The approach stays consistent: understand the job, communicate clearly and finish with care."
          />

          <div className="mt-8 grid gap-4">
            {site.projectRange.map((item, index) => (
              <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
                <div className="flex items-start gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-plumbing-orange text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.examples.map((example) => (
                        <li
                          key={example}
                          className="inline-flex items-center gap-2 rounded-lg bg-white/[0.07] px-3 py-2 text-xs font-medium text-slate-100"
                        >
                          <CheckCircle2 aria-hidden="true" size={14} className="text-plumbing-blue" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative min-h-[520px]">
            <div className="absolute left-0 top-0 h-[62%] w-[72%] overflow-hidden rounded-lg border border-white/10 bg-slate-800 shadow-2xl shadow-black/30">
              <Image
                src="/images/bathroom.jpg"
                alt="Finished bathroom plumbing project"
                fill
                sizes="(min-width: 1024px) 38vw, 80vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 h-[54%] w-[58%] overflow-hidden rounded-lg border border-white/10 bg-slate-800 shadow-2xl shadow-black/40">
              <Image
                src="/images/tap.JPEG"
                alt="Outdoor tap plumbing repair with running water"
                fill
                sizes="(min-width: 1024px) 28vw, 70vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-[24%] left-[8%] max-w-[260px] rounded-lg border border-white/10 bg-navy-950/92 p-5 shadow-xl backdrop-blur">
              <p className="text-sm font-semibold text-plumbing-orange">Built for real jobs</p>
              <p className="mt-2 text-lg font-semibold leading-tight text-white">
                Repairs, maintenance and project plumbing all sit under one practical process.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
