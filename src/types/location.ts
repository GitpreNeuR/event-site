import type { FaqItem, TitledText } from "./common";

export type AreaZone = "western" | "eastern" | "island" | "thane" | "navi";

/**
 * Mumbai city areas use "Mumbai". Thane and Navi Mumbai are separate cities
 * with their own municipal corporations inside the Mumbai Metropolitan Region.
 */
export type AreaCity = "Mumbai" | "Thane" | "Navi Mumbai";

export interface MumbaiArea {
  slug: string;
  name: string;
  zone: AreaZone;
  city: AreaCity;
  /** Required context for areas outside Mumbai city limits. */
  boundaryNote?: string;
  intro: string;
  character: string;
  venueNotes: TitledText[];
  homeNote: string;
  travelNote: string;
  /** Service slugs highlighted for this area. */
  featuredServices: string[];
  /** Theme service slugs suggested for this area. */
  themes: string[];
  faqs: FaqItem[];
  /** Slugs of nearby areas. */
  nearby: string[];
  image: string;
  imageAlt: string;
}
