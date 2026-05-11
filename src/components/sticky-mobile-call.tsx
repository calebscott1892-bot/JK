import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function StickyMobileCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-plumbing-blue/30 bg-charcoal-950/96 p-3 shadow-2xl backdrop-blur md:hidden">
      <a
        href={site.phone.href}
        className="flex min-h-[62px] items-center justify-center gap-3 rounded-2xl bg-plumbing-orange px-4 py-3 text-white shadow-xl shadow-black/30"
      >
        <span className="flex size-10 items-center justify-center rounded-xl bg-white text-plumbing-orange">
          <Phone aria-hidden="true" size={21} />
        </span>
        <span className="leading-tight">
          <span className="block text-xs font-semibold uppercase">Tap to call</span>
          <span className="block text-lg font-semibold">{site.phone.display}</span>
        </span>
      </a>
    </div>
  );
}
