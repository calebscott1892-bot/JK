import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

const urgentLinks = [
  "Blocked drains",
  "No hot water",
  "Leaks",
  "Gas work",
] as const;

const trustChips = [
  `Licence ${site.plumbingLicence}`,
  "Campbelltown based",
  "Sydney-wide work",
] as const;

export function HeroSection() {
  return (
    <section id="home" className="blue-radial relative overflow-hidden text-white">
      <div className="brand-grid absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-plumbing-blue via-plumbing-orange to-plumbing-blue" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 sm:py-12 lg:min-h-[640px] lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:px-8 lg:py-16">
        <Reveal className="hero-content mobile-safe-width flex min-w-0 flex-col justify-center lg:max-w-none">
          <h1 className="max-w-full text-[2.35rem] font-semibold leading-[1.02] text-white sm:max-w-4xl sm:text-5xl lg:text-[4rem]">
            Campbelltown plumbing for repairs, maintenance and fit-offs.
          </h1>
          <p className="mt-6 max-w-full text-base leading-7 text-slate-300 sm:max-w-2xl sm:text-xl sm:leading-8">
            Call James with what has happened, where the job is, and how urgent it is.
            You will get a clear next step before any work starts.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phone.href}
              className="inline-flex min-h-14 items-center justify-center rounded-xl bg-plumbing-orange px-6 py-4 text-base font-bold text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Call {site.phone.display}
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] px-5 py-3 text-base font-semibold text-white transition hover:border-plumbing-blue/60 hover:bg-plumbing-blue/15"
            >
              Send job details
            </a>
          </div>

          <div className="mt-8 grid max-w-2xl gap-3 border-y border-white/10 py-4 sm:grid-cols-3">
            {trustChips.map((item) => (
              <span key={item} className="text-sm font-semibold text-slate-200">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {urgentLinks.map((item) => (
              <a
                key={item}
                href={site.phone.href}
                className="border-b border-white/25 pb-1 text-sm font-semibold text-slate-100 transition hover:border-plumbing-orange hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="hero-content mobile-safe-width relative min-w-0 lg:max-w-none">
          <figure className="relative overflow-hidden rounded-xl border border-white/12 bg-white/[0.07] p-3 shadow-2xl shadow-black/35">
            <div className="relative aspect-[4/5] min-h-[430px] overflow-hidden rounded-lg bg-navy-950 sm:aspect-[16/11] lg:aspect-[5/4] lg:min-h-[540px]">
              <Image
                src="/images/bathroom.jpg"
                alt="Finished bathroom plumbing fit-off"
                fill
                preload
                sizes="(max-width: 1024px) 92vw, 620px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/86 via-navy-950/8 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="text-sm font-semibold text-plumbing-blue">Bathroom fit-off</p>
                <p className="mt-2 max-w-md text-2xl font-semibold leading-tight text-white">
                  Finished fixture work, repairs and rough-ins handled cleanly.
                </p>
              </figcaption>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
