"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { megaMenu, megaMenuFooter, resolveMenuHref } from "@/data/navigation";
import { gsap, useGSAP, media } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { MegaMenuColumn } from "./MegaMenuColumn";

/**
 * Desktop services mega menu. Always rendered (links stay crawlable) but
 * `inert` + visually hidden while closed so it is skipped by keyboard and AT.
 */
export function ServicesMegaMenu({ id, open, onNavigate, onPointerEnter, onPointerLeave, pathname }) {
  const panel = useRef(null);

  useGSAP(
    () => {
      if (!open) return;
      const mm = gsap.matchMedia();
      mm.add(media.motionOk, () => {
        gsap.fromTo(
          panel.current.querySelectorAll("[data-mega-col]"),
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.045, ease: "expo.out" }
        );
      });
    },
    { scope: panel, dependencies: [open] }
  );

  return (
    <div
      id={id}
      ref={panel}
      inert={!open}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      className={cn(
        "absolute inset-x-0 top-full hidden pt-2 transition-[opacity,transform,visibility] duration-500 ease-expo lg:block",
        open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
      )}
    >
      <div className="container-page">
        <div className="max-h-[calc(100dvh-var(--nav-height)-1.5rem)] overflow-y-auto rounded-xl border border-line bg-paper text-ink shadow-[0_30px_80px_-30px_rgba(28,24,20,0.35)]">
          <div className="grid grid-cols-[1.2fr_1fr_0.95fr_1.1fr_1.3fr] divide-x divide-line">
            {megaMenu.map((column) => (
              <MegaMenuColumn key={column.id} column={column} onNavigate={onNavigate} pathname={pathname} />
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line bg-sand/50 px-6 py-4">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="type-eyebrow text-ink-soft">Studio services</span>
              {megaMenuFooter.map((item) => (
                <Link key={item.slug} href={resolveMenuHref(item)} onClick={onNavigate} className="link-underline text-[0.84rem] text-ink">
                  {item.label}
                </Link>
              ))}
            </div>
            <Link href="/services" onClick={onNavigate} className="group/all inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-ink hover:text-ochre-deep">
              View all services
              <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-500 ease-expo group-hover/all:-translate-y-0.5 group-hover/all:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
