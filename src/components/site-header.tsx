import Image from "next/image";
import { Phone } from "lucide-react";
import { HeaderNav } from "@/components/header-nav";
import { IntroReplayButton } from "@/components/intro-replay-button";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-50 overflow-visible border-b border-white/10 bg-[#06111d]/92 text-white shadow-[0_18px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-plumbing-blue to-transparent opacity-80"
        aria-hidden="true"
      />
      <div className="mx-auto flex min-h-[78px] max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#home"
            className="header-logo-slot group flex shrink-0 items-center"
            aria-label="JK Plumbing Solutions home"
          >
            <span
              className="header-logo-target relative flex aspect-[1320/629] w-[clamp(8.25rem,32vw,10.75rem)] shrink-0 items-center justify-center overflow-hidden transition"
            >
              <Image
                src="/brand/jk-logo-cropped.png"
                alt="JK Plumbing Solutions"
                width={1320}
                height={629}
                preload
                sizes="(max-width: 640px) 32vw, (max-width: 1024px) 152px, 172px"
                className="h-full w-full object-contain"
              />
            </span>
          </a>
          <IntroReplayButton />
        </div>

        <HeaderNav items={site.nav} />

        <div className="flex items-center gap-2">
          <span className="hidden rounded-full border border-plumbing-blue/25 bg-plumbing-blue/10 px-3 py-2 text-sm font-semibold text-blue-100 xl:inline-flex">
            Campbelltown
          </span>

          <a
            href={site.phone.href}
            className="header-call hidden min-h-12 items-center gap-2 rounded-xl bg-plumbing-orange px-4 py-3 text-sm font-bold text-white shadow-lg shadow-orange-950/25 transition hover:-translate-y-0.5 hover:bg-orange-600 md:inline-flex"
          >
            <Phone aria-hidden="true" size={18} />
            {site.phone.display}
          </a>

          <a
            href={site.phone.href}
            className="header-call flex size-12 shrink-0 items-center justify-center rounded-xl bg-plumbing-orange text-white shadow-lg shadow-orange-950/30 md:hidden"
            aria-label={`Call ${site.phone.display}`}
          >
            <Phone aria-hidden="true" size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}
