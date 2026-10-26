"use client";

import { useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP, media, motion } from "@/lib/animations";

/**
 * One scoped animation controller per page. Server-rendered children opt in
 * with data attributes, so pages stay Server Components:
 *
 *  [data-split]          heading whose [data-word] spans rise through a mask
 *  [data-reveal]         fades up when it enters the viewport (batched)
 *  [data-reveal-image]   clip-path wipe with a gentle scale on its <img>
 *  [data-line]           hairline that draws from the left
 *  [data-parallax="n"]   subtle scrubbed drift (desktop only, n = yPercent)
 *
 * Everything is created inside useGSAP's context, so StrictMode double
 * mounting and route changes revert tweens and ScrollTriggers cleanly.
 */
export default function PageAnimations({ children, className }: { children: ReactNode; className?: string }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;
      const q = (selector: string) => gsap.utils.toArray<HTMLElement>(selector, root);
      const mm = gsap.matchMedia();

      mm.add(media.motionOk, () => {
        q("[data-split]").forEach((heading) => {
          gsap.fromTo(
            heading.querySelectorAll("[data-word]"),
            { yPercent: 110, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              duration: 1.25,
              stagger: 0.055,
              scrollTrigger: { trigger: heading, start: "top 88%", once: true },
            }
          );
        });

        const reveals = q("[data-reveal]");
        if (reveals.length) {
          gsap.set(reveals, { opacity: 0, y: 36 });
          ScrollTrigger.batch(reveals, {
            start: "top 90%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, { opacity: 1, y: 0, duration: 1.1, stagger: motion.stagger, overwrite: true }),
          });
        }

        q("[data-reveal-image]").forEach((frame) => {
          const img = frame.querySelector("img");
          const tl = gsap.timeline({ scrollTrigger: { trigger: frame, start: "top 85%", once: true } });
          tl.fromTo(frame, { clipPath: "inset(18% 0% 18% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut" });
          if (img) tl.fromTo(img, { scale: 1.18 }, { scale: 1, duration: 1.8, ease: "expo.out" }, 0);
        });

        q("[data-line]").forEach((line) => {
          gsap.fromTo(
            line,
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 1.4, ease: "expo.inOut", scrollTrigger: { trigger: line, start: "top 92%", once: true } }
          );
        });
      });

      mm.add(media.desktopMotion, () => {
        q("[data-parallax]").forEach((el) => {
          const amount = Number(el.dataset.parallax) || 8;
          gsap.fromTo(
            el,
            { yPercent: -amount },
            {
              yPercent: amount,
              ease: "none",
              scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
            }
          );
        });
      });

      // Fonts and images can shift layout after first measurement.
      const refresh = () => ScrollTrigger.refresh();
      document.fonts?.ready.then(refresh);
      window.addEventListener("load", refresh, { once: true });
      return () => window.removeEventListener("load", refresh);
    },
    { scope }
  );

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
