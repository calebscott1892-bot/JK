"use client";

import { RotateCcw } from "lucide-react";

export function IntroReplayButton() {
  return (
    <button
      type="button"
      className="intro-replay-button inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/12 bg-white/[0.06] text-slate-200 shadow-inner shadow-black/20 transition hover:border-plumbing-blue/50 hover:bg-plumbing-blue/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plumbing-blue sm:w-auto sm:gap-1.5 sm:px-2.5"
      aria-label="Replay intro animation"
      title="Replay intro animation"
      onClick={() => {
        window.dispatchEvent(new Event("jk:intro-replay"));
      }}
    >
      <RotateCcw aria-hidden="true" size={15} />
      <span className="hidden text-[11px] font-semibold sm:inline">Replay</span>
    </button>
  );
}
