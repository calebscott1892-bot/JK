import {
  Building2,
  Check,
  ClipboardList,
  Home,
  Siren,
  Wrench,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

const serviceGroupIcons = [
  Siren,
  Home,
  Wrench,
  Building2,
] as const;

export function ServicesSection() {
  return (
    <section id="services" className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            label="Services"
            title="Four clear ways JK Plumbing Solutions can help."
            description="Instead of a long menu of plumbing jargon, the work is grouped around the reason people usually call: something urgent, something at home, something being built or something that needs ongoing maintenance."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {site.serviceGroups.map((group, index) => {
            const Icon = serviceGroupIcons[index];

            return (
              <Reveal key={group.title} delay={index * 0.03}>
                <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-plumbing-blue/35 hover:shadow-lg hover:shadow-slate-200/70">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-blue-50 text-plumbing-blue">
                      <Icon aria-hidden="true" size={23} />
                    </div>
                    <span className="font-mono text-sm font-semibold text-slate-300">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-tight text-navy-950">{group.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{group.description}</p>
                  <ul className="mt-6 space-y-2 border-t border-slate-100 pt-5">
                    {group.items.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <Check aria-hidden="true" size={15} className="text-plumbing-blue" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-col gap-4 rounded-lg bg-slate-50 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <ClipboardList aria-hidden="true" size={22} className="mt-1 text-plumbing-orange" />
              <p className="max-w-3xl text-sm leading-6 text-slate-700">
                Not sure which category fits? Call through what is happening and JK Plumbing Solutions can help work out the practical next step.
              </p>
            </div>
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
