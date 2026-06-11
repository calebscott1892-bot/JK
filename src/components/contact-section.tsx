import { Reveal } from "@/components/reveal";
import { QuoteRequestForm } from "@/components/quote-request-form";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="blue-radial relative overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="brand-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.08] shadow-2xl shadow-black/30 backdrop-blur">
            <div className="h-2 bg-gradient-to-r from-plumbing-blue via-plumbing-orange to-plumbing-blue" />
            <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold text-plumbing-orange">Final step</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-5xl">
                  Need a plumber? Start with a quick call.
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                  Tell us what is happening, where the job is, and whether it is urgent.
                  JK Plumbing Solutions can talk through the practical next step.
                </p>
                <p className="mt-5 text-sm font-medium text-slate-300">
                  Licensed plumber | Licence {site.plumbingLicence} | ABN {site.abn}
                </p>
              </div>
              <div className="grid gap-3">
                <a
                  href={site.phone.href}
                  className="inline-flex min-h-14 items-center justify-center rounded-lg bg-plumbing-orange px-6 py-4 text-base font-semibold text-white shadow-xl shadow-black/20 transition hover:bg-orange-600"
                >
                  Call {site.phone.display}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex min-h-14 items-center justify-center rounded-lg border border-white/15 bg-[#e9eef5] px-6 py-4 text-base font-semibold text-navy-950 transition hover:bg-[#dfe7f0]"
                >
                  Email {site.email}
                </a>
              </div>
            </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <SectionHeading
              inverse
              label="Contact Form"
              title="Send the job details for planned work."
              description="For renovation, new build, commercial or non-urgent maintenance enquiries, leave the basics here. For anything leaking, blocked or not working, call first."
            />

            <div className="mt-8 space-y-4">
              <a
                href={site.phone.href}
                className="block rounded-2xl bg-plumbing-orange p-5 text-white shadow-xl shadow-black/20 transition hover:bg-orange-600"
              >
                <span>
                  <span className="block text-sm font-medium">Call us today</span>
                  <span className="block text-2xl font-semibold">{site.phone.display}</span>
                </span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="block rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-white transition hover:border-plumbing-blue/50"
              >
                <span>
                  <span className="block text-sm font-medium text-slate-300">Email</span>
                  <span className="block font-semibold">{site.email}</span>
                </span>
              </a>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <p className="font-semibold text-white">Helpful details to include</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  <li className="flex gap-2">
                    <span className="mt-3 h-px w-4 shrink-0 bg-plumbing-blue" aria-hidden="true" />
                    What is happening and when it started
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-3 h-px w-4 shrink-0 bg-plumbing-blue" aria-hidden="true" />
                    The job location in Campbelltown, Sydney or surrounds
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-3 h-px w-4 shrink-0 bg-plumbing-blue" aria-hidden="true" />
                    Any photos that make the issue easier to understand
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <QuoteRequestForm
              email={site.email}
              services={site.services.map((service) => service.title)}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
