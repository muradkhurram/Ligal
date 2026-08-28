import type { LegalNews } from "@/types/news";

export const legalNews: LegalNews[] = [
  {
    id: "sc-judicial-service-3-year-practice",
    slug: "supreme-court-modifies-3-year-practice-rule-judicial-service-entry",

    title:
      "Supreme Court modifies 3-year practice rule for judicial service entry",

    summary:
      "The Supreme Court has retained the three-year practice requirement for entry into judicial service while modifying how the requirement will operate.",

    category: "Supreme Court",

    publishedAt: "2026-08-22T04:51:00+05:30",

    updatedAt: "2026-08-22T04:51:00+05:30",

    readTime: "4 min read",

    author: "Amaal Sheikh",

    image: "/images/news/supreme-court-judicial-service.jpg",

    sourceName: "The Indian Express",

    sourceUrl:
      "https://indianexpress.com/article/legal-news/supreme-court-retains-3-year-practice-rule-for-judicial-service-entry-10843003/",

    important: true,

    content: [
      "The Supreme Court has retained the three-year practice requirement for candidates seeking entry into judicial service.",

      "The bench has, however, modified the manner in which the requirement is to operate. The development concerns the eligibility and professional experience expected from candidates entering the judicial service.",

      "The decision is significant for law graduates and candidates preparing for judicial service examinations because it affects the route from legal education and practice into the lower judiciary.",

      "Candidates and legal educators should therefore consider the current rules and the specific directions issued by the Supreme Court when assessing eligibility for judicial service.",
    ],
  },
];

export function getNewsBySlug(slug: string) {
  return legalNews.find((news) => news.slug === slug);
}

export function getLatestNews(limit?: number) {
  if (!limit) return legalNews;

  return legalNews.slice(0, limit);
}