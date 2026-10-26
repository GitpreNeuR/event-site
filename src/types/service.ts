import type { FaqItem, ImageAsset, SeoMeta, TitledText } from "./common";

export type ServiceGroup =
  | "weddings"
  | "corporate"
  | "brand"
  | "private"
  | "production"
  | "birthday"
  | "ceremony"
  | "theme"
  | "age"
  | "venue";

export type ProcessKey = "studio" | "corporate" | "birthday" | "venue";

export type ProcessStep = TitledText;

export interface Service {
  slug: string;
  title: string;
  menuLabel: string;
  group: ServiceGroup;
  eyebrow: string;
  /** Supports *asterisks* for an italic accent word. */
  headline: string;
  summary: string;
  intro: string[];
  image: string;
  imageAlt: string;
  gallery: ImageAsset[];
  includes: string[];
  highlights: TitledText[];
  processKey: ProcessKey;
  faqs: FaqItem[];
  /** Slugs of related services. */
  related: string[];
  seo: SeoMeta;
  /** Optional disclaimer, e.g. pricing or trademark notes. */
  note?: string;
  cta: { title: string; body: string };
}

export interface ServicePillar {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  caption: string;
}
