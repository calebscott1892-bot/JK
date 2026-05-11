import { CheckCircle2, ClipboardCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function WhyChooseSection() {
  return (
    <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <Reveal>
          <SectionHeading
            label="Why Choose JK Plumbing"
            title="The difference should be obvious before the tools come out."
            description="Good plumbing work starts with the way the issue is explained. JK Plumbing Solutions keeps the process clear, practical and focused on what will actually solve the problem."
          />
          <div className="mt-8 rounded-lg bg-navy-950 p-6 text-white">
            <ClipboardCheck aria-hidden="true" size={28} className="text-plumbing-orange" />
            <p className="mt-4 text-lg font-semibold">Licensed, transparent and focused on long-term solutions.</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              You get the next step explained, the scope discussed and the work handled with the finish in mind.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {site.reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 0.04}>
              <div className="flex h-full gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-plumbing-blue" size={22} />
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
