"use client";

import { useRef, type ComponentProps } from "react";
import { gsap, useGSAP, media } from "@/lib/animations";

/**
 * Entrance sequence for page heroes. Children mark elements with:
 *   [data-hero-media]  image wrapper (scales down, never hidden: keeps LCP fast)
 *   [data-hero-title]  SplitHeading mode="hero"
 *   [data-hero]        other elements, revealed in DOM order
 * Total sequence is ~1.4s and content is readable within the first 0.6s.
 */
type HeroAnimatorProps = ComponentProps<"section"> & { as?: "section" | "header" };

export default function HeroAnimator({ children, className, as: Tag = "section", ...props }: HeroAnimatorProps) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(media.motionOk, () => {
        const root = scope.current;
        if (!root) return;
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        const mediaEls = root.querySelectorAll("[data-hero-media]");
        const words = root.querySelectorAll("[data-hero-title] [data-word]");
        const items = root.querySelectorAll("[data-hero]");

        if (mediaEls.length) tl.fromTo(mediaEls, { scale: 1.08 }, { scale: 1, duration: 2.2, ease: "expo.out" }, 0);
        if (words.length) tl.fromTo(words, { yPercent: 115, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1.2, stagger: 0.06 }, 0.1);
        if (items.length) tl.fromTo(items, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.09 }, 0.25);
      });
    },
    { scope }
  );

  return (
    <Tag ref={scope} className={className} {...props}>
      {children}
    </Tag>
  );
}
