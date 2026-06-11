"use client";

/* eslint-disable @next/next/no-img-element */

import { gsap } from "gsap";
import Image from "next/image";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

export const INTRO_STORAGE_KEY = "jk-plumbing:intro-complete:v1";

const DROPLET_VIEWBOX_WIDTH = 60;
const DROPLET_VIEWBOX_HEIGHT = 80;
const DROPLET_BODY_CENTER_Y = 34;
const DROPLET_TRANSFORM_ORIGIN_Y = 0.18;
const LOGO_DROP_TARGET_X = "51.17%";
const LOGO_DROP_TARGET_Y = "49.44%";
const LOGO_DROP_TARGET_SCALE = 1.08;

// Directorial constant: how long the camera tracks the drop at constant
// velocity. The acceleration phase duration is derived from this so the
// drop's velocity is continuous at the handover (no mid-air stall).
const TRACKING_FALL_DURATION = 0.85;

// Elements that must not receive focus or pointer events while the intro
// overlay is covering them.
const BACKGROUND_SELECTOR = ".site-header, main, footer, .sticky-mobile-call";

type IntroPhase = "boot" | "active" | "done";

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
  "--wrench-anim-x": string;
  "--wrench-anim-y": string;
  "--wrench-anim-rotation": string;
  "--wrench-opacity": string;
  "--pipe-scene-y": string;
  "--pipe-scene-opacity": string;
  "--pipe-scene-scale": string;
  "--pipe-react-x": string;
  "--pipe-react-y": string;
  "--pipe-react-rotation": string;
  "--seep-opacity": string;
  "--seep-scale": string;
  "--fall-focus-y": string;
  "--falling-drop-y": string;
  "--fall-drift-x": string;
  "--fall-camera-y": string;
  "--droplet-anim-y": string;
  "--droplet-fall-y": string;
  "--droplet-opacity": string;
  "--droplet-scale-x": string;
  "--droplet-scale-y": string;
  "--droplet-wobble-x": string;
  "--droplet-body-y": string;
  "--droplet-rotation": string;
  "--droplet-tail-opacity": string;
  "--droplet-tail-scale-y": string;
  "--droplet-tail-y": string;
  "--streak-opacity": string;
  "--streak-y": string;
  "--streak-scale-y": string;
  "--leak-thread-opacity": string;
  "--leak-thread-scale-y": string;
  "--leak-glow-opacity": string;
  "--landing-glow-opacity": string;
  "--landing-glow-scale": string;
  "--solid-logo-opacity": string;
  "--logo-top": string;
  "--logo-width": string;
  "--logo-x": string;
  "--logo-y": string;
  "--logo-scale": string;
  "--logo-opacity": string;
  "--logo-drop-target-x": string;
  "--logo-drop-target-y": string;
};

const sceneStyle: IntroSceneStyle = {
  "--drop-axis-x": "50vw",
  "--leak-y": "clamp(8rem, 25dvh, 15.75rem)",
  "--nut-x": "var(--drop-axis-x)",
  "--nut-y": "calc(var(--leak-y) - var(--pipe-width) * 0.083)",
  "--pipe-width": "clamp(30rem, 116vw, 74rem)",
  "--wrench-width": "clamp(9rem, min(29vw, 27dvh), 22rem)",
  "--wrench-x": "calc(var(--nut-x) - var(--wrench-origin-x))",
  "--wrench-y": "calc(var(--nut-y) - var(--wrench-origin-y))",
  "--wrench-rotation": "-50deg",
  "--wrench-origin-x": "calc(var(--wrench-width) * 0.72)",
  "--wrench-origin-y": "calc(var(--wrench-width) * 0.28)",
  "--wrench-anim-x": "-72vw",
  "--wrench-anim-y": "5vh",
  "--wrench-anim-rotation": "-16deg",
  "--wrench-opacity": "0",
  "--pipe-scene-y": "0px",
  "--pipe-scene-opacity": "1",
  "--pipe-scene-scale": "1",
  "--pipe-react-x": "0px",
  "--pipe-react-y": "0px",
  "--pipe-react-rotation": "0deg",
  "--seep-opacity": "0",
  "--seep-scale": "0.15",
  "--fall-focus-y": "clamp(12.5rem, 42dvh, 24rem)",
  "--falling-drop-y": "var(--fall-focus-y)",
  "--fall-drift-x": "0px",
  "--fall-camera-y": "0px",
  "--droplet-anim-y": "calc(var(--leak-y) - var(--falling-drop-y))",
  "--droplet-fall-y": "0px",
  "--droplet-opacity": "0",
  "--droplet-scale-x": "0.18",
  "--droplet-scale-y": "0.12",
  "--droplet-wobble-x": "0px",
  "--droplet-body-y": "-2px",
  "--droplet-rotation": "0deg",
  "--droplet-tail-opacity": "0",
  "--droplet-tail-scale-y": "0.1",
  "--droplet-tail-y": "0px",
  "--streak-opacity": "0",
  "--streak-y": "-10px",
  "--streak-scale-y": "0.9",
  "--leak-thread-opacity": "0",
  "--leak-thread-scale-y": "0.2",
  "--leak-glow-opacity": "0",
  "--landing-glow-opacity": "0",
  "--landing-glow-scale": "0.72",
  "--solid-logo-opacity": "0",
  "--logo-top": "clamp(16rem, 53dvh, 28rem)",
  "--logo-width": "clamp(16rem, min(82vw, 64dvh), 40rem)",
  "--logo-x": "0px",
  "--logo-y": "0px",
  "--logo-scale": "1",
  "--logo-opacity": "0",
  "--logo-drop-target-x": LOGO_DROP_TARGET_X,
  "--logo-drop-target-y": LOGO_DROP_TARGET_Y,
};

const motionStreakSpecs = [
  { height: "3.5rem", left: "32%", top: "6%", rotate: "8deg" },
  { height: "5rem", left: "46%", top: "0%", rotate: "7deg" },
  { height: "4rem", left: "61%", top: "9%", rotate: "8deg" },
  { height: "2.5rem", left: "40%", top: "44%", rotate: "7deg" },
  { height: "3rem", left: "56%", top: "52%", rotate: "8deg" },
] as const;

const splashSatelliteSpecs = [
  { size: 5, x: -22, rise: -16 },
  { size: 7, x: 4, rise: -20 },
  { size: 4, x: 19, rise: -12 },
] as const;

export function IntroAnimation() {
  const rootRef = useRef<HTMLElement | null>(null);
  const skipButtonRef = useRef<HTMLButtonElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const phaseRef = useRef<IntroPhase>("boot");
  const [phase, setPhase] = useState<IntroPhase>("boot");
  const [runId, setRunId] = useState(0);

  const completeIntro = useCallback(() => {
    if (phaseRef.current === "done") {
      return;
    }
    phaseRef.current = "done";

    timelineRef.current?.kill();
    timelineRef.current = null;

    try {
      window.sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
    } catch {
      // Storage can be unavailable in private or restricted browser contexts.
    }

    document.documentElement.dataset.introState = "complete";
    setPhase("done");
  }, []);

  const startIntro = useCallback(() => {
    timelineRef.current?.kill();
    timelineRef.current = null;
    document.documentElement.dataset.introState = "active";
    phaseRef.current = "active";
    setRunId((current) => current + 1);
    setPhase("active");
  }, []);

  // Decide on mount whether to run the intro. The overlay is already painted
  // (server-rendered, shown by the pre-hydration script in layout.tsx), so
  // there is no flash in either direction.
  useEffect(() => {
    const replayIntro = () => {
      // Replay is an explicit user request, so it plays even when the
      // automatic intro was skipped for prefers-reduced-motion.
      startIntro();
    };
    window.addEventListener("jk:intro-replay", replayIntro);

    // Deferred a frame so the decision's setState never runs synchronously
    // inside the effect body. The overlay is already painted correctly by
    // the pre-hydration script, so nothing visible changes during the wait.
    let frameId: number | null = null;
    if (phaseRef.current === "boot") {
      frameId = window.requestAnimationFrame(() => {
        let alreadySeen = false;
        try {
          alreadySeen =
            window.sessionStorage.getItem(INTRO_STORAGE_KEY) === "true";
        } catch {
          alreadySeen = false;
        }
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        if (alreadySeen || prefersReducedMotion) {
          completeIntro();
        } else {
          startIntro();
        }
      });
    }

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("jk:intro-replay", replayIntro);
    };
  }, [completeIntro, startIntro]);

  // Modal behaviour while the intro is covering the page: scroll lock,
  // inert background, Escape to skip, focus on the skip control.
  useEffect(() => {
    if (phase !== "active") {
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

    const backgroundElements = Array.from(
      document.querySelectorAll<HTMLElement>(BACKGROUND_SELECTOR),
    );
    for (const element of backgroundElements) {
      element.inert = true;
    }

    const previousFocus = document.activeElement;
    skipButtonRef.current?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        completeIntro();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      for (const element of backgroundElements) {
        element.inert = false;
      }
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.touchAction = previousBodyTouchAction;
      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.width = previousBodyWidth;
      window.scrollTo(0, scrollY);
      // Restore focus only after the background is no longer inert,
      // otherwise the focus call is silently ignored.
      if (
        previousFocus instanceof HTMLElement &&
        previousFocus.isConnected &&
        previousFocus !== document.body
      ) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, [phase, completeIntro]);

  useEffect(() => {
    if (phase !== "active" || !rootRef.current) {
      return;
    }

    const root = rootRef.current;
    let cancelled = false;
    let failsafeId: number | null = null;

    const context = gsap.context(() => {
      const pipeAssembly = root.querySelector<HTMLElement>(".pipe-assembly");
      const pipeScene = root.querySelector<HTMLElement>(".pipe-scene");
      const wrenchWrap = root.querySelector<HTMLElement>(".wrench-wrap");
      const leakPoint = root.querySelector<HTMLElement>(".leak-point");
      const leakSeep = root.querySelector<HTMLElement>(".leak-seep");
      const leakThread = root.querySelector<HTMLElement>(".leak-thread");
      const leakGlow = root.querySelector<HTMLElement>(".leak-glow");
      const fallTrack = root.querySelector<HTMLElement>(".fall-track");
      const dropletWrap = root.querySelector<HTMLElement>(".droplet-wrap");
      const fallingDroplet =
        root.querySelector<HTMLElement>(".falling-droplet");
      const dropletTail = root.querySelector<HTMLElement>(".droplet-tail");
      const motionStreaks = root.querySelector<HTMLElement>(".motion-streaks");
      const motionStreakLines = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(".motion-streak"),
      );
      const landingGlow = root.querySelector<HTMLElement>(".logo-contact-glow");
      const impactRipple = root.querySelector<HTMLElement>(".impact-ripple");
      const impactSatellites = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(".impact-satellite"),
      );
      const logoZoomWrap = root.querySelector<HTMLElement>(".logo-zoom-wrap");
      const logoHandoffWrap = root.querySelector<HTMLElement>(
        ".intro-logo-handoff-wrap",
      );
      const solidLogo = root.querySelector<HTMLElement>(".intro-logo-solid");
      const logoMark = root.querySelector<HTMLElement>(".logo-mark");
      const headerLogoSlot =
        document.querySelector<HTMLElement>(".header-logo-slot");
      const headerLogoTarget =
        document.querySelector<HTMLElement>(".header-logo-target") ??
        headerLogoSlot;

      if (
        !pipeAssembly ||
        !pipeScene ||
        !wrenchWrap ||
        !leakPoint ||
        !leakSeep ||
        !leakThread ||
        !leakGlow ||
        !fallTrack ||
        !dropletWrap ||
        !fallingDroplet ||
        !dropletTail ||
        !motionStreaks ||
        !landingGlow ||
        !impactRipple ||
        !logoZoomWrap ||
        !logoHandoffWrap ||
        !solidLogo ||
        !logoMark ||
        !headerLogoTarget
      ) {
        completeIntro();
        return;
      }

      // --- Measure the scene -------------------------------------------------

      const clamp = (value: number, min: number, max: number) =>
        Math.min(max, Math.max(min, value));
      const isUsableRect = (rect: DOMRect) =>
        Number.isFinite(rect.width) &&
        Number.isFinite(rect.height) &&
        rect.width > 8 &&
        rect.height > 8;

      const rootRect = root.getBoundingClientRect();
      const introLogoRect = logoHandoffWrap.getBoundingClientRect();
      const headerLogoRect = headerLogoTarget.getBoundingClientRect();
      const logoMarkRect = logoMark.getBoundingClientRect();

      if (
        !isUsableRect(rootRect) ||
        !isUsableRect(introLogoRect) ||
        !isUsableRect(headerLogoRect)
      ) {
        completeIntro();
        return;
      }

      const handoffScale = clamp(
        Math.min(
          headerLogoRect.width / introLogoRect.width,
          headerLogoRect.height / introLogoRect.height,
        ),
        0.08,
        0.32,
      );
      const handoffX = Math.round(
        headerLogoRect.left +
          headerLogoRect.width * 0.5 -
          (introLogoRect.left + introLogoRect.width * 0.5),
      );
      const handoffY = Math.round(
        headerLogoRect.top +
          headerLogoRect.height * 0.5 -
          (introLogoRect.top + introLogoRect.height * 0.5),
      );

      const dropletStyle = window.getComputedStyle(dropletWrap);
      const measuredDropletTop = Number.parseFloat(dropletStyle.top);
      const dropletTop = Number.isFinite(measuredDropletTop)
        ? measuredDropletTop
        : rootRect.height * 0.42;
      const dropletWidth =
        dropletWrap.getBoundingClientRect().width ||
        Number.parseFloat(dropletStyle.width) ||
        48;

      // Centre of the droplet body once it has merged with the logo at its
      // landing scale, expressed in scene coordinates.
      const dropletLayoutHeight =
        dropletWidth * (DROPLET_VIEWBOX_HEIGHT / DROPLET_VIEWBOX_WIDTH);
      const dropletBodyCenterY =
        dropletWidth * (DROPLET_BODY_CENTER_Y / DROPLET_VIEWBOX_WIDTH);
      const dropletOriginY = dropletLayoutHeight * DROPLET_TRANSFORM_ORIGIN_Y;
      const mergedDropletCenterY =
        dropletOriginY +
        LOGO_DROP_TARGET_SCALE * (dropletBodyCenterY - dropletOriginY);
      const dropletRect = dropletWrap.getBoundingClientRect();
      const formedDropletCenterX =
        dropletRect.left - rootRect.left + dropletWidth * 0.5;
      const formedDropletCenterY = dropletTop + mergedDropletCenterY;

      const fallDistance = Math.round(clamp(rootRect.height * 0.3, 140, 270));
      const fallCameraY = -Math.round(clamp(rootRect.height * 0.13, 52, 132));
      const landingCenterY = formedDropletCenterY + fallDistance + fallCameraY;

      const logoMarkCenterX =
        logoMarkRect.left - rootRect.left + logoMarkRect.width * 0.5;
      const logoMarkCenterY =
        logoMarkRect.top - rootRect.top + logoMarkRect.height * 0.5;
      const logoFocusX = Math.round(formedDropletCenterX - logoMarkCenterX);
      const logoFocusY = Math.round(landingCenterY - logoMarkCenterY);

      // --- Fall physics ------------------------------------------------------
      // The drop detaches at the leak, accelerates under gravity (power2.in is
      // exact for constant acceleration from rest), and once it reaches the
      // camera's focus point the camera tracks it at constant velocity. The
      // acceleration time is derived so velocity is continuous at handover:
      // accel phase ends at v = 2*emergeDistance/t1, tracking runs at
      // v = fallDistance/t2  =>  t1 = 2*emergeDistance*t2/fallDistance.
      const leakY = leakPoint.getBoundingClientRect().top - rootRect.top;
      const emergeDistance =
        dropletTop - leakY > 20 ? dropletTop - leakY : rootRect.height * 0.17;
      const trackingDuration = TRACKING_FALL_DURATION;
      const accelDuration = clamp(
        (2 * emergeDistance * trackingDuration) / fallDistance,
        0.45,
        1.15,
      );
      const fallSpan = accelDuration + trackingDuration;

      // --- Build the timeline ------------------------------------------------

      gsap.set(logoHandoffWrap, {
        autoAlpha: 1,
        scale: 1,
        transformOrigin: "50% 50%",
        x: 0,
        y: 0,
      });
      gsap.set([impactRipple, ...impactSatellites], {
        opacity: 0,
        xPercent: -50,
        yPercent: -50,
      });

      const timeline = gsap.timeline({
        defaults: { ease: "power2.out" },
        paused: true,
      });
      timelineRef.current = timeline;

      timeline
        .set(motionStreakLines, { opacity: 0 }, 0)

        // Beat 1 — the wrench swings in and seats on the nut.
        .addLabel("wrenchIn", 0)
        .to(
          wrenchWrap,
          {
            "--wrench-anim-x": "0vw",
            "--wrench-anim-y": "0vh",
            "--wrench-anim-rotation": "0deg",
            "--wrench-opacity": "1",
            duration: 0.55,
            ease: "power3.out",
          },
          "wrenchIn",
        )

        // Beat 2 — two ratcheting strokes; the pipe flexes under each pull.
        .addLabel("strokeOne", 0.58)
        .to(
          wrenchWrap,
          {
            "--wrench-anim-rotation": "9deg",
            duration: 0.3,
            ease: "power2.inOut",
          },
          "strokeOne",
        )
        .to(
          pipeAssembly,
          {
            "--pipe-react-x": "1.6px",
            "--pipe-react-y": "-1.2px",
            "--pipe-react-rotation": "0.3deg",
            duration: 0.06,
            ease: "sine.inOut",
            repeat: 3,
            yoyo: true,
          },
          "strokeOne+=0.14",
        )
        .to(
          wrenchWrap,
          {
            "--wrench-anim-rotation": "3deg",
            duration: 0.16,
            ease: "power1.inOut",
          },
          "strokeOne+=0.34",
        )
        .addLabel("strokeTwo", "strokeOne+=0.52")
        .to(
          wrenchWrap,
          {
            "--wrench-anim-rotation": "10.5deg",
            duration: 0.24,
            ease: "power2.inOut",
          },
          "strokeTwo",
        )
        .to(
          pipeAssembly,
          {
            "--pipe-react-x": "1.1px",
            "--pipe-react-y": "-0.8px",
            "--pipe-react-rotation": "0.2deg",
            duration: 0.06,
            ease: "sine.inOut",
            repeat: 2,
            yoyo: true,
          },
          "strokeTwo+=0.1",
        )
        .to(
          wrenchWrap,
          {
            "--wrench-anim-rotation": "0deg",
            duration: 0.26,
            ease: "power2.out",
          },
          "strokeTwo+=0.26",
        )
        // The final stroke squeezes one last bead out of the joint.
        .to(
          leakSeep,
          {
            "--seep-opacity": "0.72",
            "--seep-scale": "0.45",
            duration: 0.18,
            ease: "power2.out",
          },
          "strokeTwo+=0.18",
        )

        // Beat 3 — a pendant drop grows at the joint, sags, necks and lets go.
        .addLabel("emerge", "strokeTwo+=0.3")
        .to(
          leakGlow,
          {
            "--leak-glow-opacity": "0.5",
            duration: 0.2,
            ease: "power1.out",
          },
          "emerge",
        )
        .to(
          leakThread,
          {
            "--leak-thread-opacity": "0.75",
            "--leak-thread-scale-y": "0.65",
            duration: 0.2,
            ease: "power2.out",
          },
          "emerge+=0.08",
        )
        .to(
          fallingDroplet,
          {
            "--droplet-opacity": "1",
            "--droplet-scale-x": "0.3",
            "--droplet-scale-y": "0.2",
            duration: 0.12,
            ease: "power1.out",
          },
          "emerge",
        )
        .to(
          fallingDroplet,
          {
            "--droplet-scale-x": "0.5",
            "--droplet-scale-y": "0.44",
            "--droplet-body-y": "2px",
            duration: 0.34,
            ease: "sine.inOut",
          },
          "emerge+=0.1",
        )
        .to(
          dropletTail,
          {
            "--droplet-tail-opacity": "0.8",
            "--droplet-tail-scale-y": "0.7",
            "--droplet-tail-y": "-6px",
            duration: 0.2,
            ease: "power2.out",
          },
          "emerge+=0.4",
        )
        .to(
          fallingDroplet,
          {
            "--droplet-scale-x": "0.47",
            "--droplet-scale-y": "0.8",
            "--droplet-body-y": "9px",
            duration: 0.26,
            ease: "power2.in",
          },
          "emerge+=0.46",
        )

        // Beat 4 — detach. One continuous fall: gravity acceleration into a
        // constant-velocity tracking shot. The neck snaps back, the residual
        // bead recoils, and the free drop oscillates as surface tension
        // pulls it round.
        .addLabel("fall", "emerge+=0.72")
        .to(
          dropletWrap,
          {
            "--droplet-anim-y": "0px",
            duration: accelDuration,
            ease: "power2.in",
          },
          "fall",
        )
        .to(
          dropletWrap,
          {
            "--droplet-fall-y": `${fallDistance}px`,
            duration: trackingDuration,
            ease: "none",
          },
          `fall+=${accelDuration}`,
        )
        .to(
          leakThread,
          {
            "--leak-thread-opacity": "0",
            "--leak-thread-scale-y": "0.12",
            duration: 0.18,
            ease: "power1.out",
          },
          "fall",
        )
        .to(
          dropletTail,
          {
            "--droplet-tail-opacity": "0",
            "--droplet-tail-scale-y": "0.15",
            "--droplet-tail-y": "-14px",
            duration: 0.16,
            ease: "power1.out",
          },
          "fall+=0.04",
        )
        .to(
          leakSeep,
          {
            "--seep-scale": "0.3",
            duration: 0.1,
            ease: "power2.out",
          },
          "fall",
        )
        .to(
          leakSeep,
          {
            "--seep-scale": "0.4",
            duration: 0.25,
            ease: "sine.out",
          },
          "fall+=0.1",
        )
        .to(
          leakSeep,
          {
            "--seep-opacity": "0.3",
            duration: 0.4,
            ease: "power1.out",
          },
          "fall+=0.5",
        )
        .to(
          leakGlow,
          {
            "--leak-glow-opacity": "0.12",
            duration: 0.4,
            ease: "power1.out",
          },
          "fall+=0.5",
        )
        // Post-detach surface-tension oscillation, decaying.
        .to(
          fallingDroplet,
          {
            "--droplet-scale-x": "0.6",
            "--droplet-scale-y": "1.24",
            "--droplet-body-y": "0px",
            duration: 0.18,
            ease: "power1.out",
          },
          "fall",
        )
        .to(
          fallingDroplet,
          {
            "--droplet-scale-x": "0.98",
            "--droplet-scale-y": "0.9",
            duration: 0.24,
            ease: "sine.inOut",
          },
          "fall+=0.18",
        )
        .to(
          fallingDroplet,
          {
            "--droplet-scale-x": "0.88",
            "--droplet-scale-y": "1.1",
            duration: 0.3,
            ease: "sine.inOut",
          },
          "fall+=0.42",
        )
        .to(
          fallingDroplet,
          {
            "--droplet-scale-x": "0.96",
            "--droplet-scale-y": "1.02",
            duration: 0.34,
            ease: "sine.inOut",
          },
          "fall+=0.72",
        )

        // Camera work during the fall: the pipe recedes upward, the camera
        // pans down, and the logo rises into frame to meet the drop.
        .to(
          pipeScene,
          {
            "--pipe-scene-y": "-42dvh",
            "--pipe-scene-opacity": "0.06",
            "--pipe-scene-scale": "0.955",
            duration: fallSpan,
            ease: "power2.inOut",
          },
          "fall",
        )
        .to(
          fallTrack,
          {
            "--fall-camera-y": `${fallCameraY}px`,
            duration: fallSpan,
            ease: "power2.inOut",
          },
          "fall",
        )
        .to(
          logoZoomWrap,
          {
            "--logo-x": `${logoFocusX}px`,
            "--logo-y": `${logoFocusY}px`,
            "--logo-scale": "2.18",
            duration: fallSpan - 0.05,
            ease: "power2.inOut",
          },
          "fall+=0.05",
        )
        .to(
          logoZoomWrap,
          {
            "--logo-opacity": "1",
            duration: 0.45,
            ease: "sine.inOut",
          },
          `fall+=${fallSpan * 0.45}`,
        )
        // Gentle aerodynamic drift and wobble, sized to end exactly at landing.
        .to(
          dropletWrap,
          {
            "--fall-drift-x": "-5px",
            duration: fallSpan * 0.34,
            ease: "sine.inOut",
          },
          "fall+=0.1",
        )
        .to(
          dropletWrap,
          {
            "--fall-drift-x": "4px",
            duration: fallSpan * 0.36,
            ease: "sine.inOut",
          },
          `fall+=${0.1 + fallSpan * 0.34}`,
        )
        .to(
          dropletWrap,
          {
            "--fall-drift-x": "0px",
            duration: Math.max(0.2, fallSpan - 0.1 - fallSpan * 0.7),
            ease: "sine.inOut",
          },
          `fall+=${0.1 + fallSpan * 0.7}`,
        )
        .to(
          fallingDroplet,
          {
            "--droplet-rotation": "-1.5deg",
            duration: trackingDuration * 0.4,
            ease: "sine.inOut",
          },
          `fall+=${accelDuration}`,
        )
        .to(
          fallingDroplet,
          {
            "--droplet-rotation": "1.2deg",
            duration: trackingDuration * 0.35,
            ease: "sine.inOut",
          },
          `fall+=${accelDuration + trackingDuration * 0.4}`,
        )
        .to(
          fallingDroplet,
          {
            "--droplet-rotation": "0deg",
            duration: trackingDuration * 0.25,
            ease: "sine.out",
          },
          `fall+=${accelDuration + trackingDuration * 0.75}`,
        )
        // Speed streaks appear only once the camera is tracking at speed.
        .to(
          motionStreaks,
          {
            "--streak-opacity": "0.55",
            "--streak-y": "-40px",
            "--streak-scale-y": "1.1",
            duration: 0.3,
            ease: "power1.out",
          },
          `fall+=${accelDuration * 0.8}`,
        )
        .to(
          motionStreakLines,
          {
            opacity: (index) => [0.3, 0.46, 0.26, 0.4, 0.2][index] ?? 0.28,
            duration: 0.3,
            ease: "power1.out",
            stagger: 0.04,
          },
          `fall+=${accelDuration * 0.85}`,
        )
        .to(
          motionStreaks,
          {
            "--streak-y": "-88px",
            "--streak-scale-y": "1.3",
            duration: trackingDuration,
            ease: "power1.inOut",
          },
          `fall+=${accelDuration}`,
        )

        // Beat 5 — impact. Squash, ripple, splash satellites, and the drop
        // becomes the droplet in the logo.
        .addLabel("land", `fall+=${fallSpan}`)
        .to(
          fallingDroplet,
          {
            "--droplet-scale-x": `${LOGO_DROP_TARGET_SCALE * 1.16}`,
            "--droplet-scale-y": `${LOGO_DROP_TARGET_SCALE * 0.74}`,
            "--droplet-wobble-x": "0px",
            "--droplet-body-y": "0px",
            duration: 0.11,
            ease: "power2.out",
          },
          "land",
        )
        .to(
          fallingDroplet,
          {
            "--droplet-scale-x": `${LOGO_DROP_TARGET_SCALE}`,
            "--droplet-scale-y": `${LOGO_DROP_TARGET_SCALE}`,
            duration: 0.22,
            ease: "power2.inOut",
          },
          "land+=0.11",
        )
        .fromTo(
          impactRipple,
          { opacity: 0.65, scaleX: 0.25, scaleY: 0.11 },
          {
            opacity: 0,
            scaleX: 1.55,
            scaleY: 0.7,
            duration: 0.55,
            ease: "power2.out",
            // Without this, fromTo renders its "from" state at timeline
            // build time and the ripple is visible through the whole intro.
            immediateRender: false,
          },
          "land+=0.03",
        )
        .to(
          landingGlow,
          {
            "--landing-glow-opacity": "0.3",
            "--landing-glow-scale": "1.1",
            duration: 0.15,
            ease: "power1.out",
          },
          "land+=0.05",
        )
        .to(
          landingGlow,
          {
            "--landing-glow-opacity": "0",
            "--landing-glow-scale": "1.6",
            duration: 0.3,
            ease: "sine.out",
          },
          "land+=0.22",
        )
        .to(
          fallingDroplet,
          {
            "--droplet-opacity": "0",
            duration: 0.2,
            ease: "sine.out",
          },
          "land+=0.18",
        )
        .to(
          solidLogo,
          {
            "--solid-logo-opacity": "1",
            duration: 0.22,
            ease: "sine.out",
          },
          "land+=0.1",
        )
        .to(
          motionStreaks,
          {
            "--streak-opacity": "0",
            "--streak-y": "30px",
            "--streak-scale-y": "0.9",
            duration: 0.25,
            ease: "power1.out",
          },
          "land",
        )
        .to(
          motionStreakLines,
          {
            opacity: 0,
            duration: 0.2,
            ease: "power1.out",
            stagger: 0.02,
          },
          "land",
        )
        .to(
          [leakSeep, leakGlow],
          {
            "--seep-opacity": "0",
            "--leak-glow-opacity": "0",
            duration: 0.2,
            ease: "power1.out",
          },
          "land",
        )
        .to(
          pipeScene,
          {
            "--pipe-scene-opacity": "0",
            duration: 0.35,
            ease: "power2.out",
          },
          "land",
        );

      for (const [index, satellite] of impactSatellites.entries()) {
        const spec = splashSatelliteSpecs[index] ?? splashSatelliteSpecs[0];
        timeline
          .to(
            satellite,
            {
              opacity: 0.9,
              x: spec.x,
              y: spec.rise,
              duration: 0.16,
              ease: "power2.out",
            },
            "land+=0.05",
          )
          .to(
            satellite,
            {
              opacity: 0,
              x: spec.x * 1.35,
              y: spec.rise + 34,
              duration: 0.3,
              ease: "power2.in",
            },
            "land+=0.21",
          );
      }

      timeline
        // Beat 6 — pull back to reveal the full logo, hold the brand moment.
        .addLabel("reveal", "land+=0.35")
        .to(
          logoZoomWrap,
          {
            "--logo-x": "0px",
            "--logo-y": "0px",
            "--logo-scale": "1",
            duration: 0.85,
            ease: "power3.inOut",
          },
          "reveal",
        )

        // Beat 7 — hand the logo off to its place in the site header.
        .addLabel("handoff", "reveal+=1.05")
        .to(
          logoHandoffWrap,
          {
            duration: 0.9,
            ease: "power2.inOut",
            scale: handoffScale,
            x: handoffX,
            y: handoffY,
          },
          "handoff",
        )
        .to(
          root,
          {
            autoAlpha: 0,
            duration: 0.3,
            ease: "sine.out",
            onComplete: completeIntro,
          },
          "handoff+=0.78",
        );

      // Failsafe: if anything stalls (frozen rAF, runaway tween), release the
      // page rather than leaving the visitor behind a locked overlay.
      failsafeId = window.setTimeout(
        completeIntro,
        (timeline.duration() + 3) * 1000,
      );

      // Hold on the first frame until the scene's images have decoded so the
      // wrench and logo never pop in mid-animation. Capped so a slow network
      // can only delay the intro, not block it.
      const images = Array.from(root.querySelectorAll("img"));
      const decodes = images.map((image) =>
        image.complete
          ? Promise.resolve()
          : image.decode().catch(() => undefined),
      );
      const decodeTimeout = new Promise<void>((resolve) => {
        window.setTimeout(resolve, 1200);
      });
      void Promise.race([Promise.all(decodes), decodeTimeout]).then(() => {
        if (!cancelled && timelineRef.current === timeline) {
          timeline.play();
        }
      });
    }, root);

    return () => {
      cancelled = true;
      if (failsafeId !== null) {
        window.clearTimeout(failsafeId);
      }
      timelineRef.current?.kill();
      timelineRef.current = null;
      context.revert();
    };
  }, [completeIntro, phase, runId]);

  if (phase === "done") {
    return null;
  }

  return (
    <section
      ref={rootRef}
      role="dialog"
      aria-modal="true"
      aria-label="JK Plumbing intro animation"
      className="intro-overlay fixed inset-0 z-[100] min-h-svh w-screen overflow-hidden overscroll-none bg-[#050910] text-white"
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
        ref={skipButtonRef}
        type="button"
        onClick={completeIntro}
        className="absolute right-4 top-4 z-30 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur transition hover:border-white/25 hover:bg-white/[0.1] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plumbing-blue sm:right-6 sm:top-6"
      >
        Skip intro
      </button>

      <div
        className="intro-camera relative min-h-svh w-screen overflow-hidden"
        style={sceneStyle}
      >
        <div
          className="pipe-scene absolute inset-0"
          style={{
            opacity: "var(--pipe-scene-opacity)",
            transform:
              "translate3d(0, var(--pipe-scene-y), 0) scale(var(--pipe-scene-scale))",
            transformOrigin: "var(--drop-axis-x) var(--leak-y)",
            willChange: "transform, opacity",
          }}
        >
          <div
            className="pipe-assembly absolute z-10"
            style={{
              left: "var(--drop-axis-x)",
              top: "var(--leak-y)",
              width: "var(--pipe-width)",
              transform:
                "translate(-55.56%, -64.8%) translate3d(var(--pipe-react-x), var(--pipe-react-y), 0) rotate(var(--pipe-react-rotation))",
              transformOrigin: "55.56% 64.8%",
            }}
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
          />
          <span
            className="leak-seep pointer-events-none absolute z-20 h-2 w-10 rounded-full bg-sky-500/55 blur-[1px]"
            style={{
              left: "var(--drop-axis-x)",
              opacity: "var(--seep-opacity)",
              top: "var(--leak-y)",
              transform: "translate(-50%, -12%) scale(var(--seep-scale))",
              transformOrigin: "50% 50%",
            }}
            aria-hidden="true"
          />
          <span
            className="leak-glow pointer-events-none absolute z-20 size-14 rounded-full bg-sky-400/25 blur-xl"
            style={{
              left: "var(--drop-axis-x)",
              opacity: "var(--leak-glow-opacity)",
              top: "var(--leak-y)",
              transform: "translate(-50%, -36%)",
            }}
            aria-hidden="true"
          />
          <span
            className="leak-thread pointer-events-none absolute z-20 h-9 w-2 rounded-full bg-gradient-to-b from-sky-300/75 to-sky-500/20 blur-[0.4px]"
            style={{
              left: "var(--drop-axis-x)",
              opacity: "var(--leak-thread-opacity)",
              top: "calc(var(--leak-y) + 0.1rem)",
              transform: "translateX(-50%) scaleY(var(--leak-thread-scale-y))",
              transformOrigin: "50% 0%",
            }}
            aria-hidden="true"
          />

          <div
            className="wrench-wrap pointer-events-none absolute z-20"
            style={{
              left: "var(--wrench-x)",
              opacity: "var(--wrench-opacity)",
              top: "var(--wrench-y)",
              width: "var(--wrench-width)",
              height: "calc(var(--wrench-width) * 1.583333)",
              transform:
                "translate3d(var(--wrench-anim-x), var(--wrench-anim-y), 0) rotate(calc(var(--wrench-rotation) + var(--wrench-anim-rotation)))",
              transformOrigin: "var(--wrench-origin-x) var(--wrench-origin-y)",
              willChange: "transform, opacity",
            }}
          >
            <img
              src="/brand/wrench.svg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 block h-auto w-full object-contain opacity-95 drop-shadow-[0_18px_24px_rgba(0,0,0,0.38)]"
            />
          </div>
        </div>

        <div
          className="fall-track absolute inset-0"
          style={{
            transform: "translate3d(0, var(--fall-camera-y), 0)",
            willChange: "transform",
          }}
        >
          <div
            className="droplet-wrap absolute z-20 w-[clamp(2.5rem,8vw,4rem)]"
            style={{
              left: "var(--drop-axis-x)",
              top: "var(--falling-drop-y)",
              transform:
                "translateX(-50%) translate3d(var(--fall-drift-x), calc(var(--droplet-anim-y) + var(--droplet-fall-y)), 0)",
              willChange: "transform",
            }}
          >
            <div
              className="motion-streaks pointer-events-none absolute left-1/2 top-1/2 z-0 h-32 w-28"
              style={{
                opacity: "var(--streak-opacity)",
                transform:
                  "translate(-50%, -50%) translate3d(0, var(--streak-y), 0) scaleY(var(--streak-scale-y))",
                transformOrigin: "50% 50%",
                willChange: "transform, opacity",
              }}
              aria-hidden="true"
            >
              {motionStreakSpecs.map(({ height, left, rotate, top }) => (
                <span
                  key={`${left}-${top}`}
                  className="motion-streak absolute w-px rounded-full bg-gradient-to-b from-sky-100/0 via-sky-200/80 to-sky-500/0"
                  style={{
                    height,
                    left,
                    top,
                    transform: `rotate(${rotate})`,
                    transformOrigin: "50% 50%",
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>
            <span
              className="logo-contact-glow pointer-events-none absolute left-1/2 top-1/2 z-0 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/25 blur-2xl"
              style={{
                opacity: "var(--landing-glow-opacity)",
                transform:
                  "translate(-50%, -50%) scale(var(--landing-glow-scale))",
                willChange: "transform, opacity",
              }}
              aria-hidden="true"
            />
            <span
              className="impact-ripple pointer-events-none absolute left-1/2 top-1/2 z-0 size-16 rounded-full border-2 border-sky-300/70"
              aria-hidden="true"
            />
            {splashSatelliteSpecs.map((spec) => (
              <span
                key={`satellite-${spec.x}`}
                className="impact-satellite pointer-events-none absolute left-1/2 top-1/2 z-10 rounded-full bg-sky-300"
                style={{ height: spec.size, width: spec.size }}
                aria-hidden="true"
              />
            ))}
            <div
              aria-hidden="true"
              className="falling-droplet relative z-10 w-full drop-shadow-[0_16px_20px_rgba(14,165,233,0.18)]"
              style={{
                opacity: "var(--droplet-opacity)",
                transform:
                  "translate3d(var(--droplet-wobble-x), var(--droplet-body-y), 0) rotate(var(--droplet-rotation)) scale(var(--droplet-scale-x), var(--droplet-scale-y))",
                transformOrigin: "50% 18%",
                willChange: "transform, opacity",
              }}
            >
              <span
                className="droplet-tail absolute left-1/2 top-0 z-0 h-[46%] w-[18%] -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-200/75 via-sky-400/65 to-sky-500/0 blur-[0.5px]"
                style={{
                  opacity: "var(--droplet-tail-opacity)",
                  transform:
                    "translate3d(-50%, var(--droplet-tail-y), 0) scaleY(var(--droplet-tail-scale-y))",
                  transformOrigin: "50% 0%",
                  willChange: "transform, opacity",
                }}
                aria-hidden="true"
              />
              <svg
                viewBox="0 0 60 80"
                className="relative z-10 block h-auto w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="introDropletGradient"
                    x1="14"
                    y1="8"
                    x2="48"
                    y2="68"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#59C7FF" />
                    <stop offset="0.48" stopColor="#1597DF" />
                    <stop offset="1" stopColor="#0668B1" />
                  </linearGradient>
                  <radialGradient
                    id="introDropletHighlight"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="translate(24 23) rotate(65) scale(15 8)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#DDF5FF" stopOpacity="0.75" />
                    <stop offset="1" stopColor="#DDF5FF" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <path
                  d="M30 5C20 16 15 26 15 36C15 51 21.6 63 30 63C38.4 63 45 51 45 36C45 26 40 16 30 5Z"
                  fill="url(#introDropletGradient)"
                />
                <path
                  d="M30 5C20 16 15 26 15 36C15 51 21.6 63 30 63C38.4 63 45 51 45 36C45 26 40 16 30 5Z"
                  fill="url(#introDropletHighlight)"
                />
                <path
                  d="M37.8 47.5C36.9 53.4 33.6 57.3 29.4 58.6"
                  stroke="#043A68"
                  strokeOpacity="0.55"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <ellipse
                  cx="25"
                  cy="24"
                  rx="3.2"
                  ry="5.4"
                  fill="#D9F4FF"
                  opacity="0.55"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="logo-scene absolute inset-0">
          <div
            className="logo-zoom-wrap absolute"
            style={{
              left: "var(--drop-axis-x)",
              opacity: "var(--logo-opacity)",
              top: "max(1rem, min(var(--logo-top), calc(100dvh - var(--logo-width) + 2rem)))",
              transform:
                "translateX(-50%) translate3d(var(--logo-x), var(--logo-y), 0) scale(var(--logo-scale))",
              transformOrigin:
                "var(--logo-drop-target-x) var(--logo-drop-target-y)",
              width: "var(--logo-width)",
              willChange: "transform, opacity",
            }}
          >
            <div className="intro-logo-handoff-wrap relative aspect-[1320/629] w-full">
              <span
                className="logo-mark absolute size-px -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: "var(--logo-drop-target-x)",
                  top: "var(--logo-drop-target-y)",
                }}
                aria-hidden="true"
              />
              <Image
                src="/brand/jk-logo-drop-hole.png"
                alt="JK Plumbing Solutions"
                fill
                preload
                sizes="(max-width: 640px) 88vw, 560px"
                className="relative z-0 object-cover drop-shadow-[0_18px_24px_rgba(0,0,0,0.3)]"
              />
              <Image
                src="/brand/jk-logo-transparent.png"
                alt=""
                fill
                preload
                sizes="(max-width: 640px) 88vw, 560px"
                className="intro-logo-solid pointer-events-none absolute inset-0 z-10 object-cover drop-shadow-[0_18px_24px_rgba(0,0,0,0.3)]"
                style={{
                  opacity: "var(--solid-logo-opacity)",
                  willChange: "opacity",
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
