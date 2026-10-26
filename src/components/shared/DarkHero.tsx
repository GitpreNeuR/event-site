import Image from "next/image";
import HeroAnimator from "./HeroAnimator";
import { Breadcrumbs } from "./Breadcrumbs";
import { SplitHeading } from "./SplitHeading";
import { cn } from "@/lib/utils";

/** Full-bleed image hero for detail pages (service, location, experience). */
import type { ReactNode } from "react";
import type { Breadcrumb } from "@/types/common";

interface DarkHeroProps {
  eyebrow?: string;
  /** Supports *asterisks* for an italic accent word. */
  title: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  image: string;
  imageAlt: string;
  meta?: { label: string; value: string }[];
  actions?: ReactNode;
  className?: string;
}

export function DarkHero({ eyebrow, title, description, breadcrumbs, image, imageAlt, meta, actions, className }: DarkHeroProps) {
  return (
    <HeroAnimator className={cn("on-dark grain relative isolate flex min-h-[86svh] flex-col overflow-hidden bg-night text-on-night", className)}>
      <div className="absolute inset-0 -z-10" data-hero-media>
        <Image src={image} alt={imageAlt} fill preload loading="eager" sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/60 to-night/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night/60 to-transparent" />

      <div className="container-page flex flex-1 flex-col pt-[calc(var(--nav-height)+1.75rem)] pb-12 md:pb-16">
        {breadcrumbs ? (
          <div data-hero>
            <Breadcrumbs items={breadcrumbs} tone="light" />
          </div>
        ) : null}
        <div className="mt-auto grid gap-10 pt-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            {eyebrow ? (
              <p data-hero className="type-eyebrow flex items-center gap-3 text-ochre-soft">
                <span aria-hidden="true" className="h-px w-8 bg-current" />
                {eyebrow}
              </p>
            ) : null}
            <SplitHeading as="h1" mode="hero" text={title} className="type-h1 mt-6 max-w-[18ch]" />
          </div>
          <div className="lg:col-span-4" data-hero>
            {description ? <p className="type-lead text-on-night-soft">{description}</p> : null}
            {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
          </div>
        </div>
        {meta ? (
          <dl data-hero className="mt-12 grid grid-cols-2 gap-6 border-t border-on-night/15 pt-6 md:grid-cols-4">
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="type-eyebrow text-on-night-soft">{item.label}</dt>
                <dd className="mt-2 text-[0.95rem] text-on-night">{item.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </HeroAnimator>
  );
}
