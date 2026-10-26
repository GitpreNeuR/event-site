"use client";

import { cn } from "@/lib/utils";

/** Toggle-button filter group (aria-pressed), keyboard accessible by default. */
export function CategoryFilter({ categories, active, onChange, counts }) {
  return (
    <div role="group" aria-label="Filter experiences by category" className="flex flex-wrap gap-2.5">
      {categories.map((category) => {
        const pressed = category === active;
        return (
          <button
            key={category}
            type="button"
            aria-pressed={pressed}
            onClick={() => onChange(category)}
            className={cn(
              "inline-flex h-11 items-center gap-2 rounded-full border px-5 text-[0.82rem] font-medium transition-colors duration-300",
              pressed ? "border-ink bg-ink text-ivory" : "border-line text-ink hover:border-ink"
            )}
          >
            {category}
            <span className={cn("text-[0.72rem]", pressed ? "text-ivory/70" : "text-ink-soft")}>{counts[category]}</span>
          </button>
        );
      })}
    </div>
  );
}
