import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

/** Arch monogram: an aangan (courtyard) doorway with a single diya flame. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 40" aria-hidden="true" className={cn("h-8 w-auto", className)} fill="none">
      <path d="M3 39V17C3 9.268 8.82 3 16 3s13 6.268 13 14v22" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9.5 39V19.5c0-3.866 2.91-7 6.5-7s6.5 3.134 6.5 7V39" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
      <path d="M16 23.5c1.6 1.7 2.2 3 2.2 4.1a2.2 2.2 0 1 1-4.4 0c0-1.1.6-2.4 2.2-4.1Z" fill="var(--ochre)" />
    </svg>
  );
}

export function Logo({ className, onClick, showSuffix = true }: { className?: string; onClick?: () => void; showSuffix?: boolean }) {
  return (
    <Link href="/" onClick={onClick} className={cn("group inline-flex items-center gap-3", className)} aria-label={`${site.name} — home`}>
      <LogoMark className="transition-transform duration-700 ease-expo group-hover:-translate-y-0.5" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.75rem] tracking-[-0.01em]">{site.name}</span>
        {showSuffix ? (
          <span className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.3em] opacity-70">{site.wordmarkSuffix}</span>
        ) : null}
      </span>
    </Link>
  );
}
