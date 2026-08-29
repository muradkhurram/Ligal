import { news2026 } from "./2026";

export const legalNews = [
  ...news2026,
].sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() -
    new Date(a.publishedAt).getTime()
);

export function getNewsBySlug(slug: string) {
  return legalNews.find((news) => news.slug === slug);
}

export function getLatestNews(limit = 3) {
  return legalNews.slice(0, limit);
}