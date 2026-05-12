"use client";

import type { CSSProperties, PointerEvent } from "react";

type NavItem = {
  label: string;
  href: string;
};

type HeaderNavProps = {
  items: readonly NavItem[];
};

type NavHeatmapStyle = CSSProperties & {
  [key: `--nav-${string}`]: string;
};

const initialHeatmapStyle: NavHeatmapStyle = {
  "--nav-heat-x": "50%",
  "--nav-heat-y": "50%",
  "--nav-heat-opacity": "0",
  "--nav-h0": "0",
  "--nav-h1": "0",
  "--nav-h2": "0",
  "--nav-h3": "0",
  "--nav-h4": "0",
};

function updateHeatmap(event: PointerEvent<HTMLElement>) {
  const nav = event.currentTarget;
  const rect = nav.getBoundingClientRect();
  const items = Array.from(nav.querySelectorAll<HTMLAnchorElement>("[data-nav-item]"));
  const maxDistance = Math.max(rect.width * 0.34, 150);

  nav.style.setProperty("--nav-heat-x", `${event.clientX - rect.left}px`);
  nav.style.setProperty("--nav-heat-y", `${event.clientY - rect.top}px`);
  nav.style.setProperty("--nav-heat-opacity", "1");

  items.forEach((item, index) => {
    const itemRect = item.getBoundingClientRect();
    const centerX = itemRect.left + itemRect.width * 0.5;
    const centerY = itemRect.top + itemRect.height * 0.5;
    const distance = Math.hypot(event.clientX - centerX, event.clientY - centerY);
    const normalized = Math.max(0, 1 - distance / maxDistance);
    const heat = Math.pow(normalized, 1.7);

    nav.style.setProperty(`--nav-h${index}`, heat.toFixed(3));
  });
}

function hideHeatmap(event: PointerEvent<HTMLElement>) {
  const nav = event.currentTarget;
  const items = Array.from(nav.querySelectorAll<HTMLAnchorElement>("[data-nav-item]"));

  nav.style.setProperty("--nav-heat-opacity", "0");
  items.forEach((_, index) => {
    nav.style.setProperty(`--nav-h${index}`, "0");
  });
}

export function HeaderNav({ items }: HeaderNavProps) {
  return (
    <nav
      aria-label="Main navigation"
      className="header-nav relative hidden isolate items-center gap-1 overflow-hidden rounded-full border border-white/10 bg-white/[0.045] p-1 shadow-inner shadow-black/20 backdrop-blur-xl lg:flex"
      style={initialHeatmapStyle}
      onPointerEnter={updateHeatmap}
      onPointerMove={updateHeatmap}
      onPointerLeave={hideHeatmap}
    >
      <span
        className="pointer-events-none absolute inset-0 z-0 rounded-full opacity-[calc(var(--nav-heat-opacity)*0.54)] transition-opacity duration-500"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.12), transparent 52%), radial-gradient(ellipse 96% 160% at var(--nav-heat-x) var(--nav-heat-y), rgba(255,255,255,0.12), rgba(21,122,201,0.07) 30%, transparent 68%)",
        }}
      />
      {items.map((item, index) => (
        <span
          key={`heat-${item.href}`}
          className="pointer-events-none absolute top-1/2 z-0 h-20 w-[7.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl transition-opacity duration-500"
          aria-hidden="true"
          style={{
            background:
              index % 2 === 0
                ? "radial-gradient(ellipse at center, rgba(21,122,201,0.30), rgba(21,122,201,0.10) 38%, transparent 72%)"
                : "radial-gradient(ellipse at center, rgba(249,115,22,0.22), rgba(255,255,255,0.08) 42%, transparent 74%)",
            left: `${((index + 0.5) / items.length) * 100}%`,
            opacity: `calc(var(--nav-h${index}) * var(--nav-heat-opacity) * 0.48)`,
          }}
        />
      ))}
      <span
        className="pointer-events-none absolute inset-0 z-0 rounded-full opacity-[calc(var(--nav-heat-opacity)*0.28)] mix-blend-screen transition-opacity duration-500"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(100deg, transparent 0%, rgba(255,255,255,0.13) 18%, transparent 35%, rgba(21,122,201,0.09) 58%, rgba(249,115,22,0.06) 76%, transparent 100%)",
        }}
      />
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          data-nav-item
          className="relative z-10 rounded-full px-3.5 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.075] hover:text-white"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
