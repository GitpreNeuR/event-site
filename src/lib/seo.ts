import type { Metadata } from "next";
import { site } from "@/data/site";
import type { Article } from "@/types/article";
import type { Breadcrumb } from "@/types/common";
import type { Service } from "@/types/service";

/** A schema.org JSON-LD object. */
export type JsonLdData = Record<string, unknown>;

export function absoluteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}

interface MetadataInput {
  title: string;
  description: string;
  path?: string;
  image?: string;
  absoluteTitle?: boolean;
  /** Pass an ISO date to emit an Open Graph "article". */
  publishedTime?: string;
}

/**
 * Builds page metadata with canonical + Open Graph + Twitter fields.
 * Titles are passed through the root layout's title template.
 */
export function createMetadata({ title, description, path = "/", image, absoluteTitle = false, publishedTime }: MetadataInput): Metadata {
  const ogImage = image ?? site.ogImage;
  const shared = {
    url: path,
    title,
    description,
    siteName: site.name,
    locale: site.locale,
    images: [{ url: ogImage, width: 1600, height: 1067, alt: title }],
  };
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: publishedTime ? { ...shared, type: "article", publishedTime } : { ...shared, type: "website" },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function organizationSchema(): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: absoluteUrl("/icon.svg"),
    description: site.description,
    areaServed: { "@type": "City", name: site.city },
  };
}

export function breadcrumbSchema(items: Breadcrumb[]): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}

export function serviceSchema(service: Service, path: string): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.seo.description,
    url: absoluteUrl(path),
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: { "@type": "City", name: site.city },
  };
}

export function articleSchema(article: Article, path: string): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: [absoluteUrl(article.image)],
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: absoluteUrl(path),
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: absoluteUrl("/icon.svg") } },
  };
}
