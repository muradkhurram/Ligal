export type NewsCategory =
  | "Supreme Court"
  | "High Courts"
  | "Parliament"
  | "Government"
  | "Constitution"
  | "Legal Updates"
  | "Legal Analysis";

export interface LegalNews {
  id: string;

  slug: string;

  title: string;

  category: NewsCategory;

  date: string;

  publishedAt: string;

  readTime: string;

  author?: string;

  summary: string;

  image?: string;

  source?: string;

  sourceUrl?: string;

  important?: boolean;

  featured?: boolean;

  content: string[];
}