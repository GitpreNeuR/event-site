import Image from "next/image";
import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";

import type { Article } from "@/types/article";

export function ArticleMeta({ article, className }: { article: Article; className?: string }) {
  return (
    <p className={cn("flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.8rem] text-ink-soft", className)}>
      <span className="type-eyebrow text-ochre-deep">{article.category}</span>
      <span aria-hidden="true">·</span>
      <time dateTime={article.date}>{formatDate(article.date)}</time>
      <span aria-hidden="true">·</span>
      <span>{article.readingTime} min read</span>
    </p>
  );
}

interface ArticleCardProps {
  article: Article;
  className?: string;
  featured?: boolean;
  headingLevel?: "h2" | "h3";
}

export function ArticleCard({ article, className, featured = false, headingLevel = "h3" }: ArticleCardProps) {
  const Heading = headingLevel;
  return (
    <article className={cn("group", className)} data-reveal>
      <Link href={`/journal/${article.slug}`} className={cn("block", featured && "grid gap-8 md:grid-cols-12 md:items-center md:gap-12")}>
        <div className={cn("relative overflow-hidden rounded-sm bg-muted", featured ? "aspect-[4/3] md:col-span-7" : "aspect-[3/2]")}>
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes={featured ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"}
            className="object-cover transition-transform duration-[1400ms] ease-expo group-hover:scale-[1.04]"
          />
          <span aria-hidden="true" className="pointer-events-none absolute inset-3 z-[1] rounded-[1px] border border-ivory/0 transition-colors duration-700 group-hover:border-ivory/70" />
        </div>
        <div className={cn(featured ? "md:col-span-5" : "mt-6")}>
          <ArticleMeta article={article} />
          <Heading className={cn("mt-4 transition-colors group-hover:text-ochre-deep", featured ? "type-h2" : "type-h3")}>{article.title}</Heading>
          <p className="type-body mt-4 text-ink-soft">{article.excerpt}</p>
          <span className="mt-6 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-ink">
            <span className="link-underline">Read the article</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
