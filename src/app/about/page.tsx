import PageAnimations from "@/components/shared/PageAnimations";
import { PageHeader } from "@/components/shared/PageHeader";
import { Eyebrow, SectionHeading } from "@/components/shared/SectionHeading";
import { SplitHeading } from "@/components/shared/SplitHeading";
import { ImageFrame } from "@/components/shared/ImageFrame";
import { CTASection } from "@/components/shared/CTASection";
import { PlanningProcess } from "@/components/home/PlanningProcess";
import { processes } from "@/data/services";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";
import { pad } from "@/lib/utils";

export const metadata = createMetadata({
  title: "About the Studio",
  description: `${site.name} is a Mumbai celebration and event studio. Learn about our philosophy, planning methodology, creative direction and the values behind every event.`,
  path: "/about",
  image: "/images/about/garden-palace.webp",
});

const approach = [
  { title: "Listen first", body: "Every project starts with a conversation about people — who is gathering, what matters to them, and what the day should feel like." },
  { title: "Design with intent", body: "A single creative idea, expressed through light, flowers, materials and flow, rather than a collection of unrelated decorations." },
  { title: "Run it precisely", body: "Written briefs, confirmed timings and a rehearsed run-of-show, so the plan on paper becomes the evening in the room." },
];

const capabilities = {
  design: ["Concept and mood direction", "Floral and table design", "Lighting design", "Stationery and signage", "Set and stage design", "Theme development for birthdays"],
  production: ["Budget planning and tracking", "Venue search and coordination", "Vendor sourcing and briefing", "Logistics and load-in planning", "AV, sound and technical coordination", "On-site management and pack-down"],
};

const values = [
  { title: "Honesty", body: "Clear estimates, real trade-offs and no promises we can't verify — about prices, venues or anything else." },
  { title: "Care", body: "For guests, for families, for the vendors and venues we work alongside, and for the details no one asks about." },
  { title: "Restraint", body: "Knowing what to leave out. The most memorable rooms are rarely the most crowded." },
  { title: "Reliability", body: "Doing what we said, when we said — and telling you early when something changes." },
];

const roles = [
  { title: "Lead planner", body: "Your single point of contact — owns the plan, the budget and the timeline from first call to close-out." },
  { title: "Design lead", body: "Develops the creative direction and oversees decor, florals, lighting and styling." },
  { title: "Production manager", body: "Coordinates vendors, logistics, technical requirements and venue operations." },
  { title: "On-site team", body: "Coordinators who run the schedule on the day, look after guests and manage pack-down." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the studio"
        title="We design gatherings the way a good host *thinks*"
        description={`${site.name} is a celebration and event studio based in Mumbai — planning, designing and producing occasions with warmth and precision.`}
        breadcrumbs={[{ label: "About", href: "/about" }]}
        image="/images/about/garden-palace.webp"
        imageAlt="A garden venue at dusk set with white florals, candles and a lit palace facade"
      />
      <PageAnimations>
        <section className="section-y">
          <div className="container-page grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow index="01">Philosophy</Eyebrow>
            </div>
            <div className="lg:col-span-7">
              <SplitHeading text="The *aangan* is where a family celebrates — open to the sky, full of people, never rushed." className="type-h2" />
              <div className="mt-10 grid gap-6 md:grid-cols-2" data-reveal>
                <p className="type-body text-ink-soft">
                  In many Indian homes, the courtyard is where life gathers: rituals in the morning, children playing at noon, long conversations at dusk. It is generous and practical at once. That balance is what we aim for in every event.
                </p>
                <p className="type-body text-ink-soft">
                  We believe celebrations should feel personal, look considered and run so smoothly that hosts forget anyone was managing them. Our work is the planning that makes that possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-y bg-sand">
          <div className="container-page">
            <SectionHeading eyebrow="Our approach" index="02" title="Three habits behind *every* event" align="split" />
            <div className="mt-16 grid gap-10 md:grid-cols-12">
              <div className="grid gap-12 md:col-span-6">
                {approach.map((item, i) => (
                  <div key={item.title} className="grid grid-cols-[auto_1fr] gap-6 border-t border-line pt-8" data-reveal>
                    <span className="font-display text-4xl text-ochre/80 italic">{pad(i + 1)}</span>
                    <div>
                      <h3 className="type-h3">{item.title}</h3>
                      <p className="type-body mt-3 text-ink-soft">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative md:col-span-5 md:col-start-8">
                <ImageFrame src="/images/experiences/table-tent.webp" alt="A floral centrepiece on a table inside a white event tent" ratio="aspect-[3/4]" sizes="(min-width: 768px) 40vw, 100vw" parallax="6" shape="arch" mount />
              </div>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-page">
            <SectionHeading eyebrow="Capabilities" index="03" title="Creative direction, *and* the production to deliver it" align="split" description="Design and planning live in the same team, so ideas are developed with budgets, timings and venues in mind from the start." />
            <div className="mt-16 grid gap-14 md:grid-cols-2">
              {[
                { key: "design", title: "Design & creative direction", image: "/images/experiences/florals-white.webp", alt: "A table with white and peach floral arrangements and glassware" },
                { key: "production", title: "Planning & production", image: "/images/services/stage-lighting.webp", alt: "A stage lit with purple light and vertical light bars" },
              ].map((group) => (
                <div key={group.key}>
                  <ImageFrame src={group.image} alt={group.alt} ratio="aspect-[16/10]" sizes="(min-width: 768px) 45vw, 100vw" className="rounded-sm" />
                  <h3 className="type-h3 mt-8" data-reveal>
                    {group.title}
                  </h3>
                  <ul className="mt-6 grid border-t border-line sm:grid-cols-2 sm:gap-x-6" data-reveal>
                    {capabilities[group.key].map((item) => (
                      <li key={item} className="border-b border-line py-3.5 text-[0.95rem]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PlanningProcess steps={processes.studio} eyebrow="Methodology" index="04" title="A planning method you can *follow*" description="Every engagement moves through the same five stages, with clear sign-offs, so you always know what's decided and what's next." />

        <section className="on-dark grain section-y bg-night text-on-night">
          <div className="container-page">
            <SectionHeading eyebrow="Values" index="05" title="What we *hold* ourselves to" align="split" />
            <dl className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, i) => (
                <div key={value.title} className="border-t border-night-line pt-8" data-reveal>
                  <span className="font-display text-sm text-ochre-soft italic">{pad(i + 1)}</span>
                  <dt className="type-h3 mt-4">{value.title}</dt>
                  <dd className="type-body mt-3 text-on-night-soft">{value.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section-y">
          <div className="container-page grid gap-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <Eyebrow index="06">Service philosophy</Eyebrow>
              <blockquote className="mt-8">
                <SplitHeading as="p" text="“The best compliment we can receive is a host saying they *enjoyed* their own party.”" className="type-h2" />
              </blockquote>
              <p className="type-body mt-8 max-w-xl text-ink-soft" data-reveal>
                That’s the standard we plan to: hosts who are present with their guests, families who aren’t fielding vendor calls, and teams who can watch their own event run. Everything else — the styling, the logistics, the contingency plans — serves that.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <ImageFrame src="/images/services/toast.webp" alt="Guests raising glasses together across a dinner table" ratio="aspect-[4/5]" sizes="(min-width: 1024px) 38vw, 100vw" className="rounded-sm" />
            </div>
          </div>
        </section>

        <section className="section-y bg-sand">
          <div className="container-page">
            <SectionHeading eyebrow="Who you'll work with" index="07" title="A small team with *clear* roles" description="Team profiles will be added here. Until then, this is how responsibilities are shared on every event." align="split" />
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {roles.map((role) => (
                <div key={role.title} className="border-t border-ink/70 pt-6" data-reveal>
                  <h3 className="type-h4 text-lg">{role.title}</h3>
                  <p className="type-small mt-3 text-ink-soft">{role.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection title="Let's plan something *together*" />
      </PageAnimations>
    </>
  );
}
