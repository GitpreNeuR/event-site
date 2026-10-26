"use client";

import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP, media } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { ExperienceCard } from "./ExperienceCard";
import { CategoryFilter } from "./CategoryFilter";

// Alternating 7/5 then 5/7 columns keeps rows balanced whatever the filter.
const spanPattern = [7, 5, 5, 7];

/** Filterable, asymmetric portfolio grid. Filtering is instant; motion is a bonus. */
export function ExperienceGrid({ experiences, categories }) {
  const [active, setActive] = useState("All");
  const gridRef = useRef(null);
  const visible = active === "All" ? experiences : experiences.filter((e) => e.category === active);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(media.motionOk, () => {
        gsap.fromTo(gridRef.current.children, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.07, ease: "expo.out" });
      });
      ScrollTrigger.refresh();
    },
    { dependencies: [active], scope: gridRef, revertOnUpdate: true }
  );

  const counts = Object.fromEntries(categories.map((c) => [c, c === "All" ? experiences.length : experiences.filter((e) => e.category === c).length]));

  return (
    <>
      <CategoryFilter categories={categories.filter((c) => counts[c] > 0)} active={active} onChange={setActive} counts={counts} />
      <p className="sr-only" role="status" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "experience" : "experiences"}
        {active === "All" ? "" : ` in ${active}`}
      </p>
      <div ref={gridRef} className="mt-14 grid gap-x-6 gap-y-16 md:grid-cols-12">
        {visible.map((experience, i) => {
          const wide = spanPattern[i % 4] === 7;
          return (
            <div key={experience.slug} className={cn(wide ? "md:col-span-7" : "md:col-span-5", i % 2 === 1 && "md:mt-24")}>
              <ExperienceCard
                experience={experience}
                ratio={wide ? "aspect-[4/3]" : "aspect-[4/5]"}
                headingLevel="h2"
                sizes={wide ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 768px) 42vw, 100vw"}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
