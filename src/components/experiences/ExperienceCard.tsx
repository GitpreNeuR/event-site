import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { experienceLabel } from "@/data/experiences";
import { cn } from "@/lib/utils";

import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
  ratio?: string;
  sizes?: string;
  tone?: "dark" | "light";
  headingLevel?: "h2" | "h3";
}

export function ExperienceCard({ experience, className, ratio = "aspect-[4/5]", sizes = "(min-width: 768px) 50vw, 100vw", tone = "dark", headingLevel = "h3" }: ExperienceCardProps) {
  const Heading = headingLevel;
  const light = tone === "light";
  return (
    <article className={cn("group", className)} data-reveal>
      <Link href={`/experiences/${experience.slug}`} className="block">
        <div className={cn("relative overflow-hidden rounded-sm bg-muted", ratio)}>
          <Image
            src={experience.cover}
            alt={experience.coverAlt}
            fill
            sizes={sizes}
            className="object-cover transition-transform duration-[1400ms] ease-expo group-hover:scale-[1.04]"
          />
          <span aria-hidden="true" className="pointer-events-none absolute inset-3 z-[1] rounded-[1px] border border-ivory/0 transition-colors duration-700 group-hover:border-ivory/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/55 via-transparent to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />
          <span className="absolute top-4 left-4 rounded-full bg-ivory/90 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink backdrop-blur">
            {experienceLabel}
          </span>
          <span aria-hidden="true" className="absolute right-4 bottom-4 grid size-12 translate-y-2 place-items-center rounded-full bg-ivory text-ink opacity-0 transition-all duration-500 ease-expo group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:opacity-100">
            <ArrowUpRight className="size-5" />
          </span>
        </div>
        <div className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <p className={cn("type-eyebrow", light ? "text-ochre-soft" : "text-ochre-deep")}>{experience.category}</p>
          <p className={cn("type-small", light ? "text-on-night-soft" : "text-ink-soft")}>{experience.setting}</p>
        </div>
        <Heading className={cn("type-h3 mt-2 transition-colors", light ? "group-hover:text-ochre-soft" : "group-hover:text-ochre-deep")}>{experience.title}</Heading>
        <p className={cn("type-small mt-2 max-w-lg", light ? "text-on-night-soft" : "text-ink-soft")}>{experience.excerpt}</p>
      </Link>
    </article>
  );
}
