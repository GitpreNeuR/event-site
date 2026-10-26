import Link from "next/link";
import { Building2, Cake, MapPin, Palette, Sparkles } from "lucide-react";
import { resolveMenuHref } from "@/data/navigation";
import { cn } from "@/lib/utils";

const icons = { Sparkles, Palette, Cake, Building2, MapPin };

export function ServiceLink({ item, onNavigate, active }) {
  return (
    <Link
      href={resolveMenuHref(item)}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group/link relative -mx-2 flex items-start rounded-md px-2 py-1.5 text-[0.84rem] leading-snug text-ink-soft transition-colors duration-300 hover:bg-sand/70 hover:text-ink focus-visible:bg-sand/70 focus-visible:text-ink",
        active && "text-ochre-deep"
      )}
    >
      <span className="transition-transform duration-500 ease-expo group-hover/link:translate-x-1">{item.label}</span>
    </Link>
  );
}

export function MegaMenuColumn({ column, onNavigate, pathname }) {
  const Icon = icons[column.icon] ?? Sparkles;
  const headingId = `mega-${column.id}`;
  return (
    <div className="flex min-w-0 flex-col px-5 py-7 xl:px-6" data-mega-col>
      <div className="mb-4 flex items-center gap-2.5">
        <span aria-hidden="true" className="grid size-7 place-items-center rounded-full border border-ochre/40 text-ochre-deep">
          <Icon className="size-3.5" strokeWidth={1.75} />
        </span>
        <h3 id={headingId} className="type-eyebrow text-ink">
          {column.heading}
        </h3>
      </div>
      <ul aria-labelledby={headingId} className={cn(column.compact ? "grid grid-cols-2 gap-x-3" : "flex flex-col")}>
        {column.items.map((item) => (
          <li key={item.label}>
            <ServiceLink item={item} onNavigate={onNavigate} active={pathname === resolveMenuHref(item)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
