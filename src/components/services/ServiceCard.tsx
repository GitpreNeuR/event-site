import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Image-led card linking to a service page. */
import type { Service } from "@/types/service";

interface ServiceCardProps {
  service: Service;
  className?: string;
  ratio?: string;
  sizes?: string;
  headingLevel?: "h2" | "h3";
  showSummary?: boolean;
}

export function ServiceCard({ service, className, ratio = "aspect-[4/3]", sizes = "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw", headingLevel = "h3", showSummary = true }: ServiceCardProps) {
  const Heading = headingLevel;
  return (
    <article className={cn("group", className)} data-reveal>
      <Link href={`/services/${service.slug}`} className="block">
        <div className={cn("relative overflow-hidden rounded-sm bg-muted", ratio)}>
          <Image src={service.image} alt={service.imageAlt} fill sizes={sizes} className="object-cover transition-transform duration-[1200ms] ease-expo group-hover:scale-[1.04]" />
          <span aria-hidden="true" className="pointer-events-none absolute inset-3 z-[1] rounded-[1px] border border-ivory/0 transition-colors duration-700 group-hover:border-ivory/70" />
        </div>
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <Heading className="type-h3 text-[1.55rem] transition-colors group-hover:text-ochre-deep">{service.title}</Heading>
            {showSummary ? <p className="type-small mt-2 text-ink-soft">{service.summary}</p> : null}
          </div>
          <span aria-hidden="true" className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-line transition-all duration-500 ease-expo group-hover:border-ink group-hover:bg-ink group-hover:text-ivory">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </Link>
    </article>
  );
}

/** Compact text link row for dense service directories. */
export function ServiceLinkRow({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="group flex items-center justify-between gap-4 border-b border-line py-4 transition-colors hover:text-ochre-deep">
      <span className="text-[0.98rem] font-medium">{service.title}</span>
      <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-ink-soft transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ochre-deep" />
    </Link>
  );
}
