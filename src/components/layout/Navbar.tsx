"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { mainNav, primaryCta } from "@/data/navigation";
import { ButtonLink } from "@/components/shared/Button";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { ServicesMegaMenu } from "./ServicesMegaMenu";
import { MobileNavigation } from "./MobileNavigation";

// Routes that open with a full-bleed dark image, where the bar starts transparent.
const overlayRoutes = [/^\/$/, /^\/locations(\/[^/]+)?$/, /^\/services\/[^/]+$/, /^\/experiences\/[^/]+$/];

const isActive = (pathname, href) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));

export function Navbar() {
  const pathname = usePathname();
  const overlay = overlayRoutes.some((pattern) => pattern.test(pathname));
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const triggerRef = useRef(null);
  const closeTimer = useRef(null);
  const hoverOpenedAt = useRef(0);
  const menuId = "services-mega-menu";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event) => {
      if (event.key === "Escape") {
        closeMenu();
        triggerRef.current?.focus();
      }
    };
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) closeMenu();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen, closeMenu]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  // Hover intent for mouse users only; touch and keyboard use the button.
  const hoverOpen = (event) => {
    if (event.pointerType !== "mouse") return;
    window.clearTimeout(closeTimer.current);
    if (!menuOpen) hoverOpenedAt.current = Date.now();
    setMenuOpen(true);
  };
  // A mouse click right after hover-open should not immediately close the menu.
  const toggleMenu = () => {
    if (Date.now() - hoverOpenedAt.current < 600) {
      setMenuOpen(true);
      return;
    }
    setMenuOpen((open) => !open);
  };
  const hoverClose = (event) => {
    if (event.pointerType !== "mouse") return;
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMenuOpen(false), 180);
  };
  const onBlur = (event) => {
    if (menuOpen && !headerRef.current?.contains(event.relatedTarget)) closeMenu();
  };

  const solid = !overlay || scrolled || menuOpen;

  return (
    <header ref={headerRef} onBlur={onBlur} className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b transition-[background-color,border-color,color,backdrop-filter] duration-500 ease-expo",
          solid ? "border-line bg-ivory/92 text-ink backdrop-blur-md" : "on-dark border-transparent bg-transparent text-on-night"
        )}
      >
        <div className="container-page flex h-(--nav-height) items-center justify-between gap-6">
          <Logo onClick={closeMenu} />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1 xl:gap-2">
              {mainNav.map((item) => {
                const active = isActive(pathname, item.href);
                if (item.hasMegaMenu) {
                  return (
                    <li key={item.href} onPointerEnter={hoverOpen} onPointerLeave={hoverClose}>
                      <button
                        ref={triggerRef}
                        type="button"
                        aria-expanded={menuOpen}
                        aria-controls={menuId}
                        onClick={toggleMenu}
                        className={cn(
                          "group/nav relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.82rem] font-medium tracking-[0.02em] transition-colors",
                          active && "font-semibold"
                        )}
                      >
                        {item.label}
                        <ChevronDown aria-hidden="true" className={cn("size-3.5 transition-transform duration-500 ease-expo", menuOpen && "rotate-180")} />
                        <NavIndicator active={active || menuOpen} />
                      </button>
                    </li>
                  );
                }
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      className={cn("group/nav relative block rounded-full px-3.5 py-2 text-[0.82rem] font-medium tracking-[0.02em]", active && "font-semibold")}
                    >
                      {item.label}
                      <NavIndicator active={active} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <ButtonLink href={primaryCta.href} onClick={closeMenu} size="sm" variant={solid ? "primary" : "light"} className="hidden md:inline-flex">
              {primaryCta.label}
            </ButtonLink>
            <MobileNavigation pathname={pathname} />
          </div>
        </div>
      </div>

      <ServicesMegaMenu
        id={menuId}
        open={menuOpen}
        pathname={pathname}
        onNavigate={closeMenu}
        onPointerEnter={hoverOpen}
        onPointerLeave={hoverClose}
      />
    </header>
  );
}

function NavIndicator({ active }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-current transition-transform duration-500 ease-expo",
        active ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"
      )}
    />
  );
}
