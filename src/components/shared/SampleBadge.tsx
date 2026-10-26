import { cn } from "@/lib/utils";

/** Small label marking illustrative / sample content. */
import type { ReactNode } from "react";

export function SampleBadge({ children = "Sample content", className }: { children?: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border border-current/25 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em]", className)}>
      <span aria-hidden="true" className="size-1.5 rounded-full bg-ochre" />
      {children}
    </span>
  );
}
