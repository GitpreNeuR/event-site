import Image from "next/image";
import HeroAnimator from "./HeroAnimator";
import { Breadcrumbs } from "./Breadcrumbs";
import { SplitHeading } from "./SplitHeading";
import { cn } from "@/lib/utils";

/** Light editorial page header used by index and utility pages. */
import type { ReactNode } from "react";
import type { Breadcrumb } from "@/types/common";

type PageHeaderProps = {
  eyebrow?: string;
  /** Supports *asterisks* for an italic accent word. */
  title: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  imageRatio?: string;
  children?: ReactNode;
  className?: string;
} & ({ image: string; imageAlt: string } | { image?: undefined; imageAlt?: undefined });

export function PageHeader({ eyebrow, title, description, breadcrumbs, image, imageAlt, imageRatio = "aspect-[21/9]", children, className }: PageHeaderProps) {
  return (
    <HeroAnimator className={cn("pt-[calc(var(--nav-height)+2.5rem)] md:pt-[calc(var(--nav-height)+4rem)]", className)}>
      <div className="container-page">
        {breadcrumbs ? (
          <div data-hero>
            <Breadcrumbs items={breadcrumbs} />
          </div>
        ) : null}
        <div className="mt-10 grid gap-10 md:mt-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            {eyebrow ? (
              <p data-hero className="type-eyebrow flex items-center gap-3 text-ochre-deep">
                <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />
                {eyebrow}
              </p>
            ) : null}
            <SplitHeading as="h1" mode="hero" text={title} className="type-h1 mt-7 max-w-[16ch]" />
          </div>
          {description ? (
            <div className="lg:col-span-4" data-hero>
              <p className="type-lead text-ink-soft">{description}</p>
              {children}
            </div>
          ) : null}
        </div>
      </div>
      {image ? (
        <div className="container-page mt-14 md:mt-20">
          <div className={cn("relative overflow-hidden rounded-sm bg-muted", imageRatio)}>
            <div className="absolute inset-0" data-hero-media>
              <Image src={image} alt={imageAlt} fill preload loading="eager" sizes="(min-width: 1440px) 1330px, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      ) : (
        <div className="container-page mt-14 md:mt-20">
          <div className="h-px bg-line" />
        </div>
      )}
    </HeroAnimator>
  );
}
