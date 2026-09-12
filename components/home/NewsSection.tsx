import { news2026 } from "@/data/news/2026";
import NewsCard from "@/components/news/NewsCard";
import NewsHeader from "@/components/news/NewsHeader";

export default function NewsSection() {
  const latestNews = news2026.slice(0, 3);

  return (
    <section
      id="latest-legal-news"
      className="relative overflow-hidden bg-[#fffafa] py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <NewsHeader homepage />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((news) => (
            <NewsCard
              key={news.id}
              news={news}
            />
          ))}
        </div>
      </div>
    </section>
  );
}