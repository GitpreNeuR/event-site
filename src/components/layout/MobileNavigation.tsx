"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { mainNav, primaryCta } from "@/data/navigation";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/shared/Button";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { MobileServicesAccordion } from "./MobileServicesAccordion";

/** Full-height drawer for < lg. Radix Dialog handles focus trap, Escape and scroll lock. */
export function MobileNavigation({ pathname }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-current/25 transition-colors hover:bg-current/10 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" showCloseButton={false} className="gap-0 border-l border-line bg-ivory p-0 text-ink data-[side=right]:w-full data-[side=right]:sm:max-w-md">
        <div className="flex h-(--nav-height) shrink-0 items-center justify-between border-b border-line px-5">
          <Logo onClick={close} />
          <SheetClose className="grid size-11 place-items-center rounded-full border border-line hover:bg-sand" aria-label="Close menu">
            <X className="size-5" aria-hidden="true" />
          </SheetClose>
        </div>
        <SheetTitle className="sr-only">Site menu</SheetTitle>
        <SheetDescription className="sr-only">Navigate to pages and services</SheetDescription>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto overscroll-contain px-5 pb-10">
          <ul className="divide-y divide-line">
            {mainNav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href} className="py-1">
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={cn("flex items-baseline justify-between py-3 font-display text-[2rem] leading-none", active && "text-ochre-deep")}
                  >
                    {item.label}
                  </Link>
                  {item.hasMegaMenu ? <MobileServicesAccordion onNavigate={close} pathname={pathname} /> : null}
                </li>
              );
            })}
          </ul>

          <div className="mt-8 space-y-6">
            <ButtonLink href={primaryCta.href} onClick={close} className="w-full justify-between">
              {primaryCta.label}
            </ButtonLink>
            <div className="type-small text-ink-soft">
              <p>{site.contact.hours}</p>
              <a href={`mailto:${site.contact.email}`} className="link-underline mt-1 inline-block text-ink">
                {site.contact.email}
              </a>
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
