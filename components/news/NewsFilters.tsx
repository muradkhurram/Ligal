"use client";

import type { NewsCategory } from "@/types/news";

interface NewsFiltersProps {
  selected: NewsCategory | "All";
  onChange: (category: NewsCategory | "All") => void;
}

const categories: Array<NewsCategory | "All"> = [
  "All",
  "Supreme Court",
  "High Courts",
  "Parliament",
  "Government",
  "Constitution",
  "Legal Updates",
];

export default function NewsFilters({
  selected,
  onChange,
}: NewsFiltersProps) {
  return (
    <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
      {categories.map((category) => {
        const active = selected === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
              active
                ? "bg-orange-600 text-white shadow-md"
                : "bg-orange-50 text-orange-800 hover:bg-orange-100"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}