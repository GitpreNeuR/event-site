import { notFound } from "next/navigation";
import PageAnimations from "@/components/shared/PageAnimations";
import { DarkHero } from "@/components/shared/DarkHero";
import { ButtonLink } from "@/components/shared/Button";
import { Eyebrow, SectionHeading } from "@/components/shared/SectionHeading";
import { SampleBadge } from "@/components/shared/SampleBadge";
import { CTASection } from "@/components/shared/CTASection";
import { ImageGallery } from "@/components/experiences/ImageGallery";
import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import { experienceLabel, experiences } from "@/data/experiences";
import { createMetadata } from "@/lib/seo";
import { pad } from "@/lib/utils";

const getExperience = (slug) => experiences.find((e) => e.slug === slug);

// Every valid slug is prerendered at build time. Navigations may block on
// the (static) payload so unknown slugs can return a real 404 status.
export const instant = false;

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const experience = getExperience(slug);
  if (!experience) return { title: "Experience not found", robots: { index: false } };
  return createMetadata({
    title: `${experience.title} — ${experience.category} Concept`,
    description: `${experience.excerpt} An illustrative event concept by our Mumbai studio.`,
    path: `/experiences/${experience.slug}`,
    image: experience.cover,
  });
}

export default async function ExperiencePage({ params }) {
  const { slug } = await params;
  const experience = getExperience(slug);
  if (!experience) notFound();

  const related = experiences.filter((e) => e.slug !== experience.slug && e.category === experience.category).concat(experiences.filter((e) => e.category !== experience.category)).slice(0, 2);

  return (
    <>
      <DarkHero
        eyebrow={`${experience.category} · ${experienceLabel}`}
        title={experience.title}
        description={experience.excerpt}
        image={experience.cover}
        imageAlt={experience.coverAlt}
        breadcrumbs={[
          { label: "Experiences", href: "/experiences" },
          { label: experience.title, href: `/experiences/${experience.slug}` },
        ]}
        meta={[
          { label: "Category", value: experience.category },
          { label: "Setting", value: experience.setting },
          { label: "Scale", value: experience.scale },
          { label: "Status", value: experienceLabel },
        ]}
      />
      <PageAnimations>
        <section className="section-y">
          <div className="container-page grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>Overview</Eyebrow>
              <SampleBadge className="mt-6 text-ink-soft">Illustrative concept</SampleBadge>
              <p className="type-small mt-4 max-w-xs text-ink-soft">
                This is a design study showing our approach. It does not describe a real client event.
              </p>
            </div>
            <div className="space-y-12 lg:col-span-7 lg:col-start-6">
              <p className="type-h3 text-pretty" data-reveal>
                {experience.overview}
              </p>
              <div data-reveal>
                <h2 className="type-eyebrow text-ink">The creative concept</h2>
                <p className="type-lead mt-4 text-ink-soft">{experience.concept}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24 md:pb-36">
          <div className="container-page">
            <ImageGallery images={experience.gallery} />
          </div>
        </section>

        <section className="section-y bg-sand">
          <div className="container-page grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Objectives" title="What the plan set out to *achieve*" />
              <ol className="mt-10">
                {experience.objectives.map((item, i) => (
                  <li key={item} className="flex gap-5 border-t border-line py-5" data-reveal>
                    <span className="font-display text-ochre-deep italic">{pad(i + 1)}</span>
                    <span className="text-[1.02rem]">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <h2 className="type-eyebrow text-ink" data-reveal>
                Selected details
              </h2>
              <dl className="mt-6 grid gap-x-8 sm:grid-cols-2">
                {experience.details.map((item) => (
                  <div key={item.label} className="border-t border-ink/70 py-6" data-reveal>
                    <dt className="type-eyebrow text-ink-soft">{item.label}</dt>
                    <dd className="type-h3 mt-3 text-[1.5rem]">{item.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10" data-reveal>
                <ButtonLink href="/contact">Plan something similar</ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-page">
            <SectionHeading eyebrow="More concepts" title="Keep *exploring*" />
            <div className="mt-14 grid gap-x-6 gap-y-14 md:grid-cols-2">
              {related.map((item) => (
                <ExperienceCard key={item.slug} experience={item} ratio="aspect-[4/3]" />
              ))}
            </div>
          </div>
        </section>
        <CTASection image={experience.gallery[0]?.src} imageAlt="" />
      </PageAnimations>
    </>
  );
}
