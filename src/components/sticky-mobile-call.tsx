import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function StickyMobileCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy-950/96 p-3 shadow-2xl md:hidden">
      <a
        href={site.phone.href}
        className="flex min-h-[56px] items-center justify-center gap-3 rounded-lg bg-plumbing-orange px-4 py-3 text-white"
      >
        <Phone aria-hidden="true" size={21} />
        <span className="leading-tight">
          <span className="block text-xs font-semibold uppercase">Tap to call</span>
          <span className="block text-lg font-semibold">{site.phone.display}</span>
        </span>
      </a>
    </div>
  );
}
