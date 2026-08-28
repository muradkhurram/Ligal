import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { LegalNews } from "@/types/news";

interface NewsCardProps {
  news: LegalNews;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {news.image && (
        <Link href={`/news/${news.slug}`} className="block overflow-hidden">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={news.image}
              alt={news.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>
      )}

      <div className="p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
            {news.category}
          </span>

          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Clock size={14} />
            {news.readTime}
          </div>
        </div>

        <Link href={`/news/${news.slug}`}>
          <h3 className="text-xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-orange-600">
            {news.title}
          </h3>
        </Link>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
          {news.summary}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            {new Date(news.publishedAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>

          <Link
            href={`/news/${news.slug}`}
            className="flex items-center gap-2 text-sm font-semibold text-orange-600 transition-all group-hover:gap-3"
          >
            Read Article
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}