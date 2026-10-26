import PageAnimations from "@/components/shared/PageAnimations";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTASection } from "@/components/shared/CTASection";
import { SampleBadge } from "@/components/shared/SampleBadge";
import { ExperienceGrid } from "@/components/experiences/ExperienceGrid";
import { experienceCategories, experiences } from "@/data/experiences";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Experiences — Event Concepts & Design Studies",
  description:
    "Illustrative event concepts — weddings, birthdays, private dinners, corporate summits and launches — showing how our Mumbai studio approaches design and flow.",
  path: "/experiences",
  image: "/images/hero/ballroom-mandap.webp",
});

export default function ExperiencesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Experiences"
        title="Design studies in *atmosphere,* flow and detail"
        description="A portfolio of illustrative concepts. Each one shows how we would interpret a brief — the setting, the guest journey and the moment everyone remembers."
        breadcrumbs={[{ label: "Experiences", href: "/experiences" }]}
      >
        <SampleBadge className="mt-6 text-ink-soft">Illustrative concepts — not past client events</SampleBadge>
      </PageHeader>
      <PageAnimations>
        <section className="section-y pt-12 md:pt-16">
          <div className="container-page">
            <ExperienceGrid experiences={experiences} categories={experienceCategories} />
          </div>
        </section>
        <CTASection eyebrow="Your event" title="Have a brief in *mind?*" body="Tell us about the occasion and we'll share how we'd approach it — with a concept made for you." />
      </PageAnimations>
    </>
  );
}
