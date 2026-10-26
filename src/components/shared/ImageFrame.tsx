import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type FrameShape = "rect" | "arch" | "soft" | "circle";

const shapeClass: Record<FrameShape, string> = {
  rect: "rounded-[2px]",
  arch: "rounded-t-[999px] rounded-b-[2px]",
  soft: "rounded-[1.25rem]",
  circle: "rounded-full",
};

interface ImageFrameProps {
  src: string;
  alt: string;
  /** Tailwind aspect (or positioning) class. */
  ratio?: string;
  sizes?: string;
  /** Classes for the image frame itself (position, width, borders). */
  className?: string;
  imageClassName?: string;
  shape?: FrameShape;
  /** Thin inset hairline, like a photograph in a mount. */
  mount?: boolean;
  /** Offset outline drawn behind the frame. Wraps the frame in a <figure>. */
  outline?: boolean;
  /** Caption below the frame. Wraps the frame in a <figure>. */
  caption?: string;
  /** Small numeral shown before the caption, e.g. "01". */
  index?: string;
  /** Classes for the outer <figure> when `outline` or `caption` is used. */
  wrapperClassName?: string;
  reveal?: boolean;
  /** Drift amount in yPercent, e.g. "6". Desktop only. */
  parallax?: string;
  preload?: boolean;
  children?: ReactNode;
}

/**
 * Consistently cropped image with optional shape, mount line, offset outline,
 * caption, scroll reveal and parallax.
 */
export function ImageFrame({
  src,
  alt,
  ratio = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
  imageClassName,
  shape = "rect",
  mount = false,
  outline = false,
  caption,
  index,
  wrapperClassName,
  reveal = true,
  parallax,
  preload = false,
  children,
}: ImageFrameProps) {
  const radius = shapeClass[shape];
  const frame = (
    <div className={cn("relative overflow-hidden bg-muted", radius, ratio, className)} data-reveal-image={reveal ? "" : undefined}>
      <div className={cn("absolute inset-0", parallax && "-inset-y-[10%]")} data-parallax={parallax || undefined}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
          loading={preload ? "eager" : "lazy"}
          className={cn("object-cover", imageClassName)}
        />
      </div>
      {mount ? <span aria-hidden="true" className={cn("pointer-events-none absolute inset-2.5 border border-ivory/55 md:inset-3.5", radius)} /> : null}
      {children}
    </div>
  );

  if (!outline && !caption) return frame;

  return (
    <figure className={cn("relative", wrapperClassName)}>
      <div className="relative">
        {outline ? (
          <span aria-hidden="true" className={cn("pointer-events-none absolute inset-0 translate-x-3 translate-y-3 border border-ochre/45 md:translate-x-5 md:translate-y-5", radius)} />
        ) : null}
        {frame}
      </div>
      {caption ? (
        <figcaption className="type-small relative mt-6 flex gap-3 text-ink-soft in-[.on-dark]:text-on-night-soft md:mt-6">
          {index ? <span className="font-display text-base leading-none text-ochre-deep italic in-[.on-dark]:text-ochre-soft">{index}</span> : null}
          <span>{caption}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
