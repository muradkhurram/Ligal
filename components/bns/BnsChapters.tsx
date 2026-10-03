import { bnsChapters } from "@/data/bns/chapters";
import { BnsChapterCard } from "./BnsChapterCard";

export function BnsChapters() {
  return (
    <section className="px-4 pb-16 sm:px-6">
      <div className="mb-7 flex items-end justify-between">
        <div>
          <div className="mb-3 h-[2px] w-10 bg-[#f36f21]" />

          <h2 className="font-serif text-[30px] font-semibold tracking-[-0.02em] text-[#123f32]">
            BNS Chapters
          </h2>
        </div>

        <span className="mb-1 text-[13px] font-medium text-[#f36f21]">
          20 Chapters →
        </span>
      </div>

      <div className="space-y-3">
        {bnsChapters.map((chapter) => (
          <BnsChapterCard
            key={chapter.number}
            chapter={chapter}
          />
        ))}
      </div>
    </section>
  );
}