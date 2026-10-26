import { SectionHeading } from "@/components/shared/SectionHeading";
import { ButtonLink } from "@/components/shared/Button";
import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import { experiences } from "@/data/experiences";

const featuredSlugs = ["a-ballroom-sangeet", "the-long-table-supper", "an-after-dark-product-reveal", "jungle-safari-birthday"];

export function FeaturedExperiences() {
  const items = featuredSlugs.map((slug) => experiences.find((e) => e.slug === slug));
  return (
    <section className="on-dark grain section-y bg-night text-on-night">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experiences"
          index="04"
          title="Concept studies in *atmosphere* and flow"
          description="Illustrative concepts that show how we think about a brief — the space, the guests and the moment everyone remembers. They are design studies, not past client events."
          align="split"
        />
        <div className="mt-16 grid gap-x-6 gap-y-14 md:mt-24 md:grid-cols-12">
          <ExperienceCard experience={items[0]} className="md:col-span-7" ratio="aspect-[4/5] md:aspect-[5/6]" tone="light" sizes="(min-width: 768px) 58vw, 100vw" />
          <div className="grid gap-14 md:col-span-5 md:pt-32">
            <ExperienceCard experience={items[1]} ratio="aspect-[4/3]" tone="light" sizes="(min-width: 768px) 40vw, 100vw" />
            <ExperienceCard experience={items[2]} ratio="aspect-[4/5]" tone="light" sizes="(min-width: 768px) 40vw, 100vw" />
          </div>
          <ExperienceCard experience={items[3]} className="md:col-span-8 md:col-start-3" ratio="aspect-[16/9]" tone="light" sizes="(min-width: 768px) 66vw, 100vw" />
        </div>
        <div className="mt-16 flex justify-center" data-reveal>
          <ButtonLink href="/experiences" variant="outline-light">
            View all experiences
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
