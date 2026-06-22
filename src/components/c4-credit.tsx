"use client";

import C4FooterCredit from "./c4-footer-credit/C4FooterCredit";

// Client boundary for the portable "Designed by C4 Studios" badge.
//
// C4FooterCredit ships as a framework-agnostic .jsx component (GSAP, refs and
// browser APIs, no "use client" directive of its own). Per the Next.js App
// Router "third-party components" pattern, a component relying on client-only
// features must be imported through a Client Component before a Server
// Component — here SiteFooter — can render it. This wrapper is that boundary.
export function C4Credit() {
  // colorScheme="auto" samples the rendered footer background (charcoal-950)
  // so the "Studios" wordmark stays legible on the dark band.
  return <C4FooterCredit size={40} colorScheme="auto" />;
}
