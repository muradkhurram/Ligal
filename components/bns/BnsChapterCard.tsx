import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BnsChapter } from "@/data/bns/chapters";

interface BnsChapterCardProps {
  chapter: BnsChapter;
}

export function BnsChapterCard({
  chapter,
}: BnsChapterCardProps) {
  return (
    <Link
      href={chapter.href}
      className="group relative flex min-h-[90px] items-center overflow-hidden rounded-[18px] border border-[#e8e1d8] bg-white px-6 py-5 transition-shadow duration-200 hover:shadow-md"
    >
      {/* Orange left border */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-[#f36f21]" />

      {/* Chapter number */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#fff0df]">
        <span className="font-serif text-[23px] font-semibold text-[#f36f21]">
          {chapter.roman}
        </span>
      </div>

      {/* Divider */}
      <div className="mx-5 h-12 w-px bg-[#e5dfd7]" />

      {/* Text */}
      <div className="min-w-0 flex-1">
        <h3 className="font-serif text-[19px] font-semibold leading-tight text-[#123f32]">
          {chapter.title}
        </h3>

        <p className="mt-1 text-[13px] text-[#77736e]">
          {chapter.sections}
        </p>
      </div>

      {/* Arrow */}
      <ArrowRight
        size={19}
        strokeWidth={1.6}
        className="ml-4 shrink-0 text-[#f36f21] transition-transform duration-200 group-hover:translate-x-1"
      />
    </Link>
  );
}