import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Circular text seal that turns slowly (CSS only; stops under reduced motion).
 * Decorative: hidden from assistive technology.
 */
export function RotatingBadge({ text, className }: { text: string; className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <div aria-hidden="true" className={cn("relative grid size-28 place-items-center rounded-full md:size-32", className)}>
      <svg viewBox="0 0 120 120" className="absolute inset-0 size-full animate-[spin-slow_28s_linear_infinite] motion-reduce:animate-none">
        <defs>
          <path id={id} d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <text className="fill-current text-[9.5px] font-semibold uppercase">
          {/* Stretch the spacing so the phrase wraps the circle exactly once. */}
          <textPath href={`#${id}`} textLength="286" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <svg viewBox="0 0 32 40" className="h-8 w-auto" fill="none">
        <path d="M3 39V17C3 9.268 8.82 3 16 3s13 6.268 13 14v22" stroke="currentColor" strokeWidth="1.6" />
        <path d="M16 23.5c1.6 1.7 2.2 3 2.2 4.1a2.2 2.2 0 1 1-4.4 0c0-1.1.6-2.4 2.2-4.1Z" fill="var(--ochre)" />
      </svg>
    </div>
  );
}
