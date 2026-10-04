import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { bnssChapters } from "@/data/bnss/chapters"
import { BnssChapterCard } from "@/components/bnss/BnssChapterCard"

export default function BnssChaptersPage() {
  return (
    <main className="min-h-screen bg-[#fbf8f1] px-4 py-10 sm:px-6 sm:py-14">

      <div className="mx-auto max-w-5xl">

        {/*<Link
          href="/bnss"
          className="mb-8 inline-flex items-center gap-2 text-xs font-medium text-[#0b7339]"
        >
          <ArrowLeft size={14} />
          BNSS
        </Link>*/}

        <header className="mb-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f06f1f]">
            Bharatiya Nagarik Suraksha Sanhita, 2023
          </p>

          <h1 className="mt-2 font-serif text-4xl tracking-tight text-[#173b28] sm:text-5xl">
            All Chapters
          </h1>

          <div className="mt-3 h-[2px] w-12 bg-[#f06f1f]" />

          {/*<p className="mt-4 max-w-2xl text-sm leading-6 text-[#687269]">
            The all 39 chapters of the Bharatiya Nagarik Suraksha
            Sanhita, 2023, from preliminary provisions to miscellaneous
            provisions.
          </p>*/}
        </header>

        {/*<div className="mb-6 flex items-center justify-between border-y border-[#e2dbcf] py-3">
          <span className="text-xs text-[#69736b]">
            Complete arrangement
          </span>

          <span className="font-serif text-sm text-[#0b7339]">
            39 Chapters
          </span>
        </div>*/}

        <div className="grid gap-2.5 md:grid-cols-2">
          {bnssChapters.map((chapter) => (
            <BnssChapterCard
              key={chapter.number}
              chapter={chapter}
            />
          ))}
        </div>

      </div>
    </main>
  )
}