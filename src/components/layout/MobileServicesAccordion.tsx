"use client";

import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { ChevronDown } from "lucide-react";
import { megaMenu, megaMenuFooter, resolveMenuHref } from "@/data/navigation";
import { cn } from "@/lib/utils";

const sections = [
  ...megaMenu,
  { id: "studio", heading: "Studio Services", items: [...megaMenuFooter, { href: "/services", label: "View all services" }] },
];

export function MobileServicesAccordion({ onNavigate, pathname }) {
  return (
    <Accordion type="single" collapsible className="mt-1">
      {sections.map((section) => (
        <AccordionItem key={section.id} value={section.id} className="border-b border-line/70 last:border-b-0">
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="group/m flex flex-1 items-center justify-between py-3.5 text-left text-[0.95rem] font-medium text-ink outline-none focus-visible:outline-2">
              {section.heading}
              <ChevronDown aria-hidden="true" className="size-4 text-ink-soft transition-transform duration-300 group-data-[state=open]/m:rotate-180" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionContent className="pb-4">
            <ul className={cn("grid gap-x-4", section.compact ? "grid-cols-2" : "grid-cols-1")}>
              {section.items.map((item) => {
                const href = resolveMenuHref(item);
                return (
                  <li key={item.label}>
                    <Link
                      href={href}
                      onClick={onNavigate}
                      aria-current={pathname === href ? "page" : undefined}
                      className="block py-2 text-[0.9rem] text-ink-soft no-underline! hover:text-ink aria-[current=page]:text-ochre-deep"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
