import { news2026 } from "./2026";

export const currentNews = [
  news2026.find(
    (news) => news.id === "sc-judicial-service-3-year-practice"
  ),

  news2026.find(
    (news) => news.id === "sc-article-131-statutory-authority"
  ),

  news2026.find(
    (news) => news.id === "telangana-hc-student-certificates"
  ),
].filter((news): news is NonNullable<typeof news> => Boolean(news));