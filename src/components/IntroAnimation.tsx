"use client";

/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

const DEBUG_ALIGNMENT = false;

type IntroSceneStyle = CSSProperties & {
  "--drop-axis-x": string;
  "--leak-y": string;
  "--nut-x": string;
  "--nut-y": string;
  "--pipe-width": string;
  "--wrench-width": string;
  "--wrench-x": string;
  "--wrench-y": string;
  "--wrench-rotation": string;
  "--wrench-origin-x": string;
  "--wrench-origin-y": string;
  "--wrench-z": string;
  "--falling-drop-y": string;
  "--logo-top": string;
  "--logo-width": string;
};

export function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const html = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyTouchAction = body.style.touchAction;
    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyWidth = body.style.width;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.touchAction = "none";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.touchAction = previousBodyTouchAction;
      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.width = previousBodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  const sceneStyle: IntroSceneStyle = {
    "--drop-axis-x": "50vw",
    "--leak-y": "clamp(13.75rem, 29dvh, 15.75rem)",
    "--nut-x": "var(--drop-axis-x)",
    "--nut-y": "calc(var(--leak-y) - var(--pipe-width) * 0.083)",
    "--pipe-width": "max(44rem, calc(105vw))",
    "--wrench-width": "clamp(13rem, 27vw, 22rem)",
    "--wrench-x": "calc(var(--nut-x) - var(--wrench-origin-x) + 0px)",
    "--wrench-y": "calc(var(--nut-y) - var(--wrench-origin-y) + 0px)",
    "--wrench-rotation": "-50deg",
    "--wrench-origin-x": "calc(var(--wrench-width) * 0.72)",
    "--wrench-origin-y": "calc(var(--wrench-width) * 0.28)",
    "--wrench-z": "20",
    "--falling-drop-y": "clamp(19rem, 43dvh, 24rem)",
    "--logo-top": "clamp(24rem, 53dvh, 30rem)",
    "--logo-width": "min(92vw, 560px)",
  };

  const wrenchDebugValues = [
    ["--wrench-width", sceneStyle["--wrench-width"]],
    ["--wrench-x", sceneStyle["--wrench-x"]],
    ["--wrench-y", sceneStyle["--wrench-y"]],
    ["--wrench-rotation", sceneStyle["--wrench-rotation"]],
    ["--wrench-origin-x", sceneStyle["--wrench-origin-x"]],
    ["--wrench-origin-y", sceneStyle["--wrench-origin-y"]],
    ["--wrench-z", sceneStyle["--wrench-z"]],
  ];

  return (
    <section
      aria-label="JK Plumbing intro visual test"
      className="intro-overlay fixed inset-0 z-[100] h-dvh w-screen overflow-hidden overscroll-none bg-[#050910] text-white"
    >
      <div
        className="absolute inset-0 opacity-80"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 50% 26%, rgba(21,122,201,0.18), transparent 32%), radial-gradient(circle at 50% 74%, rgba(249,115,22,0.08), transparent 26%), linear-gradient(180deg, #07131f 0%, #050910 58%, #03060b 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.13]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <button
        type="button"
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-4 z-30 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur transition hover:border-white/25 hover:bg-white/[0.1] hover:text-white sm:right-6 sm:top-6"
      >
        Skip
      </button>

      <div className="relative h-dvh w-screen overflow-hidden" style={sceneStyle}>
        <div
          className="pipe-asset-wrap absolute z-10"
          style={{
            left: "var(--drop-axis-x)",
            top: "var(--leak-y)",
            width: "var(--pipe-width)",
            transform: "translate(-55.56%, -64.8%)",
          }}
          data-intro-piece="pipe-asset-wrap"
        >
          <img
            src="/brand/pipe-assembly.svg"
            alt=""
            aria-hidden="true"
            className="block h-auto w-full object-contain drop-shadow-[0_28px_36px_rgba(0,0,0,0.45)]"
          />
        </div>

        <span
          className="leak-point pointer-events-none absolute z-20 size-px opacity-0"
          style={{
            left: "var(--drop-axis-x)",
            top: "var(--leak-y)",
          }}
          aria-hidden="true"
          data-intro-piece="leak-point"
        />

        <div
          className="wrench-wrap pointer-events-none absolute"
          style={{
            left: "var(--wrench-x)",
            top: "var(--wrench-y)",
            width: "var(--wrench-width)",
            height: "calc(var(--wrench-width) * 1.583333)",
            transform: "rotate(var(--wrench-rotation))",
            transformOrigin: "var(--wrench-origin-x) var(--wrench-origin-y)",
            zIndex: "var(--wrench-z)",
          }}
          data-intro-piece="wrench-wrap"
        >
          <img
            src="/brand/wrench.svg"
            alt=""
            aria-hidden="true"
            className="wrench absolute inset-0 block h-auto w-full object-contain opacity-95 drop-shadow-[0_18px_24px_rgba(0,0,0,0.38)]"
            data-intro-piece="wrench"
          />
          {DEBUG_ALIGNMENT ? (
            <>
              <span
                className="absolute inset-0 border border-cyan-300/80"
                aria-hidden="true"
                data-intro-piece="wrench-bounds"
              />
              <span
                className="absolute z-40 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-sky-300 bg-sky-400/20 shadow-[0_0_12px_rgba(56,189,248,0.9)]"
                style={{
                  left: "var(--wrench-origin-x)",
                  top: "var(--wrench-origin-y)",
                }}
                aria-hidden="true"
                data-intro-piece="wrench-jaw-anchor"
              />
            </>
          ) : null}
        </div>

        {DEBUG_ALIGNMENT ? (
          <>
            <span
              className="pipe-nut pointer-events-none absolute z-50 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.9)]"
              style={{
                left: "var(--nut-x)",
                top: "var(--nut-y)",
              }}
              aria-hidden="true"
              data-intro-piece="pipe-nut"
            />
            <div
              className="pointer-events-none absolute bottom-4 left-4 z-50 max-w-[min(34rem,calc(100vw-2rem))] rounded-lg border border-white/15 bg-slate-950/80 p-3 font-mono text-[10px] leading-4 text-slate-200 shadow-2xl backdrop-blur"
              aria-hidden="true"
            >
              {wrenchDebugValues.map(([name, value]) => (
                <div key={name} className="grid grid-cols-[9.5rem_1fr] gap-3">
                  <span className="text-sky-300">{name}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </>
        ) : null}

        <div
          className="absolute z-20 w-[clamp(2.5rem,8vw,4rem)]"
          style={{
            left: "var(--drop-axis-x)",
            top: "var(--falling-drop-y)",
            transform: "translateX(-50%)",
          }}
        >
          <img
            src="/brand/motion-streaks.svg"
            alt=""
            aria-hidden="true"
            className="motion-streaks absolute -left-[52%] -top-[92%] w-[190%] opacity-70"
            data-intro-piece="motion-streaks"
          />
          <img
            src="/brand/droplet.svg"
            alt=""
            aria-hidden="true"
            className="falling-droplet relative w-full object-contain drop-shadow-[0_16px_20px_rgba(14,165,233,0.18)]"
            data-intro-piece="falling-droplet"
          />
        </div>

        <div
          className="intro-logo absolute -translate-x-1/2"
          style={{
            left: "var(--drop-axis-x)",
            top: "var(--logo-top)",
            width: "var(--logo-width)",
          }}
          data-intro-piece="intro-logo"
        >
          <div className="relative">
            <div
              className="absolute inset-x-[12%] top-[10%] h-[34%] rounded-full bg-plumbing-blue/10 blur-2xl"
              aria-hidden="true"
            />
            <span
              className="logo-mark absolute left-1/2 top-[25.4%] size-px -translate-x-1/2 -translate-y-1/2"
              aria-hidden="true"
              data-intro-piece="logo-mark"
            />
            <Image
              src="/brand/jk-logo-transparent.png"
              alt="JK Plumbing Solutions"
              width={1320}
              height={1189}
              priority
              className="relative h-auto w-full object-contain drop-shadow-[0_28px_34px_rgba(0,0,0,0.42)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
