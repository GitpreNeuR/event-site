import Link from "next/link";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

/** Pill links to area landing pages. */
import type { MumbaiArea } from "@/types/location";

export function LocationLinks({ areas, className, tone = "dark" }: { areas: MumbaiArea[]; className?: string; tone?: "dark" | "light" }) {
  return (
    <ul className={cn("flex flex-wrap gap-2.5", className)}>
      {areas.map((area) => (
        <li key={area.slug}>
          <Link
            href={`/locations/${area.slug}`}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.85rem] transition-colors duration-300",
              tone === "light" ? "border-night-line text-on-night hover:bg-on-night hover:text-ink" : "border-line text-ink hover:border-ink hover:bg-ink hover:text-ivory"
            )}
          >
            <MapPin aria-hidden="true" className="size-3.5 opacity-60" />
            {area.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
