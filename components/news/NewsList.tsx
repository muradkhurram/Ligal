import NewsCard from "./NewsCard";
import type { LegalNews } from "@/types/news";

interface NewsListProps {
  news: LegalNews[];
}

export default function NewsList({ news }: NewsListProps) {
  if (!news.length) {
    return (
      <div className="rounded-3xl border border-dashed border-orange-200 bg-orange-50/50 p-12 text-center">
        <p className="font-medium text-gray-700">
          No legal news found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {news.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  );
}