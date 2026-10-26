import { cn } from "@/lib/utils";
import { SplitHeading } from "./SplitHeading";

import type { ReactNode } from "react";
import type { HeadingTag } from "./SplitHeading";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  /** Optional section number, e.g. "01". */
  index?: string;
}

export function Eyebrow({ children, className, index }: EyebrowProps) {
  return (
    <p className={cn("type-eyebrow flex items-center gap-3 text-ochre-deep in-[.on-dark]:text-ochre-soft", className)}>
      {index ? <span className="font-display text-base tracking-normal normal-case italic">{index}</span> : null}
      <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />
      <span>{children}</span>
    </p>
  );
}

/**
 * Standard section intro: eyebrow, split heading, optional lead copy.
 * `align="split"` places the copy in a second column on large screens.
 */
interface SectionHeadingProps {
  eyebrow?: string;
  index?: string;
  /** Supports *asterisks* for an italic accent word. */
  title: string;
  description?: string;
  as?: HeadingTag;
  align?: "left" | "center" | "split";
  className?: string;
  titleClassName?: string;
  children?: ReactNode;
}

export function SectionHeading({ eyebrow, index, title, description, as = "h2", align = "left", className, titleClassName, children }: SectionHeadingProps) {
  const isSplit = align === "split";
  return (
    <div
      className={cn(
        isSplit ? "grid gap-8 lg:grid-cols-12 lg:items-end" : "max-w-3xl",
        align === "center" && "mx-auto text-center [&_p.type-eyebrow]:justify-center",
        className
      )}
    >
      <div className={cn(isSplit && "lg:col-span-7")}>
        {eyebrow ? <Eyebrow index={index}>{eyebrow}</Eyebrow> : null}
        <SplitHeading as={as} text={title} className={cn("type-h2 mt-6", titleClassName)} />
      </div>
      {description || children ? (
        <div className={cn(isSplit ? "lg:col-span-4 lg:col-start-9" : "mt-6")} data-reveal>
          {description ? <p className="type-lead text-ink-soft in-[.on-dark]:text-on-night-soft">{description}</p> : null}
          {children}
        </div>
      ) : null}
    </div>
  );
}
