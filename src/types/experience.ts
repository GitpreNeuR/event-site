import type { ImageAsset } from "./common";

export type ExperienceCategory = "Weddings" | "Birthdays" | "Private Celebrations" | "Corporate" | "Brand Experiences";

export type ExperienceFilter = "All" | ExperienceCategory;

export interface Experience {
  slug: string;
  title: string;
  category: ExperienceCategory;
  setting: string;
  scale: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  overview: string;
  concept: string;
  objectives: string[];
  details: { label: string; value: string }[];
  gallery: ImageAsset[];
}
