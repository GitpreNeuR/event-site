import { SectionHeading } from "@/components/shared/SectionHeading";
import { ImageFrame } from "@/components/shared/ImageFrame";
import { pad } from "@/lib/utils";

const principles = [
  { title: "Strategy before styling", body: "We agree what the event should achieve — and for whom — before a single mood board is made." },
  { title: "Creative direction", body: "A clear visual idea, carried consistently from invitation to table to lighting." },
  { title: "Vendor coordination", body: "Briefed in writing, scheduled precisely and managed by one accountable planner." },
  { title: "Production management", body: "Load-in plans, technical checks and rehearsals, so the day runs to its cues." },
  { title: "Guest experience", body: "Arrival, seating, food timing and comfort designed as carefully as the decor." },
  { title: "End-to-end execution", body: "On-site from set-up to pack-down, so the hosts can simply be hosts." },
];

export function WhyChooseUs() {
  return (
    <section className="section-y">
      <div className="container-page grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-[calc(var(--nav-height)+3rem)]">
            <SectionHeading
              eyebrow="Our approach"
              index="05"
              title="Beautiful is the *baseline.* Calm is the craft."
              description="Most events look lovely in photographs. What guests remember is how the evening felt — and that comes from planning no one notices."
            />
            <ImageFrame
              src="/images/about/planning-notebook.webp"
              alt="A planner's notebook and stickers laid out on a white desk"
              ratio="aspect-[16/11]"
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="mt-12 hidden rounded-sm lg:block"
            />
          </div>
        </div>
        <ol className="grid gap-x-10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          {principles.map((item, i) => (
            <li key={item.title} className="border-t border-line pt-6 pb-12" data-reveal>
              <span className="font-display text-5xl leading-none text-ochre/80 italic">{pad(i + 1)}</span>
              <h3 className="type-h4 mt-6 text-lg">{item.title}</h3>
              <p className="type-body mt-3 text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
