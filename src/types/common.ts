export interface ImageAsset {
  src: string;
  alt: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

/** A titled paragraph — used for highlights, venue notes, values, etc. */
export interface TitledText {
  title: string;
  body: string;
}

export interface SeoMeta {
  title: string;
  description: string;
}

export interface Breadcrumb {
  label: string;
  href: string;
}
