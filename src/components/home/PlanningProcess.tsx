import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn, pad } from "@/lib/utils";

/** Horizontal timeline on large screens, vertical rail on mobile. */
import type { ProcessStep } from "@/types/service";

interface PlanningProcessProps {
  steps: ProcessStep[];
  eyebrow?: string;
  index?: string;
  title?: string;
  description?: string;
  tone?: "sand" | "ivory";
}

export function PlanningProcess({ steps, eyebrow = "How we work", index, title = "Five steps from *first call* to final guest", description, tone = "sand" }: PlanningProcessProps) {
  return (
    <section className={cn("section-y", tone === "sand" && "bg-sand", tone === "ivory" && "bg-ivory")}>
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} index={index} title={title} description={description} align="split" />
        <ol className="relative mt-16 grid gap-0 md:mt-24 lg:grid-cols-5 lg:gap-8">
          <span aria-hidden="true" className="absolute top-0 bottom-0 left-[0.4rem] w-px bg-line lg:hidden" />
          <span aria-hidden="true" className="absolute inset-x-0 top-[0.4rem] hidden h-px bg-ink/20 lg:block" data-line />
          {steps.map((step, i) => (
            <li key={step.title} className="relative pb-12 pl-10 lg:pb-0 lg:pl-0 lg:pt-12" data-reveal>
              <span aria-hidden="true" className="absolute top-1 left-0 size-[0.85rem] rounded-full border border-ochre bg-ivory lg:top-0" />
              <span className="font-display text-sm text-ochre-deep italic">Step {pad(i + 1)}</span>
              <h3 className="type-h3 mt-3">{step.title}</h3>
              <p className="type-small mt-4 max-w-xs text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
