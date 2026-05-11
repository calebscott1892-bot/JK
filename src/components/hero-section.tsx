import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Droplets,
  Flame,
  Hammer,
  Phone,
  ShieldCheck,
  Thermometer,
  Wrench,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

const jobCards = [
  { title: "Blocked drain", detail: "Water backing up", icon: Droplets },
  { title: "Hot water issue", detail: "Running cold", icon: Thermometer },
  { title: "Leak repair", detail: "Tap, pipe or fixture", icon: Wrench },
  { title: "Renovation fit-off", detail: "Bathroom, kitchen, laundry", icon: Hammer },
  { title: "Gas installation", detail: "Licensed connection work", icon: Flame },
  { title: "Commercial maintenance", detail: "Repairs and site work", icon: Building2 },
] as const;

export function HeroSection() {
  return (
    <section id="home" className="blue-radial relative overflow-hidden text-white">
      <div className="brand-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-plumbing-blue via-plumbing-orange to-plumbing-blue" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-10 sm:px-6 sm:py-16 lg:min-h-[760px] lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8 lg:py-24">
        <Reveal className="mobile-safe-width flex min-w-0 flex-col justify-center lg:max-w-none">
          <h1 className="max-w-full text-[2rem] font-semibold leading-[1.1] text-white sm:max-w-4xl sm:text-5xl lg:text-6xl">
            Blocked, leaking, cold or building? Call a Campbelltown plumber who gives you a straight answer.
          </h1>
          <p className="mt-6 max-w-full text-base leading-7 text-slate-300 sm:max-w-2xl sm:text-xl sm:leading-8">
            JK Plumbing Solutions handles repairs, maintenance, hot water, gas, renovations
            and new-build plumbing across Sydney. Call James and talk through what is happening.
            You will get a practical next step, not a sales script.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phone.href}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-plumbing-orange px-6 py-4 text-base font-semibold text-white shadow-xl shadow-black/20 transition hover:bg-orange-600"
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

          <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.07] p-3 shadow-xl shadow-black/10 backdrop-blur">
            <ul className="grid gap-2 text-sm text-slate-100 sm:grid-cols-2">
              {site.trustItems.map((item) => (
                <li key={item} className="flex items-center gap-2 rounded-lg bg-white/[0.06] px-3 py-2">
                  {item.includes("Licence") ? (
                    <ShieldCheck aria-hidden="true" size={16} className="text-plumbing-blue" />
                  ) : (
                    <CheckCircle2 aria-hidden="true" size={16} className="text-plumbing-orange" />
                  )}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mobile-safe-width relative min-w-0 lg:max-w-none">
          <div className="relative min-h-[620px] lg:min-h-[660px]">
            <div className="absolute inset-x-3 top-8 h-[540px] rounded-[32px] border border-white/10 bg-navy-950/90 shadow-2xl shadow-black/40 backdrop-blur sm:inset-x-8 lg:inset-x-10" />
            <div className="absolute left-0 top-0 w-[78%] rounded-2xl border border-white/10 bg-charcoal-900 p-5 shadow-2xl shadow-black/30 sm:w-[58%]">
              <div>
                <p className="text-sm font-semibold text-plumbing-blue">Live job board</p>
                <p className="mt-2 text-2xl font-semibold leading-tight">What needs sorting?</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Start with the problem. The trade words can come later.
                </p>
              </div>
            </div>

            <div className="absolute right-0 top-20 z-20 w-[72%] rounded-2xl bg-white p-5 text-navy-950 shadow-2xl shadow-black/35 sm:w-[52%]">
              <div className="flex items-start gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-plumbing-orange text-white">
                  <Phone aria-hidden="true" size={25} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-plumbing-blue">Call James</p>
                  <p className="mt-1 text-3xl font-semibold leading-none">{site.phone.display}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Explain what is blocked, leaking, cold or being built.
                  </p>
                </div>
              </div>
              <a
                href={site.phone.href}
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-navy-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-charcoal-900"
              >
                <Phone aria-hidden="true" size={18} />
                Tap or click to call
              </a>
            </div>

            <div className="absolute bottom-4 left-0 right-0 grid gap-3 sm:grid-cols-2">
              {jobCards.map((job, index) => {
                const Icon = job.icon;

                return (
                  <div
                    key={job.title}
                    className={
                      index === 0
                        ? "translate-y-[-18px] rounded-2xl border border-plumbing-blue/40 bg-plumbing-blue p-4 text-white shadow-2xl shadow-blue-950/30"
                        : index === 3
                          ? "translate-y-[14px] rounded-2xl border border-white/10 bg-white/[0.1] p-4 text-white shadow-xl shadow-black/20 backdrop-blur"
                          : "rounded-2xl border border-white/10 bg-white/[0.08] p-4 text-white shadow-xl shadow-black/20 backdrop-blur"
                    }
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-navy-950">
                        <Icon aria-hidden="true" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold leading-tight">{job.title}</p>
                        <p className={index === 0 ? "mt-1 text-sm text-blue-50" : "mt-1 text-sm text-slate-300"}>
                          {job.detail}
                        </p>
                      </div>
                    </div>
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
