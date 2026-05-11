import Image from "next/image";
import { ArrowRight, CheckCircle2, ClipboardCheck, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-plumbing-blue to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[0.98fr_1.02fr] lg:px-8 lg:py-24">
        <Reveal className="flex flex-col justify-center">
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Campbelltown plumber for repairs, renovations and maintenance done properly.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            When plumbing interrupts the day, you want a clear answer, a fair conversation
            about the work and no shortcut fix. JK Plumbing Solutions handles licensed
            residential, commercial and maintenance plumbing across Sydney.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phone.href}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-plumbing-orange px-5 py-3 text-base font-semibold text-white transition hover:bg-orange-600"
            >
              <Phone aria-hidden="true" size={20} />
              Call {site.phone.display}
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              Request a Quote
              <ArrowRight aria-hidden="true" size={19} />
            </a>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-300">
            For blocked drains, leaks, hot water issues or planned fit-offs, calling is the fastest way to get the job moving.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
              <ShieldCheck aria-hidden="true" size={18} className="text-plumbing-blue" />
              <p className="mt-2 text-xs font-medium uppercase text-slate-400">Licence</p>
              <p className="mt-1 text-sm font-semibold text-white">{site.plumbingLicence}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
              <CheckCircle2 aria-hidden="true" size={18} className="text-plumbing-blue" />
              <p className="mt-2 text-xs font-medium uppercase text-slate-400">ABN</p>
              <p className="mt-1 text-sm font-semibold text-white">{site.abn}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
              <MapPin aria-hidden="true" size={18} className="text-plumbing-orange" />
              <p className="mt-2 text-xs font-medium uppercase text-slate-400">Local base</p>
              <p className="mt-1 text-sm font-semibold text-white">{site.location}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="relative">
          <div className="relative grid gap-3 sm:block sm:min-h-[560px]">
            <div className="relative min-h-[330px] overflow-hidden rounded-lg border border-white/10 bg-charcoal-900 shadow-2xl shadow-black/30 sm:absolute sm:right-0 sm:top-6 sm:h-[500px] sm:w-[78%]">
              <Image
                src="/images/sink%20and%20tap.jpg"
                alt="Completed kitchen sink and tap plumbing work"
                fill
                priority
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/78 via-navy-950/5 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-navy-950/88 p-4 backdrop-blur">
                <p className="text-sm font-semibold text-white">Licensed work for homes, businesses and project sites.</p>
                <p className="mt-1 text-sm text-slate-300">Repairs, maintenance, renovations, fit-offs and new builds.</p>
              </div>
            </div>

            <div className="relative min-h-[210px] overflow-hidden rounded-lg border border-white/10 bg-charcoal-900 shadow-xl sm:absolute sm:left-0 sm:top-0 sm:h-[245px] sm:w-[45%]">
              <Image
                src="/images/tech.JPEG"
                alt="Drain inspection equipment used during plumbing work"
                fill
                sizes="(min-width: 1024px) 22vw, 80vw"
                className="object-cover"
              />
            </div>

            <div className="rounded-lg border border-white/10 bg-white p-5 text-navy-950 shadow-xl sm:absolute sm:bottom-6 sm:left-8 sm:w-[310px]">
              <p className="text-sm font-semibold text-plumbing-blue">Best first step</p>
              <p className="mt-2 text-xl font-semibold leading-tight">Call and describe what is happening.</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                A quick call is usually enough to work out the right next move.
              </p>
              <a
                href={site.phone.href}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-plumbing-orange"
              >
                <Phone aria-hidden="true" size={17} />
                {site.phone.display}
              </a>
            </div>

            <div className="rounded-lg border border-white/10 bg-navy-950/90 p-4 shadow-xl backdrop-blur sm:absolute sm:right-6 sm:top-0 sm:w-[245px]">
              <div className="flex items-center gap-3">
                <ClipboardCheck aria-hidden="true" size={20} className="text-plumbing-orange" />
                <p className="text-sm font-semibold text-white">Clear process</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Find the issue, explain the options and complete the work properly.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="border-y border-white/10 bg-charcoal-950/65">
        <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-3 px-4 py-4 text-sm text-slate-200 sm:px-6 lg:px-8">
          {site.trustItems.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <CheckCircle2 aria-hidden="true" size={16} className="text-plumbing-blue" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
