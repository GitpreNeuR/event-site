"use client";

import { useMediaQuery } from "./useMediaQuery";

/** True when the visitor has asked the OS to reduce motion. */
export function useReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
