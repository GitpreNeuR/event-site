import PageAnimations from "@/components/shared/PageAnimations";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTASection } from "@/components/shared/CTASection";
import { SampleBadge } from "@/components/shared/SampleBadge";
import { ArticleCard } from "@/components/journal/ArticleCard";
import { articles } from "@/data/articles";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Journal — Event Planning Guides & Ideas",
  description:
    "Practical guides on event planning timelines, choosing venues in Mumbai, product launches, guest experience and planning birthday parties.",
  path: "/journal",
  image: "/images/about/planning-notebook.webp",
});

export default function JournalPage() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));
  const featured = sorted.find((a) => a.featured) ?? sorted[0];
  const rest = sorted.filter((a) => a.slug !== featured.slug);

  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Notes on planning, hosting and *gathering* well"
        description="Practical guidance from the planning table — timelines, venues, guest experience and the questions worth asking."
        breadcrumbs={[{ label: "Journal", href: "/journal" }]}
      >
        <SampleBadge className="mt-6 text-ink-soft">Sample editorial content</SampleBadge>
      </PageHeader>
      <PageAnimations>
        <section className="section-y pt-12 md:pt-16">
          <div className="container-page">
            <h2 className="sr-only">Featured article</h2>
            <ArticleCard article={featured} featured headingLevel="h3" />
            <div className="mt-24 border-t border-line pt-16 md:mt-32">
              <h2 className="type-eyebrow text-ink">All articles</h2>
              <div className="mt-12 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <CTASection />
      </PageAnimations>
    </>
  );
}
