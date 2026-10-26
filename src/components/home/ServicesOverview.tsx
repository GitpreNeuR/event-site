"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn, pad } from "@/lib/utils";

/**
 * Editorial index of the studio's service pillars. On desktop, hovering or
 * focusing a row cross-fades the sticky image; on mobile each row shows its
 * own thumbnail, so nothing depends on hover.
 */
export function ServicesOverview({ pillars }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
      <ol className="border-t border-line lg:col-span-7">
        {pillars.map((pillar, i) => (
          <li key={pillar.href} className="border-b border-line" data-reveal>
            <Link
              href={pillar.href}
              onPointerEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group grid grid-cols-[auto_1fr_auto] items-start gap-x-5 gap-y-3 py-7 md:gap-x-8 md:py-9"
            >
              <span className="font-display pt-1 text-lg text-ochre italic">{pad(i + 1)}</span>
              <span>
                <span className={cn("type-h3 block transition-colors duration-500", active === i ? "lg:text-ink" : "lg:text-ink/55")}>
                  {pillar.title}
                </span>
                <span className="type-small mt-2 block max-w-md text-ink-soft">{pillar.description}</span>
                <span className="mt-5 block aspect-[16/10] overflow-hidden rounded-sm lg:hidden">
                  <Image src={pillar.image} alt="" width={720} height={450} sizes="90vw" className="h-full w-full object-cover" />
                </span>
              </span>
              <span
                aria-hidden="true"
                className="mt-1 grid size-11 place-items-center rounded-full border border-line transition-all duration-500 ease-expo group-hover:border-ink group-hover:bg-ink group-hover:text-ivory"
              >
                <ArrowUpRight className="size-4 transition-transform duration-500 ease-expo group-hover:rotate-45" />
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
        <div className="sticky top-[calc(var(--nav-height)+2rem)]">
          <div className="relative">
          <span aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[999px] border border-ochre/45" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] bg-muted">
            {pillars.map((pillar, i) => (
              <Image
                key={pillar.href}
                src={pillar.image}
                alt={pillar.imageAlt}
                fill
                sizes="30vw"
                className={cn(
                  "object-cover transition-[opacity,transform] duration-[900ms] ease-expo",
                  active === i ? "scale-100 opacity-100" : "scale-105 opacity-0"
                )}
              />
            ))}
            <span aria-hidden="true" className="pointer-events-none absolute inset-3.5 rounded-t-[999px] border border-ivory/55" />
            <span aria-hidden="true" className="absolute right-5 bottom-5 rounded-full bg-ivory/90 px-3 py-1.5 font-display text-sm text-ink italic backdrop-blur">
              {pad(active + 1)} <span className="text-ink-faint">/ {pad(pillars.length)}</span>
            </span>
          </div>
          </div>
          <p className="type-small mt-8 flex gap-3 text-ink-soft" aria-live="polite">
            <span aria-hidden="true" className="h-px w-8 translate-y-2.5 bg-ochre" />
            {pillars[active].caption}
          </p>
        </div>
      </div>
    </div>
  );
}
