import { cn } from "@/lib/utils";

/**
 * A slow CSS marquee (no JS). Content is duplicated for a seamless loop;
 * the copy is aria-hidden. It stops under prefers-reduced-motion and
 * pauses on hover.
 */
interface MarqueeProps {
  items: string[];
  className?: string;
  separator?: string;
}

export function Marquee({ items, className, separator = "✦" }: MarqueeProps) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <li key={i} className="flex items-center">
          <span className="px-6 md:px-10">{item}</span>
          <span aria-hidden="true" className="text-[0.45em] text-ochre">
            {separator}
          </span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className={cn("group relative flex overflow-hidden", className)}>
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
