import Image from "next/image";
import { notFound } from "next/navigation";
import PageAnimations from "@/components/shared/PageAnimations";
import HeroAnimator from "@/components/shared/HeroAnimator";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SplitHeading } from "@/components/shared/SplitHeading";
import { SampleBadge } from "@/components/shared/SampleBadge";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { ButtonLink } from "@/components/shared/Button";
import { ArticleCard, ArticleMeta } from "@/components/journal/ArticleCard";
import { ArticleContent } from "@/components/journal/ArticleContent";
import { articles } from "@/data/articles";
import { articleSchema, createMetadata } from "@/lib/seo";

const getArticle = (slug) => articles.find((a) => a.slug === slug);

// Every valid slug is prerendered at build time. Navigations may block on
// the (static) payload so unknown slugs can return a real 404 status.
export const instant = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article not found", robots: { index: false } };
  const meta = createMetadata({ title: article.title, description: article.excerpt, path: `/journal/${article.slug}`, image: article.image, publishedTime: article.date });
  return meta;
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const path = `/journal/${article.slug}`;
  const related = articles.filter((a) => a.slug !== article.slug && a.category === article.category).concat(articles.filter((a) => a.category !== article.category && a.slug !== article.slug)).slice(0, 3);

  return (
    <>
      <HeroAnimator as="header" className="pt-[calc(var(--nav-height)+2.5rem)] md:pt-[calc(var(--nav-height)+4rem)]">
        <div className="container-page">
          <div data-hero>
            <Breadcrumbs items={[{ label: "Journal", href: "/journal" }, { label: article.title, href: path }]} />
          </div>
          <div className="mx-auto mt-14 max-w-4xl text-center md:mt-20">
            <div data-hero className="flex justify-center">
              <ArticleMeta article={article} className="justify-center" />
            </div>
            <SplitHeading as="h1" mode="hero" text={article.title} className="type-h1 mt-8 text-[clamp(2.4rem,1.6rem+3.4vw,5rem)]" />
            <p data-hero className="type-lead mx-auto mt-8 max-w-2xl text-ink-soft">
              {article.excerpt}
            </p>
          </div>
        </div>
        <div className="container-page mt-14 md:mt-20">
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-muted md:aspect-[21/9]">
            <div className="absolute inset-0" data-hero-media>
              <Image src={article.image} alt={article.imageAlt} fill preload loading="eager" sizes="(min-width: 1440px) 1330px, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </HeroAnimator>

      <PageAnimations>
        <article className="section-y">
          <div className="container-page grid gap-12 lg:grid-cols-12">
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-[calc(var(--nav-height)+2rem)]">
                <SampleBadge className="text-ink-soft">Sample editorial</SampleBadge>
                <p className="type-small mt-4 max-w-56 text-ink-soft">General guidance written for this site. Review and adapt before publishing.</p>
              </div>
            </aside>
            <div className="max-w-[68ch] lg:col-span-7 lg:col-start-5" data-reveal>
              <ArticleContent blocks={article.body} />
              <div className="mt-16 flex flex-wrap items-center gap-4 border-t border-line pt-10">
                <p className="type-h3 mr-auto">Planning something?</p>
                <ButtonLink href="/contact">Plan Your Event</ButtonLink>
              </div>
            </div>
          </div>
        </article>

        <section className="section-y bg-sand">
          <div className="container-page">
            <h2 className="type-h2">Continue reading</h2>
            <div className="mt-12 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </div>
        </section>
        <CTASection />
      </PageAnimations>
      <JsonLd data={articleSchema(article, path)} />
    </>
  );
}
