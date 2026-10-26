"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { gsap, useGSAP, media } from "@/lib/animations";
import { SampleBadge } from "@/components/shared/SampleBadge";
import { Eyebrow } from "@/components/shared/SectionHeading";
import { pad } from "@/lib/utils";

/** One quote at a time with previous/next controls. No autoplay. */
export function Testimonials({ items }) {
  const [index, setIndex] = useState(0);
  const quoteRef = useRef(null);
  const current = items[index];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(media.motionOk, () => {
        gsap.fromTo(quoteRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.9, ease: "expo.out" });
      });
    },
    { dependencies: [index], scope: quoteRef }
  );

  const go = (delta) => setIndex((i) => (i + delta + items.length) % items.length);

  return (
    <section className="section-y" aria-roledescription="carousel" aria-label="Client words (sample content)">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Eyebrow index="08">Kind words</Eyebrow>
            <SampleBadge className="mt-6 text-ink-soft">Sample testimonials</SampleBadge>
            <p className="type-small mt-4 max-w-56 text-ink-soft">
              Placeholder quotes that show the format. They will be replaced with genuine client feedback.
            </p>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <figure ref={quoteRef} aria-live="polite" className="min-h-[18rem] md:min-h-[16rem]">
              <span aria-hidden="true" className="font-display block text-[7rem] leading-[0.5] text-ochre/60">
                “
              </span>
              <blockquote className="font-display mt-4 text-[clamp(1.7rem,1.2rem+1.8vw,3rem)] leading-[1.15] text-pretty">
                {current.quote}
              </blockquote>
              <figcaption className="mt-8 flex flex-wrap items-center gap-3 text-[0.9rem] text-ink-soft">
                <span className="font-semibold text-ink">{current.attribution}</span>
                <span aria-hidden="true">·</span>
                <span>{current.context}</span>
              </figcaption>
            </figure>
            <div className="mt-10 flex items-center gap-4 border-t border-line pt-6">
              <span className="font-display text-lg italic text-ink-soft">
                {pad(index + 1)} <span className="text-ink-faint">/ {pad(items.length)}</span>
              </span>
              <div className="ml-auto flex gap-2">
                <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="grid size-12 place-items-center rounded-full border border-line transition-colors hover:bg-ink hover:text-ivory">
                  <ArrowLeft className="size-4" aria-hidden="true" />
                </button>
                <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="grid size-12 place-items-center rounded-full border border-line transition-colors hover:bg-ink hover:text-ivory">
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
