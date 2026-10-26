import type { MetadataRoute } from "next";
import { allServices } from "@/lib/services";
import { mumbaiAreas } from "@/data/mumbai-areas";
import { experiences } from "@/data/experiences";
import { articles } from "@/data/articles";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/locations", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/experiences", priority: 0.7 },
    { path: "/journal", priority: 0.6 },
    { path: "/contact", priority: 0.8 },
    { path: "/faq", priority: 0.5 },
    { path: "/privacy-policy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
  ];

  return [
    ...staticRoutes.map(({ path, priority }) => ({ url: absoluteUrl(path), changeFrequency: "monthly" as const, priority })),
    ...allServices.map((s) => ({ url: absoluteUrl(`/services/${s.slug}`), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...mumbaiAreas.map((a) => ({ url: absoluteUrl(`/locations/${a.slug}`), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...experiences.map((e) => ({ url: absoluteUrl(`/experiences/${e.slug}`), changeFrequency: "yearly" as const, priority: 0.5 })),
    ...articles.map((a) => ({ url: absoluteUrl(`/journal/${a.slug}`), lastModified: a.date, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
