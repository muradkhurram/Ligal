import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { BnssChapter } from "@/data/bnss/chapters"

interface BnssChapterCardProps {
  chapter: BnssChapter
}

export function BnssChapterCard({
  chapter,
}: BnssChapterCardProps) {
  return (
    <Link
      href={`/bnss/chapter/${chapter.number}`}
      className="group block"
    >
      <article className="relative overflow-hidden rounded-xl border border-[#e5ddd1] bg-[#fffdf9] px-4 py-4 shadow-[0_4px_18px_rgba(44,49,42,0.035)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f06f1f]/45 hover:shadow-[0_10px_30px_rgba(44,49,42,0.08)]">

        {/* Orange line */}
        <div className="absolute bottom-0 left-0 top-0 w-[2px] bg-[#f06f1f]" />

        <div className="flex items-center gap-3">

          {/* Roman numeral */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff0dc] font-serif text-base text-[#f06f1f]">
            {chapter.roman}
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1 border-l border-[#eee4d6] pl-3">
            <p className="font-serif text-[13px] font-semibold leading-snug text-[#173b28]">
              {chapter.title}
            </p>

            <p className="mt-1 text-[9px] uppercase tracking-[0.08em] text-[#8a9189]">
              Sections {chapter.sectionStart}–{chapter.sectionEnd}
            </p>
          </div>

          {/* Arrow */}
          <ArrowRight
            size={15}
            className="shrink-0 text-[#f06f1f] transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </article>
    </Link>
  )
}