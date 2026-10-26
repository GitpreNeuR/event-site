import { Fragment, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Splits "Some *accent* text" into [{ text, accent }] segments. */
export type HeadingTag = "h1" | "h2" | "h3" | "p";

interface Segment {
  text: string;
  accent: boolean;
}

function parseAccent(text: string): Segment[] {
  return text
    .split(/(\*[^*]+\*)/g)
    .filter(Boolean)
    .map((part) =>
      part.startsWith("*") && part.endsWith("*")
        ? { text: part.slice(1, -1), accent: true }
        : { text: part, accent: false }
    );
}

export function plainText(text = ""): string {
  return text.replace(/\*/g, "");
}

/** Renders inline text with *accent* words in italic ochre. No splitting. */
export function AccentText({ text }: { text: string }) {
  return parseAccent(text).map((segment, i) =>
    segment.accent ? (
      <em key={i} className="accent">
        {segment.text}
      </em>
    ) : (
      <span key={i}>{segment.text}</span>
    )
  );
}

/**
 * Heading whose words can be revealed through a mask by PageAnimations /
 * HeroAnimator. The words stay real text (one copy, crawlable and read
 * normally by screen readers); only their transforms are animated.
 *
 * `mode="split"` → scroll reveal (data-split), `mode="hero"` → hero timeline.
 */
type SplitHeadingProps = Omit<ComponentProps<"h2">, "children"> & {
  as?: HeadingTag;
  /** Supports *asterisks* for an italic accent word. */
  text: string;
  mode?: "split" | "hero";
};

export function SplitHeading({ as: Tag = "h2", text, className, mode = "split", ...props }: SplitHeadingProps) {
  const words = parseAccent(text).flatMap((segment) =>
    segment.text
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => ({ word, accent: segment.accent }))
  );
  const dataAttr = mode === "hero" ? { "data-hero-title": "" } : { "data-split": "" };

  return (
    <Tag className={cn("text-balance", className)} {...dataAttr} {...props}>
      {words.map(({ word, accent }, i) => (
        <Fragment key={i}>
          <span className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-top">
            <span data-word="" className={cn("inline-block will-change-transform", accent && "italic text-ochre-deep in-[.on-dark]:text-ochre-soft")}>
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
