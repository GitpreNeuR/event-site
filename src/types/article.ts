export type ArticleCategory = "Planning" | "Venues" | "Birthdays" | "Corporate" | "Guest Experience";

export type ArticleBlock =
  | { type: "p" | "h2" | "h3" | "quote"; text: string }
  | { type: "ul"; items: string[] };

export interface Article {
  slug: string;
  title: string;
  category: ArticleCategory;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  readingTime: number;
  featured?: boolean;
  excerpt: string;
  image: string;
  imageAlt: string;
  body: ArticleBlock[];
}
