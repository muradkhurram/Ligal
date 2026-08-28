import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import { getNewsBySlug, legalNews } from "@/data/news/news";

interface NewsArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return legalNews.map((news) => ({
    slug: news.slug,
  }));
}

export default async function NewsArticlePage({
  params,
}: NewsArticlePageProps) {
  const { slug } = await params;

  const news = getNewsBySlug(slug);

  if (!news) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fffaf4]">
      <article className="mx-auto max-w-5xl px-6 py-12 lg:px-8">

        <Link
          href="/news"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 transition hover:gap-3"
        >
          <ArrowLeft size={17} />
          Back to Legal News
        </Link>

        <div className="mb-6">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-xs font-bold uppercase tracking-wide text-orange-700">
            {news.category}
          </span>
        </div>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-gray-950 md:text-5xl lg:text-6xl">
          {news.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          {news.summary}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-orange-100 py-5 text-sm text-gray-600">
          {news.author && (
            <span>
              Written by{" "}
              <strong className="text-gray-900">
                {news.author}
              </strong>
            </span>
          )}

          <span className="flex items-center gap-2">
            <Clock size={16} />
            {news.readTime}
          </span>

          <span>
            {new Date(news.publishedAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>

        {news.image && (
          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-3xl bg-gray-100">
            <Image
              src={news.image}
              alt={news.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        <p className="mt-3 text-sm text-gray-500">
          Image source: replace the local image in{" "}
          <code>public/images/news/</code> with the properly licensed/source
          image you want LiGal to display.
        </p>

        <div className="mx-auto mt-12 max-w-3xl">
          {news.content.map((paragraph, index) => (
            <p
              key={index}
              className="mb-6 text-lg leading-8 text-gray-800"
            >
              {paragraph}
            </p>
          ))}

          {news.sourceName && (
            <div className="mt-10 rounded-2xl border border-orange-100 bg-orange-50 p-5">
              <p className="text-sm text-gray-600">
                Original reporting:
              </p>

              <p className="mt-1 font-semibold text-gray-900">
                {news.sourceName}
              </p>
            </div>
          )}
        </div>

      </article>
    </main>
  );
}