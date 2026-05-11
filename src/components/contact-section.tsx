import { CheckCircle2, Mail, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="bg-navy-950 px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal>
          <SectionHeading
            inverse
            label="Contact"
            title="Call first. Send the details if it helps."
            description="For leaking fixtures, blocked drains, no hot water or urgent repairs, the quickest path is a phone call. For planned work, the form gives you a simple way to share the scope."
          />

          <div className="mt-8 space-y-4">
            <a
              href={site.phone.href}
              className="flex items-center gap-4 rounded-lg bg-plumbing-orange p-5 text-white shadow-xl shadow-black/20 transition hover:bg-orange-600"
            >
              <Phone aria-hidden="true" size={24} />
              <span>
                <span className="block text-sm font-medium">Call us today</span>
                <span className="block text-2xl font-semibold">{site.phone.display}</span>
              </span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.06] p-5 text-white transition hover:border-plumbing-blue/50"
            >
              <Mail aria-hidden="true" size={23} className="text-plumbing-blue" />
              <span>
                <span className="block text-sm font-medium text-slate-300">Email</span>
                <span className="block font-semibold">{site.email}</span>
              </span>
            </a>
            <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
              <p className="font-semibold text-white">Helpful details to include</p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                <li className="flex gap-2">
                  <CheckCircle2 aria-hidden="true" size={16} className="mt-1 shrink-0 text-plumbing-blue" />
                  What is happening and when it started
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 aria-hidden="true" size={16} className="mt-1 shrink-0 text-plumbing-blue" />
                  The job location in Campbelltown, Sydney or surrounds
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 aria-hidden="true" size={16} className="mt-1 shrink-0 text-plumbing-blue" />
                  Any photos that make the issue easier to understand
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            action={`mailto:${site.email}`}
            method="post"
            encType="text/plain"
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-navy-950">Request a quote</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Share the basics and JK Plumbing Solutions can follow up with the right next step.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-navy-950">
                Name
                <input
                  name="name"
                  autoComplete="name"
                  className="min-h-12 rounded-lg border border-slate-300 px-4 text-base font-normal text-navy-950 outline-none transition focus:border-plumbing-blue focus:ring-4 focus:ring-blue-100"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-navy-950">
                Phone
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="min-h-12 rounded-lg border border-slate-300 px-4 text-base font-normal text-navy-950 outline-none transition focus:border-plumbing-blue focus:ring-4 focus:ring-blue-100"
                  placeholder="Your phone number"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-navy-950">
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="min-h-12 rounded-lg border border-slate-300 px-4 text-base font-normal text-navy-950 outline-none transition focus:border-plumbing-blue focus:ring-4 focus:ring-blue-100"
                  placeholder="you@example.com"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-navy-950">
                Service required
                <select
                  name="service"
                  className="min-h-12 rounded-lg border border-slate-300 bg-white px-4 text-base font-normal text-navy-950 outline-none transition focus:border-plumbing-blue focus:ring-4 focus:ring-blue-100"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {site.services.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-semibold text-navy-950">
              Message
              <textarea
                name="message"
                rows={5}
                className="rounded-lg border border-slate-300 px-4 py-3 text-base font-normal text-navy-950 outline-none transition focus:border-plumbing-blue focus:ring-4 focus:ring-blue-100"
                placeholder="Tell us what is happening, where the job is located, and when you need help."
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-navy-950 px-5 py-3 text-base font-semibold text-white transition hover:bg-charcoal-900 sm:w-auto"
            >
              Send job details
              <Send aria-hidden="true" size={18} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
