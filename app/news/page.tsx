"use client";

import { useMemo, useState } from "react";
import NewsHeader from "@/components/news/NewsHeader";
import NewsFilters from "@/components/news/NewsFilters";
import NewsList from "@/components/news/NewsList";
import { legalNews } from "@/data/news/news";
import type { NewsCategory } from "@/types/news";

export default function NewsPage() {
  const [selected, setSelected] = useState<NewsCategory | "All">("All");

  const filteredNews = useMemo(() => {
    if (selected === "All") {
      return legalNews;
    }

    return legalNews.filter((item) => item.category === selected);
  }, [selected]);

  return (
    <main className="min-h-screen bg-[#fffaf4]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <NewsHeader />

        <NewsFilters
          selected={selected}
          onChange={setSelected}
        />

        <NewsList news={filteredNews} />

      </div>
    </main>
  );
}