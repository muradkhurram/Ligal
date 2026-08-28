export type NewsCategory =
  | "Supreme Court"
  | "High Courts"
  | "Parliament"
  | "Government"
  | "Constitution"
  | "Legal Updates";

export interface LegalNews {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string[];
  category: NewsCategory;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  author?: string;
  image?: string;
  sourceName?: string;
  sourceUrl?: string;
  important?: boolean;
}