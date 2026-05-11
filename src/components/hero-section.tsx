import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Flame,
  Hammer,
  MapPin,
  Phone,
  ShieldCheck,
  Thermometer,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

const urgentLinks = [
  { label: "Blocked drains", icon: Droplets },
  { label: "No hot water", icon: Thermometer },
  { label: "Leaks", icon: Wrench },
  { label: "Gas work", icon: Flame },
] as const;

const trustChips = [
  { label: `Licence ${site.plumbingLicence}`, icon: ShieldCheck },
  { label: "Campbelltown based", icon: MapPin },
  { label: "Sydney-wide work", icon: CheckCircle2 },
] as const;

export function HeroSection() {
  return (
    <section id="home" className="blue-radial relative overflow-hidden text-white">
      <div className="brand-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-plumbing-blue via-plumbing-orange to-plumbing-blue" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 sm:py-12 lg:min-h-[640px] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-16">
        <Reveal className="hero-content mobile-safe-width flex min-w-0 flex-col justify-center lg:max-w-none">
          <div className="mb-5 flex flex-wrap gap-2">
            {trustChips.map((item, index) => {
              const Icon = item.icon;

              return (
                <span
                  key={item.label}
                  className={
                    index === 0
                      ? "inline-flex items-center gap-2 rounded-full border border-plumbing-blue/35 bg-plumbing-blue/15 px-3 py-2 text-sm font-semibold text-blue-50"
                      : "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-sm font-semibold text-slate-100"
                  }
                >
                  <Icon
                    aria-hidden="true"
                    size={15}
                    className={index === 0 ? "text-plumbing-blue" : "text-plumbing-orange"}
                  />
                  {item.label}
                </span>
              );
            })}
          </div>

          <h1 className="max-w-full text-[2.35rem] font-semibold leading-[1.02] text-white sm:max-w-4xl sm:text-5xl lg:text-[4.2rem]">
            Plumbing sorted without the runaround.
          </h1>
          <p className="mt-6 max-w-full text-base leading-7 text-slate-300 sm:max-w-2xl sm:text-xl sm:leading-8">
            Blocked drain, leak, cold shower, gas work or a build that needs plumbing planned
            properly? Call James, explain what is happening, and get a clear next step.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phone.href}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-plumbing-orange px-6 py-4 text-base font-bold text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
            >
              <Phone aria-hidden="true" size={20} />
              Call {site.phone.display}
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.05] px-5 py-3 text-base font-semibold text-white transition hover:border-plumbing-blue/60 hover:bg-plumbing-blue/15"
            >
              Send job details
              <ArrowRight aria-hidden="true" size={19} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {urgentLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={site.phone.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3.5 py-2 text-sm font-semibold text-slate-100 transition hover:border-plumbing-orange/60 hover:bg-plumbing-orange/15 hover:text-white"
                >
                  <Icon aria-hidden="true" size={16} className="text-plumbing-blue" />
                  {item.label}
                </a>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="hero-content mobile-safe-width relative min-w-0 lg:max-w-none">
          <div className="relative min-h-[500px] sm:min-h-[560px] lg:min-h-[600px]">
            <div className="absolute -right-6 top-5 h-56 w-56 rounded-full bg-plumbing-blue/25 blur-3xl" />
            <div className="absolute -bottom-10 left-4 h-52 w-52 rounded-full bg-plumbing-orange/15 blur-3xl" />

            <div className="absolute inset-x-0 top-5 overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.08] p-3 shadow-2xl shadow-black/40 backdrop-blur sm:inset-x-8 lg:inset-x-4">
              <div className="relative h-[380px] overflow-hidden rounded-[1.45rem] bg-navy-950 sm:h-[430px] lg:h-[470px]">
                <Image
                  src="/images/tech.JPEG"
                  alt="Drain inspection camera used on a plumbing job"
                  fill
                  sizes="(max-width: 1024px) 92vw, 560px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-navy-950/75 px-3 py-2 text-sm font-semibold text-white backdrop-blur">
                  Real job work
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/12 bg-navy-950/82 p-4 shadow-xl shadow-black/25 backdrop-blur">
                  <p className="text-sm font-semibold text-plumbing-blue">Drain camera checks</p>
                  <p className="mt-1 text-xl font-semibold leading-tight text-white">
                    Find the problem before the fix gets bigger.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-0 z-20 w-[82%] rounded-2xl border border-white/15 bg-white p-4 text-navy-950 shadow-2xl shadow-black/35 sm:right-2 sm:w-[360px]">
              <div className="flex items-center gap-3">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-plumbing-orange text-white">
                  <Phone aria-hidden="true" size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-plumbing-blue">
                    Start here
                  </p>
                  <p className="text-2xl font-semibold leading-none">{site.phone.display}</p>
                </div>
              </div>
              <a
                href={site.phone.href}
                className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-navy-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-charcoal-900"
              >
                <Phone aria-hidden="true" size={17} />
                Call James
              </a>
            </div>

            <div className="absolute bottom-0 left-0 z-20 grid w-[78%] gap-2 rounded-2xl border border-white/10 bg-charcoal-900/92 p-3 shadow-2xl shadow-black/35 backdrop-blur sm:w-[360px]">
              {[
                { label: "Repairs", icon: Wrench },
                { label: "Hot water", icon: Thermometer },
                { label: "Renovations", icon: Hammer },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl bg-white/[0.07] px-3 py-2.5 text-sm font-semibold text-white"
                  >
                    <span className="flex size-9 items-center justify-center rounded-lg bg-plumbing-blue text-white">
                      <Icon aria-hidden="true" size={17} />
                    </span>
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
