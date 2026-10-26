"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register once, on the client only.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  gsap.defaults({ ease: "expo.out", duration: 1.1 });
}

export const motion = {
  ease: "expo.out",
  easeInOut: "power3.inOut",
  stagger: 0.08,
  start: "top 85%",
};

/** Media queries used with gsap.matchMedia(). */
export const media = {
  motionOk: "(prefers-reduced-motion: no-preference)",
  desktopMotion: "(prefers-reduced-motion: no-preference) and (min-width: 1024px)",
};

export { gsap, ScrollTrigger, useGSAP };
