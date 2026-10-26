"use client";

import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { Plus } from "lucide-react";
import { ScrollTrigger } from "@/lib/animations";
import { cn } from "@/lib/utils";

/**
 * Editorial FAQ accordion built on shadcn/ui (Radix) for keyboard and
 * screen-reader support. Refreshes ScrollTrigger after height changes.
 */
import type { FaqItem } from "@/types/common";

interface FaqListProps {
  items: FaqItem[];
  className?: string;
  idPrefix?: string;
  tone?: "dark" | "light";
}

export function FaqList({ items, className, idPrefix = "faq", tone = "dark" }: FaqListProps) {
  const onValueChange = () => {
    // Wait for the open/close animation before re-measuring triggers.
    window.setTimeout(() => ScrollTrigger.refresh(), 320);
  };
  return (
    <Accordion type="single" collapsible onValueChange={onValueChange} className={cn("border-t", tone === "light" ? "border-night-line" : "border-line", className)}>
      {items.map((item, i) => (
        <AccordionItem
          key={`${idPrefix}-${i}`}
          value={`${idPrefix}-${i}`}
          className={cn("border-b", tone === "light" ? "border-night-line" : "border-line")}
        >
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="group/faq flex flex-1 items-start justify-between gap-6 py-6 text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-4 md:py-7">
              <span className="type-h4 max-w-2xl text-pretty transition-colors group-hover/faq:text-ochre-deep in-[.on-dark]:group-hover/faq:text-ochre-soft md:text-lg">
                {item.q}
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  "mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-500 ease-expo group-data-[state=open]/faq:rotate-45",
                  tone === "light" ? "border-night-line group-data-[state=open]/faq:bg-on-night group-data-[state=open]/faq:text-ink" : "border-line group-data-[state=open]/faq:bg-ink group-data-[state=open]/faq:text-ivory"
                )}
              >
                <Plus className="size-4" />
              </span>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionContent className="pb-7 pr-14">
            <p className={cn("type-body max-w-2xl", tone === "light" ? "text-on-night-soft" : "text-ink-soft")}>{item.a}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
