import { getLatestNews } from "@/data/news/news";
import NewsCard from "@/components/news/NewsCard";
import NewsHeader from "@/components/news/NewsHeader";

export default function NewsSection() {
  const latestNews = getLatestNews(3);

  return (
    <section className="relative overflow-hidden bg-[#fffaf4] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <NewsHeader homepage />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>

      </div>
    </section>
  );
}