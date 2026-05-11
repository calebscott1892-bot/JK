import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/95 text-white backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="JK Plumbing Solutions home">
          <span className="flex size-10 items-center justify-center rounded-lg bg-white text-sm font-bold text-navy-950">
            JK
          </span>
          <span>
            <span className="block text-base font-semibold leading-tight sm:text-lg">JK Plumbing Solutions</span>
            <span className="hidden text-xs font-medium text-slate-300 sm:block">Campbelltown based | Sydney-wide</span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-200 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={site.phone.href}
          className="hidden items-center gap-2 rounded-lg bg-plumbing-orange px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 md:flex"
        >
          <Phone aria-hidden="true" size={18} />
          Call {site.phone.display}
        </a>

        <a
          href={site.phone.href}
          className="flex size-11 items-center justify-center rounded-lg bg-plumbing-orange text-white md:hidden"
          aria-label={`Call ${site.phone.display}`}
        >
          <Phone aria-hidden="true" size={20} />
        </a>
      </div>
    </header>
  );
}
