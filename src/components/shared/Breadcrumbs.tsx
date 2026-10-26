import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

/** items: [{ label, href }] — the last item is the current page. */
import type { Breadcrumb } from "@/types/common";

interface BreadcrumbsProps {
  items: Breadcrumb[];
  className?: string;
  tone?: "dark" | "light";
}

export function Breadcrumbs({ items, className, tone = "dark" }: BreadcrumbsProps) {
  const trail = [{ label: "Home", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className={cn("type-small", className)}>
        <ol className={cn("flex flex-wrap items-center gap-x-2 gap-y-1", tone === "light" ? "text-on-night-soft" : "text-ink-soft")}>
          {trail.map((item, i) => {
            const isLast = i === trail.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className={tone === "light" ? "text-on-night" : "text-ink"}>
                    {item.label}
                  </span>
                ) : (
                  <>
                    <Link href={item.href} className="link-underline">
                      {item.label}
                    </Link>
                    <ChevronRight aria-hidden="true" className="size-3.5 opacity-60" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(trail)} />
    </>
  );
}
