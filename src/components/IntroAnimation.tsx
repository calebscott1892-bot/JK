"use client";

/* eslint-disable @next/next/no-img-element */

import { gsap } from "gsap";
import Image from "next/image";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

const INTRO_STORAGE_KEY = "jk-plumbing:intro-complete:v1";
const DEBUG_ALIGNMENT = false;
const DEBUG_LOGO_TARGET = false;

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
  "--falling-drop-y": string;
  "--fall-focus-y": string;
  "--logo-drop-y": string;
  "--logo-drop-scale": string;
  "--logo-drop-target-x": string;
  "--logo-drop-target-y": string;
  "--logo-drop-target-scale": string;
  "--fall-duration": string;
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
  "--logo-card-bg-opacity": string;
  "--logo-card-border-opacity": string;
  "--logo-card-padding": string;
  "--logo-card-radius": string;
  "--logo-top": string;
  "--logo-width": string;
  "--logo-x": string;
  "--logo-y": string;
  "--logo-scale": string;
  "--logo-opacity": string;
};

export function IntroAnimation() {
  const rootRef = useRef<HTMLElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [runId, setRunId] = useState(0);

  const completeIntro = useCallback(() => {
    timelineRef.current?.kill();
    timelineRef.current = null;

    try {
      window.sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
    } catch {
      // Storage can be unavailable in private or restricted browser contexts.
    }

    document.documentElement.dataset.introState = "complete";

    const siteTargets = document.querySelectorAll(
      ".site-header, .header-logo-slot, .header-logo-target, .intro-replay-button, .header-nav, .header-nav a, .header-call, .hero-content",
    );

    gsap.killTweensOf(siteTargets);
    gsap.set(siteTargets, { clearProps: "all" });
    setIsVisible(false);
  }, []);

  const startIntro = useCallback(() => {
    timelineRef.current?.kill();
    timelineRef.current = null;
    document.documentElement.dataset.introState = "active";
    setRunId((current) => current + 1);
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let frameId: number | null = null;
    const replayIntro = () => {
      startIntro();
    };
    const scheduleStartIntro = () => {
      frameId = window.requestAnimationFrame(() => {
        startIntro();
      });
    };

    window.addEventListener("jk:intro-replay", replayIntro);

    try {
      if (window.sessionStorage.getItem(INTRO_STORAGE_KEY) === "true") {
        document.documentElement.dataset.introState = "complete";
      } else {
        scheduleStartIntro();
      }
    } catch {
      scheduleStartIntro();
    }

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("jk:intro-replay", replayIntro);
    };
  }, [startIntro]);

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

  useEffect(() => {
    if (!isVisible || !rootRef.current) {
      return;
    }

    const root = rootRef.current;
    document.documentElement.dataset.introState = "active";

    const context = gsap.context(() => {
      const pipeAssembly = root.querySelector<HTMLElement>(".pipe-assembly");
      const pipeScene = root.querySelector<HTMLElement>(".pipe-scene");
      const wrenchWrap = root.querySelector<HTMLElement>(".wrench-wrap");
      const leakSeep = root.querySelector<HTMLElement>(".leak-seep");
      const leakThread = root.querySelector<HTMLElement>(".leak-thread");
      const leakGlow = root.querySelector<HTMLElement>(".leak-glow");
      const fallTrack = root.querySelector<HTMLElement>(".fall-track");
      const dropletWrap = root.querySelector<HTMLElement>(".droplet-wrap");
      const fallingDroplet = root.querySelector<HTMLElement>(".falling-droplet");
      const dropletTail = root.querySelector<HTMLElement>(".droplet-tail");
      const motionStreaks = root.querySelector<HTMLElement>(".motion-streaks");
      const motionStreakLines = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(".motion-streak"),
      );
      const landingGlow = root.querySelector<HTMLElement>(".logo-contact-glow");
      const logoZoomWrap = root.querySelector<HTMLElement>(".logo-zoom-wrap");
      const logoHandoffWrap =
        root.querySelector<HTMLElement>(".intro-logo-handoff-wrap");
      const logoCard = root.querySelector<HTMLElement>(".intro-logo-card");
      const solidLogo = root.querySelector<HTMLElement>(".intro-logo-solid");
      const logoMark = root.querySelector<HTMLElement>(".logo-mark");
      const siteHeader = document.querySelector<HTMLElement>(".site-header");
      const headerLogoSlot =
        document.querySelector<HTMLElement>(".header-logo-slot");
      const headerLogoTarget =
        document.querySelector<HTMLElement>(".header-logo-target") ??
        headerLogoSlot;

      if (
        !pipeAssembly ||
        !pipeScene ||
        !wrenchWrap ||
        !leakSeep ||
        !leakThread ||
        !leakGlow ||
        !fallTrack ||
        !dropletWrap ||
        !fallingDroplet ||
        !dropletTail ||
        !motionStreaks ||
        !landingGlow ||
        !logoZoomWrap ||
        !logoHandoffWrap ||
        !logoCard ||
        !solidLogo ||
        !logoMark
      ) {
        completeIntro();
        return;
      }

      if (!siteHeader || !headerLogoSlot || !headerLogoTarget) {
        completeIntro();
        return;
      }

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
      const dropletRect = dropletWrap.getBoundingClientRect();
      const dropletHeight =
        fallingDroplet.getBoundingClientRect().height || dropletWidth * (80 / 60);
      const formedDropletCenterX =
        dropletRect.left - rootRect.left + dropletWidth * 0.5;
      const formedDropletCenterY = dropletTop + dropletHeight * 0.5;
      const rootStyle = window.getComputedStyle(root);
      const fallDuration =
        Number.parseFloat(rootStyle.getPropertyValue("--fall-duration")) || 2.25;
      const fallDistance = Math.round(
        clamp(rootRect.height * 0.3, 140, 270),
      );
      const fallCameraY = -Math.round(
        clamp(rootRect.height * 0.13, 52, 132),
      );
      const landingCenterY = formedDropletCenterY + fallDistance + fallCameraY;
      const logoMarkCenterX =
        logoMarkRect.left - rootRect.left + logoMarkRect.width * 0.5;
      const logoMarkCenterY =
        logoMarkRect.top - rootRect.top + logoMarkRect.height * 0.5;
      const logoFocusX = Math.round(formedDropletCenterX - logoMarkCenterX);
      const logoFocusY = Math.round(landingCenterY - logoMarkCenterY);
      const logoDropTargetScale =
        rootStyle.getPropertyValue("--logo-drop-target-scale").trim() ||
        rootStyle.getPropertyValue("--logo-drop-scale").trim() ||
        "1.08";
      const fallDriftReturnDuration = Math.max(0.55, fallDuration - 1.28);

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        completeIntro();
        return;
      }

      gsap.set(logoHandoffWrap, {
        autoAlpha: 1,
        scale: 1,
        transformOrigin: "50% 50%",
        x: 0,
        y: 0,
      });

      const timeline = gsap.timeline({
        defaults: { ease: "power2.out" },
      });

      timelineRef.current = timeline;

      timeline
        .set(motionStreakLines, { opacity: 0 }, 0)
        .addLabel("wrenchStart", 0)
        .addLabel("tighten", "wrenchStart")
        .to(
          wrenchWrap,
          {
            "--wrench-anim-x": "0vw",
            "--wrench-anim-y": "0vh",
            "--wrench-anim-rotation": "0deg",
            "--wrench-opacity": "1",
            duration: 0.68,
            ease: "power3.out",
          },
          "tighten",
        )
        .to(
          wrenchWrap,
          {
            "--wrench-anim-rotation": "6deg",
            duration: 0.15,
            ease: "power2.inOut",
          },
          "tighten+=0.72",
        )
        .to(wrenchWrap, {
          "--wrench-anim-rotation": "-2.5deg",
          duration: 0.12,
          ease: "power2.inOut",
        })
        .to(wrenchWrap, {
          "--wrench-anim-rotation": "0deg",
          duration: 0.17,
          ease: "power2.out",
        })
        .to(
          pipeAssembly,
          {
            "--pipe-react-x": "1.5px",
            "--pipe-react-y": "-1px",
            "--pipe-react-rotation": "0.28deg",
            duration: 0.07,
            ease: "sine.inOut",
            repeat: 3,
            yoyo: true,
          },
          "tighten+=0.8",
        )
        .to(
          leakSeep,
          {
            "--seep-opacity": "0.72",
            "--seep-scale": "0.42",
            duration: 0.16,
            ease: "power2.out",
          },
          "tighten+=1.08",
        )
        .addLabel("dropletEmergenceStart", 1.12)
        .addLabel("emerge", "dropletEmergenceStart")
        .to(
          leakGlow,
          {
            "--leak-glow-opacity": "0.55",
            duration: 0.18,
            ease: "power1.out",
          },
          "emerge",
        )
        .to(
          leakThread,
          {
            "--leak-thread-opacity": "0.78",
            "--leak-thread-scale-y": "0.72",
            duration: 0.22,
            ease: "power2.out",
          },
          "emerge+=0.04",
        )
        .to(
          fallingDroplet,
          {
            "--droplet-opacity": "1",
            "--droplet-scale-x": "0.28",
            "--droplet-scale-y": "0.24",
            "--droplet-body-y": "-2px",
            "--droplet-rotation": "-1deg",
            duration: 0.14,
            ease: "power2.out",
          },
          "emerge+=0.06",
        )
        .to(
          dropletTail,
          {
            "--droplet-tail-opacity": "0.85",
            "--droplet-tail-scale-y": "0.72",
            "--droplet-tail-y": "-7px",
            duration: 0.2,
            ease: "power2.out",
          },
          "emerge+=0.1",
        )
        .to(
          fallingDroplet,
          {
            "--droplet-scale-x": "0.54",
            "--droplet-scale-y": "1.24",
            "--droplet-body-y": "8px",
            "--droplet-rotation": "1.5deg",
            duration: 0.22,
            ease: "sine.inOut",
          },
          "emerge+=0.2",
        )
        .to(
          dropletWrap,
          {
            "--droplet-anim-y": "0px",
            duration: 0.5,
            ease: "power2.in",
          },
          "emerge+=0.34",
        )
        .to(
          fallingDroplet,
          {
            "--droplet-scale-x": "0.92",
            "--droplet-scale-y": "1.12",
            "--droplet-body-y": "0px",
            "--droplet-rotation": "0.5deg",
            duration: 0.22,
            ease: "power2.out",
          },
          "emerge+=0.43",
        )
        .to(
          dropletTail,
          {
            "--droplet-tail-opacity": "0",
            "--droplet-tail-scale-y": "0.18",
            "--droplet-tail-y": "-14px",
            duration: 0.2,
            ease: "power1.out",
          },
          "emerge+=0.46",
        )
        .to(
          leakThread,
          {
            "--leak-thread-opacity": "0",
            "--leak-thread-scale-y": "0.18",
            duration: 0.24,
            ease: "power1.out",
          },
          "emerge+=0.48",
        )
        .to(
          leakSeep,
          {
            "--seep-opacity": "0.42",
            "--seep-scale": "0.72",
            duration: 0.28,
            ease: "power1.out",
          },
          "emerge+=0.52",
        )
        .to(
          leakGlow,
          {
            "--leak-glow-opacity": "0.18",
            duration: 0.32,
            ease: "power1.out",
          },
          "emerge+=0.54",
        )
        .to(
          fallingDroplet,
          {
            "--droplet-scale-x": "1",
            "--droplet-scale-y": "1",
            "--droplet-rotation": "0deg",
            duration: 0.22,
            ease: "sine.out",
          },
          "emerge+=0.64",
        )
        .to(
          motionStreaks,
          {
            "--streak-opacity": "0",
            "--streak-y": "-10px",
            "--streak-scale-y": "0.9",
            duration: 0.01,
          },
          "emerge+=0.58",
        )
        .addLabel("dropletEmergenceComplete", 1.9)
        .addLabel("approvedEmergenceComplete", "dropletEmergenceComplete")
        .addLabel("freeFallStart", "dropletEmergenceComplete")
        .addLabel("fall", "freeFallStart")
        .to(
          pipeScene,
          {
            "--pipe-scene-y": "-42dvh",
            "--pipe-scene-opacity": "0.08",
            "--pipe-scene-scale": "0.955",
            duration: fallDuration,
            ease: "power2.inOut",
          },
          "freeFallStart",
        )
        .to(
          fallTrack,
          {
            "--fall-camera-y": `${fallCameraY}px`,
            duration: fallDuration,
            ease: "power2.inOut",
          },
          "freeFallStart",
        )
        .to(
          dropletWrap,
          {
            "--droplet-fall-y": `${fallDistance}px`,
            duration: fallDuration,
            ease: "power1.in",
          },
          "freeFallStart",
        )
        .to(
          dropletWrap,
          {
            "--fall-drift-x": "-8px",
            duration: 0.62,
            ease: "sine.inOut",
          },
          "freeFallStart+=0.08",
        )
        .to(dropletWrap, {
          "--fall-drift-x": "8px",
          duration: 0.82,
          ease: "sine.inOut",
        })
        .to(dropletWrap, {
          "--fall-drift-x": "0px",
          duration: fallDriftReturnDuration,
          ease: "sine.inOut",
        })
        .to(
          logoZoomWrap,
          {
            "--logo-x": `${logoFocusX}px`,
            "--logo-y": `${logoFocusY}px`,
            "--logo-scale": "2.18",
            duration: Math.max(1.8, fallDuration - 0.1),
            ease: "power2.inOut",
          },
          "freeFallStart+=0.1",
        )
        .to(
          motionStreaks,
          {
            "--streak-opacity": "0.62",
            "--streak-y": "-42px",
            "--streak-scale-y": "1.1",
            duration: 0.42,
            ease: "power1.out",
          },
          "freeFallStart+=0.18",
        )
        .to(
          motionStreakLines,
          {
            opacity: (index) => [0.34, 0.52, 0.28, 0.44, 0.22][index] ?? 0.3,
            duration: 0.42,
            ease: "power1.out",
            stagger: 0.045,
          },
          "freeFallStart+=0.22",
        )
        .to(
          motionStreaks,
          {
            "--streak-y": "-86px",
            "--streak-scale-y": "1.32",
            duration: fallDuration - 0.56,
            ease: "power1.inOut",
          },
          "freeFallStart+=0.56",
        )
        .to(
          motionStreakLines,
          {
            opacity: (index) => [0.18, 0.36, 0.16, 0.3, 0.12][index] ?? 0.18,
            duration: 0.52,
            ease: "sine.inOut",
            stagger: 0.035,
          },
          `freeFallStart+=${fallDuration - 0.62}`,
        )
        .to(
          fallingDroplet,
          {
            "--droplet-scale-x": "0.98",
            "--droplet-scale-y": "1.04",
            "--droplet-wobble-x": "-4px",
            "--droplet-rotation": "-1.5deg",
            duration: 0.4,
            ease: "sine.inOut",
          },
          "freeFallStart+=0.14",
        )
        .to(
          fallingDroplet,
          {
            "--droplet-scale-x": "0.86",
            "--droplet-scale-y": "1.28",
            "--droplet-wobble-x": "8px",
            "--droplet-rotation": "3.5deg",
            duration: 0.56,
            ease: "sine.inOut",
          },
          "freeFallStart+=0.58",
        )
        .to(
          dropletTail,
          {
            "--droplet-tail-opacity": "0.34",
            "--droplet-tail-scale-y": "0.58",
            "--droplet-tail-y": "-10px",
            duration: 0.36,
            ease: "sine.inOut",
          },
          "freeFallStart+=0.72",
        )
        .to(
          fallingDroplet,
          {
            "--droplet-scale-x": "0.92",
            "--droplet-scale-y": "1.2",
            "--droplet-wobble-x": "-6px",
            "--droplet-rotation": "-2.5deg",
            duration: 0.58,
            ease: "sine.inOut",
          },
          "freeFallStart+=1.18",
        )
        .to(
          fallingDroplet,
          {
            "--droplet-scale-x": "0.88",
            "--droplet-scale-y": "1.24",
            "--droplet-wobble-x": "4px",
            "--droplet-rotation": "2deg",
            duration: 0.5,
            ease: "sine.inOut",
          },
          "freeFallStart+=1.78",
        )
        .to(
          dropletTail,
          {
            "--droplet-tail-opacity": "0",
            "--droplet-tail-scale-y": "0.18",
            "--droplet-tail-y": "-16px",
            duration: 0.44,
            ease: "sine.out",
          },
          `freeFallStart+=${fallDuration - 0.5}`,
        )
        .to(
          fallingDroplet,
          {
            "--droplet-scale-x": "1",
            "--droplet-scale-y": "1",
            "--droplet-wobble-x": "0px",
            "--droplet-rotation": "0deg",
            duration: 0.26,
            ease: "sine.out",
          },
          `freeFallStart+=${Math.max(1.95, fallDuration - 0.24)}`,
        )
        .addLabel("logoMergeStart", `freeFallStart+=${fallDuration}`)
        .addLabel("land", "logoMergeStart")
        .to(
          logoZoomWrap,
          {
            "--logo-opacity": "1",
            duration: 0.22,
            ease: "sine.out",
          },
          "logoMergeStart-=0.2",
        )
        .to(
          dropletWrap,
          {
            "--droplet-fall-y": `${fallDistance}px`,
            "--fall-drift-x": "0px",
            duration: 0.22,
            ease: "power2.out",
          },
          "logoMergeStart",
        )
        .to(
          fallingDroplet,
          {
            "--droplet-scale-x": logoDropTargetScale,
            "--droplet-scale-y": logoDropTargetScale,
            "--droplet-wobble-x": "0px",
            "--droplet-rotation": "0deg",
            duration: 0.34,
            ease: "power2.out",
          },
          "logoMergeStart",
        )
        .to(
          landingGlow,
          {
            "--landing-glow-opacity": "0.28",
            "--landing-glow-scale": "1.08",
            duration: 0.16,
            ease: "power1.out",
          },
          "logoMergeStart+=0.12",
        )
        .to(
          fallingDroplet,
          {
            "--droplet-opacity": "0",
            duration: 0.28,
            ease: "sine.out",
          },
          "logoMergeStart+=0.22",
        )
        .to(
          solidLogo,
          {
            "--solid-logo-opacity": "1",
            duration: 0.26,
            ease: "sine.out",
          },
          "logoMergeStart+=0.18",
        )
        .to(
          landingGlow,
          {
            "--landing-glow-opacity": "0",
            "--landing-glow-scale": "1.55",
            duration: 0.3,
            ease: "sine.out",
          },
          "logoMergeStart+=0.28",
        )
        .to(
          motionStreaks,
          {
            "--streak-opacity": "0",
            "--streak-y": "36px",
            "--streak-scale-y": "0.9",
            duration: 0.34,
            ease: "power1.out",
          },
          "logoMergeStart",
        )
        .to(
          motionStreakLines,
          {
            opacity: 0,
            duration: 0.24,
            ease: "power1.out",
            stagger: 0.025,
          },
          "logoMergeStart",
        )
        .to(
          leakSeep,
          {
            "--seep-opacity": "0",
            duration: 0.28,
            ease: "power1.out",
          },
          "logoMergeStart",
        )
        .to(
          pipeScene,
          {
            "--pipe-scene-y": "-26dvh",
            "--pipe-scene-opacity": "0",
            duration: 0.52,
            ease: "power2.out",
          },
          "logoMergeStart+=0.05",
        )
        .addLabel("logoRevealStart", "logoMergeStart+=0.48")
        .addLabel("reveal", "logoRevealStart")
        .to(
          logoZoomWrap,
          {
            "--logo-x": "0px",
            "--logo-y": "0px",
            "--logo-scale": "1",
            "--logo-opacity": "1",
            duration: 0.96,
            ease: "power3.inOut",
          },
          "logoRevealStart",
        )
        .set(
          [
            pipeScene,
            wrenchWrap,
            pipeAssembly,
            leakSeep,
            leakThread,
            leakGlow,
            fallTrack,
            dropletWrap,
            fallingDroplet,
            dropletTail,
            motionStreaks,
            landingGlow,
            logoCard,
            solidLogo,
            logoZoomWrap,
          ],
          {
            "--wrench-anim-x": "0vw",
            "--wrench-anim-y": "0vh",
            "--wrench-anim-rotation": "0deg",
            "--wrench-opacity": "1",
            "--pipe-scene-y": "-26dvh",
            "--pipe-scene-opacity": "0",
            "--pipe-scene-scale": "0.98",
            "--fall-camera-y": `${fallCameraY}px`,
            "--pipe-react-x": "0px",
            "--pipe-react-y": "0px",
            "--pipe-react-rotation": "0deg",
            "--seep-opacity": "0",
            "--leak-thread-opacity": "0",
            "--leak-thread-scale-y": "0.18",
            "--leak-glow-opacity": "0",
            "--droplet-anim-y": "0px",
            "--droplet-fall-y": `${fallDistance}px`,
            "--fall-drift-x": "0px",
            "--droplet-opacity": "0",
            "--droplet-scale-x": logoDropTargetScale,
            "--droplet-scale-y": logoDropTargetScale,
            "--droplet-wobble-x": "0px",
            "--droplet-body-y": "0px",
            "--droplet-rotation": "0deg",
            "--droplet-tail-opacity": "0",
            "--droplet-tail-scale-y": "0.1",
            "--droplet-tail-y": "0px",
            "--streak-opacity": "0",
            "--streak-y": "36px",
            "--streak-scale-y": "0.9",
            "--landing-glow-opacity": "0",
            "--landing-glow-scale": "1.55",
            "--solid-logo-opacity": "1",
            "--logo-card-bg-opacity": "0",
            "--logo-card-border-opacity": "0",
            "--logo-card-padding": "0px",
            "--logo-card-radius": "0px",
            "--logo-x": "0px",
            "--logo-y": "0px",
            "--logo-scale": "1",
            "--logo-opacity": "1",
          },
          "logoRevealStart+=0.98",
        )
        .addLabel("headerHandoffStart", "logoRevealStart+=0.98")
        .to(
          logoCard,
          {
            "--logo-card-bg-opacity": "1",
            "--logo-card-border-opacity": "0.16",
            "--logo-card-padding": "6px",
            "--logo-card-radius": "10px",
            duration: 0.34,
            ease: "power2.out",
          },
          "headerHandoffStart-=0.16",
        )
        .to(
          logoHandoffWrap,
          {
            duration: 1.08,
            ease: "power2.inOut",
            scale: handoffScale,
            x: handoffX,
            y: handoffY,
          },
          "headerHandoffStart",
        )
        .to(
          root,
          {
            autoAlpha: 0,
            duration: 0.28,
            ease: "sine.out",
            onComplete: completeIntro,
          },
          "headerHandoffStart+=1.04",
        );
    }, root);

    return () => {
      timelineRef.current?.kill();
      timelineRef.current = null;
      context.revert();
    };
  }, [completeIntro, isVisible, runId]);

  if (!isVisible) {
    return null;
  }

  const sceneStyle: IntroSceneStyle = {
    "--drop-axis-x": "50vw",
    "--leak-y": "clamp(8rem, 25dvh, 15.75rem)",
    "--nut-x": "var(--drop-axis-x)",
    "--nut-y": "calc(var(--leak-y) - var(--pipe-width) * 0.083)",
    "--pipe-width": "clamp(30rem, 116vw, 74rem)",
    "--wrench-width": "clamp(9rem, min(29vw, 27dvh), 22rem)",
    "--wrench-x": "calc(var(--nut-x) - var(--wrench-origin-x) + 0px)",
    "--wrench-y": "calc(var(--nut-y) - var(--wrench-origin-y) + 0px)",
    "--wrench-rotation": "-50deg",
    "--wrench-origin-x": "calc(var(--wrench-width) * 0.72)",
    "--wrench-origin-y": "calc(var(--wrench-width) * 0.28)",
    "--wrench-z": "20",
    "--wrench-anim-x": "-110vw",
    "--wrench-anim-y": "6vh",
    "--wrench-anim-rotation": "-18deg",
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
    "--logo-drop-y": "49.7%",
    "--logo-drop-scale": "1.08",
    "--logo-drop-target-x": "51.2%",
    "--logo-drop-target-y": "49.7%",
    "--logo-drop-target-scale": "1.08",
    "--fall-duration": "2.25",
    "--fall-drift-x": "0px",
    "--fall-camera-y": "0px",
    "--droplet-anim-y": "calc(var(--leak-y) - var(--falling-drop-y))",
    "--droplet-fall-y": "0px",
    "--droplet-opacity": "0",
    "--droplet-scale-x": "0.32",
    "--droplet-scale-y": "0.14",
    "--droplet-wobble-x": "0px",
    "--droplet-body-y": "0px",
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
    "--logo-card-bg-opacity": "0",
    "--logo-card-border-opacity": "0",
    "--logo-card-padding": "0px",
    "--logo-card-radius": "0px",
    "--logo-top": "clamp(16rem, 53dvh, 28rem)",
    "--logo-width": "clamp(16rem, min(82vw, 64dvh), 40rem)",
    "--logo-x": "0px",
    "--logo-y": "0px",
    "--logo-scale": "1",
    "--logo-opacity": "0",
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
      ref={rootRef}
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
        type="button"
        onClick={completeIntro}
        className="absolute right-4 top-4 z-30 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur transition hover:border-white/25 hover:bg-white/[0.1] hover:text-white sm:right-6 sm:top-6"
      >
        Skip
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
            className="pipe-asset-wrap pipe-assembly absolute z-10"
            style={{
              left: "var(--drop-axis-x)",
              top: "var(--leak-y)",
              width: "var(--pipe-width)",
              transform:
                "translate(-55.56%, -64.8%) translate3d(var(--pipe-react-x), var(--pipe-react-y), 0) rotate(var(--pipe-react-rotation))",
              transformOrigin: "55.56% 64.8%",
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
            data-intro-piece="leak-seep"
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
            data-intro-piece="leak-glow"
          />
          <span
            className="leak-thread pointer-events-none absolute z-20 h-9 w-2 rounded-full bg-gradient-to-b from-sky-300/75 to-sky-500/20 blur-[0.4px]"
            style={{
              left: "var(--drop-axis-x)",
              opacity: "var(--leak-thread-opacity)",
              top: "calc(var(--leak-y) + 0.1rem)",
              transform:
                "translateX(-50%) scaleY(var(--leak-thread-scale-y))",
              transformOrigin: "50% 0%",
            }}
            aria-hidden="true"
            data-intro-piece="leak-thread"
          />

          <div
            className="wrench-wrap pointer-events-none absolute"
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
                  <div
                    key={name}
                    className="grid grid-cols-[9.5rem_1fr] gap-3"
                  >
                    <span className="text-sky-300">{name}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </div>

        <div
          className="droplet-scene fall-track absolute inset-0"
          style={{
            transform: "translate3d(0, var(--fall-camera-y), 0)",
            willChange: "transform",
          }}
        >
          <div
            className="droplet-wrap falling-droplet-wrap absolute z-20 w-[clamp(2.5rem,8vw,4rem)]"
            style={{
              left: "var(--drop-axis-x)",
              top: "var(--falling-drop-y)",
              transform:
                "translateX(-50%) translate3d(var(--fall-drift-x), calc(var(--droplet-anim-y) + var(--droplet-fall-y)), 0)",
              willChange: "transform",
            }}
          >
            <div
              className="motion-streaks falling-streaks motion-streaks-wrap pointer-events-none absolute left-1/2 top-1/2 z-0 h-32 w-28"
              style={{
                opacity: "var(--streak-opacity)",
                transform:
                  "translate(-50%, -50%) translate3d(0, var(--streak-y), 0) scaleY(var(--streak-scale-y))",
                transformOrigin: "50% 50%",
                willChange: "transform, opacity",
              }}
              aria-hidden="true"
              data-intro-piece="motion-streaks"
            >
              {[
                { height: "3.5rem", left: "32%", top: "6%", rotate: "8deg" },
                { height: "5rem", left: "46%", top: "0%", rotate: "7deg" },
                { height: "4rem", left: "61%", top: "9%", rotate: "8deg" },
                { height: "2.5rem", left: "40%", top: "44%", rotate: "7deg" },
                { height: "3rem", left: "56%", top: "52%", rotate: "8deg" },
              ].map(({ height, left, rotate, top }) => (
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
              data-intro-piece="logo-contact-glow"
            />
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
              data-intro-piece="falling-droplet"
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
                data-intro-piece="droplet-tail"
              />
              <svg
                viewBox="0 0 60 80"
                className="falling-droplet-shape relative z-10 block h-auto w-full"
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
                  className="falling-droplet-body"
                  d="M30 5C20 16 15 26 15 36C15 51 21.6 63 30 63C38.4 63 45 51 45 36C45 26 40 16 30 5Z"
                  fill="url(#introDropletGradient)"
                />
                <path
                  className="falling-droplet-highlight"
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
            className="intro-logo logo-zoom-wrap absolute"
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
            data-intro-piece="intro-logo"
          >
            <div className="intro-logo-handoff-wrap relative aspect-[1320/629] w-full">
              <div
                className="intro-logo-card relative h-full w-full border shadow-[0_22px_44px_rgba(0,0,0,0.28)]"
                style={{
                  background: "rgba(229,231,235,var(--logo-card-bg-opacity))",
                  borderColor:
                    "rgba(203,213,225,var(--logo-card-border-opacity))",
                  borderRadius: "var(--logo-card-radius)",
                  boxSizing: "border-box",
                  padding: "var(--logo-card-padding)",
                }}
              >
              <span
                className="logo-mark absolute size-px -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: "var(--logo-drop-target-x)",
                  top: "var(--logo-drop-target-y)",
                }}
                aria-hidden="true"
                data-intro-piece="logo-mark"
              />
              {DEBUG_LOGO_TARGET ? (
                <span
                  className="pointer-events-none absolute z-20 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]"
                  style={{
                    left: "var(--logo-drop-target-x)",
                    top: "var(--logo-drop-target-y)",
                  }}
                  aria-hidden="true"
                  data-intro-piece="logo-drop-target"
                />
              ) : null}
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
                data-intro-piece="intro-logo-solid"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
