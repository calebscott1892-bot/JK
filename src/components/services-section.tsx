import Image from "next/image";
import { ArrowRight, Building2, Check, ClipboardList, Home, Siren, Wrench } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

const serviceGroupPhotos = [
  {
    src: "/images/process%20toilet.JPEG",
    alt: "Toilet plumbing maintenance work in progress",
  },
  {
    src: "/images/shower%20head.JPEG",
    alt: "Installed shower plumbing fixture",
  },
  {
    src: "/images/bathroom%202.JPEG",
    alt: "Completed bathroom plumbing renovation",
  },
  {
    src: "/images/double%20sink.JPEG",
    alt: "Double vanity plumbing installation",
  },
] as const;

const serviceGroupIcons = [
  Siren,
  Home,
  Wrench,
  Building2,
] as const;

export function ServicesSection() {
  return (
    <section id="services" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            label="Services"
            title="Choose the pathway that matches the job."
            description="Repairs, home plumbing, project work and commercial maintenance each need a slightly different conversation. Start with the closest fit and call if you are unsure."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:auto-rows-fr">
          {site.serviceGroups.map((group, index) => {
            const Icon = serviceGroupIcons[index];
            const photo = serviceGroupPhotos[index];
            const isDark = index === 0 || index === 3;

            return (
              <Reveal
                key={group.title}
                delay={index * 0.03}
                className={index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5"}
              >
                <article
                  className={
                    index === 0
                      ? "group flex h-full min-h-[360px] flex-col overflow-hidden rounded-2xl bg-navy-950 p-7 text-white shadow-2xl shadow-slate-300/60"
                      : index === 1
                        ? "group flex h-full min-h-[360px] flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-plumbing-blue/35 hover:shadow-xl hover:shadow-slate-200/70"
                        : index === 2
                          ? "group flex h-full min-h-[360px] flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-plumbing-blue/35 hover:shadow-xl hover:shadow-slate-200/70"
                          : "group flex h-full min-h-[360px] flex-col overflow-hidden rounded-2xl bg-charcoal-900 p-7 text-white shadow-2xl shadow-slate-300/50"
                  }
                >
                  <div
                    className={
                      isDark
                        ? "relative -mx-2 -mt-2 mb-6 h-40 overflow-hidden rounded-lg border border-white/10 bg-slate-900"
                        : "relative -mx-2 -mt-2 mb-6 h-40 overflow-hidden rounded-lg border border-slate-100 bg-slate-100"
                    }
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                    <div
                      className={
                        isDark
                          ? "absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-charcoal-950/5 to-transparent"
                          : "absolute inset-0 bg-gradient-to-t from-white/45 via-transparent to-transparent"
                      }
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={
                        index === 0 || index === 3
                          ? "flex size-14 items-center justify-center rounded-2xl bg-plumbing-orange text-white shadow-lg shadow-black/20"
                          : "flex size-14 items-center justify-center rounded-2xl bg-blue-50 text-plumbing-blue"
                      }
                    >
                      <Icon aria-hidden="true" size={27} />
                    </div>
                    <span className={index === 0 || index === 3 ? "font-mono text-lg font-semibold text-white/25" : "font-mono text-lg font-semibold text-slate-300"}>
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className={index === 0 || index === 3 ? "mt-8 text-3xl font-semibold leading-tight text-white" : "mt-8 text-3xl font-semibold leading-tight text-navy-950"}>
                    {group.title}
                  </h3>
                  <p className={index === 0 || index === 3 ? "mt-4 text-base leading-7 text-slate-300" : "mt-4 text-base leading-7 text-slate-600"}>
                    {group.description}
                  </p>
                  <ul className={index === 0 || index === 3 ? "mt-7 grid gap-2 border-t border-white/10 pt-6 sm:grid-cols-2" : "mt-7 space-y-2 border-t border-slate-100 pt-6"}>
                    {group.items.map((detail) => (
                      <li key={detail} className={index === 0 || index === 3 ? "flex items-center gap-2 text-sm font-medium text-slate-100" : "flex items-center gap-2 text-sm font-medium text-slate-700"}>
                        <Check aria-hidden="true" size={15} className={index === 0 || index === 3 ? "text-plumbing-orange" : "text-plumbing-blue"} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={site.phone.href}
                    className={
                      index === 0 || index === 3
                        ? "mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-plumbing-orange"
                        : "mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-plumbing-blue"
                    }
                  >
                    Call about {group.title.toLowerCase()}
                    <ArrowRight aria-hidden="true" size={16} className="transition group-hover:translate-x-1" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <ClipboardList aria-hidden="true" size={22} className="mt-1 text-plumbing-orange" />
              <p className="max-w-3xl text-sm leading-6 text-slate-700">
                Not sure which pathway fits? Call through what is happening, where the job is and whether it is urgent.
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
