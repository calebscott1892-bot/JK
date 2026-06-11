import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#e9eef5] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            label="Services"
            title="Pick the closest job type."
            description="Call with the issue, site location and timing. The scope can be narrowed down from there."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:auto-rows-fr">
          {site.serviceGroups.map((group, index) => {
            const isDark = index === 0 || index === 3;

            return (
              <Reveal
                key={group.title}
                delay={index * 0.03}
                className={index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5"}
              >
                <article
                  className={
                    isDark
                      ? "group flex h-full min-h-[330px] flex-col rounded-xl bg-navy-950 p-7 text-white shadow-2xl shadow-slate-300/50"
                      : "group flex h-full min-h-[330px] flex-col rounded-xl border border-slate-200 bg-[#f8fafc] p-7 shadow-sm transition hover:-translate-y-1 hover:border-plumbing-blue/35 hover:shadow-xl hover:shadow-slate-200/70"
                  }
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={
                        isDark
                          ? "border-b border-plumbing-orange pb-2 font-mono text-lg font-semibold text-white"
                          : "border-b border-plumbing-blue pb-2 font-mono text-lg font-semibold text-navy-950"
                      }
                    >
                      0{index + 1}
                    </span>
                    <span className={isDark ? "text-sm font-semibold text-white/35" : "text-sm font-semibold text-slate-400"}>
                      {group.items.length} common requests
                    </span>
                  </div>
                  <h3 className={isDark ? "mt-8 text-3xl font-semibold leading-tight text-white" : "mt-8 text-3xl font-semibold leading-tight text-navy-950"}>
                    {group.title}
                  </h3>
                  <p className={isDark ? "mt-4 text-base leading-7 text-slate-300" : "mt-4 text-base leading-7 text-slate-600"}>
                    {group.description}
                  </p>
                  <ul className={isDark ? "mt-7 grid gap-2 border-t border-white/10 pt-6 sm:grid-cols-2" : "mt-7 space-y-2 border-t border-slate-100 pt-6"}>
                    {group.items.map((detail) => (
                      <li key={detail} className={isDark ? "flex items-center gap-3 text-sm font-medium text-slate-100" : "flex items-center gap-3 text-sm font-medium text-slate-700"}>
                        <span className={isDark ? "h-px w-4 shrink-0 bg-plumbing-orange" : "h-px w-4 shrink-0 bg-plumbing-blue"} aria-hidden="true" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={site.phone.href}
                    className={isDark ? "mt-auto inline-flex pt-8 text-sm font-semibold text-plumbing-orange" : "mt-auto inline-flex pt-8 text-sm font-semibold text-plumbing-blue"}
                  >
                    Call about {group.title.toLowerCase()}
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-col gap-4 rounded-lg border border-slate-200 bg-[#f8fafc] p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-3xl text-sm leading-6 text-slate-700">
              Not sure which one fits? Call through what is happening, where the job is and whether it is urgent.
            </p>
            <a
              href={site.phone.href}
              className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-navy-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-charcoal-900"
            >
              Call {site.phone.display}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
