import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { bnssChapters } from "@/data/bnss/chapters";
import { BnssChapterCard } from "./BnssChapterCard";

export function BnssChapters() {
  const featuredChapters = bnssChapters.slice(0, 5);

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-5 flex items-end justify-between border-b border-[#dfd8cc] pb-2">
          <div>
            <h2 className="font-serif text-xl font-semibold text-[#173b28] sm:text-2xl">
              BNSS Chapters
            </h2>

            <div className="mt-1 h-[2px] w-10 bg-[#f06f1f]" />
          </div>

          <Link
            href="/bnss/chapters"
            className="group flex items-center gap-1 text-[10px] font-medium text-[#f06f1f]"
          >
            View All

            <ArrowRight
              size={12}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Five cards */}
        <div className="grid gap-2.5">
          {featuredChapters.map((chapter) => (
            <BnssChapterCard
              key={chapter.number}
              chapter={chapter}
            />
          ))}
        </div>

      </div>
    </section>
  );
}