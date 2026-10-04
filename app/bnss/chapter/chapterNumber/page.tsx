import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { bnssChapters } from "@/data/bnss/chapters"

interface PageProps {
  params: Promise<{
    chapterNumber: string
  }>
}

export default async function BnssChapterPage({
  params,
}: PageProps) {
  const { chapterNumber } = await params

  const chapter = bnssChapters.find(
    (item) => item.number === Number(chapterNumber)
  )

  if (!chapter) {
    notFound()
  }

  const sections = Array.from(
    {
      length: chapter.sectionEnd - chapter.sectionStart + 1,
    },
    (_, index) => chapter.sectionStart + index
  )

  return (
    <main className="min-h-screen bg-[#fbf8f1] px-4 py-10 sm:px-6 sm:py-14">

      <div className="mx-auto max-w-5xl">

        <Link
          href="/bnss/chapters"
          className="inline-flex items-center gap-2 text-xs font-medium text-[#0b7339]"
        >
          <ArrowLeft size={14} />
          All Chapters
        </Link>

        {/* Chapter heading */}
        <header className="relative mt-8 overflow-hidden rounded-2xl border border-[#e4dbce] bg-[#fffdf9] p-6 shadow-[0_8px_30px_rgba(35,45,37,0.05)] sm:p-8">

          <div className="absolute left-0 top-0 h-full w-[3px] bg-[#f06f1f]" />

          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#fff0dc] font-serif text-xl text-[#f06f1f]">
              {chapter.roman}
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f06f1f]">
                Chapter {chapter.number}
              </p>

              <h1 className="mt-2 max-w-3xl font-serif text-3xl leading-tight text-[#173b28] sm:text-4xl">
                {chapter.title}
              </h1>

              <p className="mt-3 text-xs uppercase tracking-[0.12em] text-[#818981]">
                Sections {chapter.sectionStart}–{chapter.sectionEnd}
              </p>
            </div>

          </div>
        </header>

        {/* Sections */}
        <section className="mt-10">

          <div className="mb-5 flex items-end justify-between border-b border-[#dfd8cc] pb-2">
            <div>
              <h2 className="font-serif text-2xl text-[#173b28]">
                Sections
              </h2>

              <div className="mt-1 h-[2px] w-9 bg-[#f06f1f]" />
            </div>

            <span className="text-[10px] uppercase tracking-[0.12em] text-[#8a9189]">
              {sections.length} provisions
            </span>
          </div>

          <div className="grid gap-2">
            {sections.map((sectionNumber) => (
              <Link
                key={sectionNumber}
                href={`/bnss/section/${sectionNumber}`}
                className="group flex items-center gap-4 rounded-xl border border-[#e5ddd1] bg-[#fffdf9] px-4 py-3.5 transition-all hover:border-[#f06f1f]/40 hover:shadow-sm"
              >
                <span className="flex h-9 min-w-9 items-center justify-center rounded-lg bg-[#edf5ef] px-2 font-serif text-sm text-[#0b7339]">
                  {sectionNumber}
                </span>

                <div className="flex-1">
                  <p className="text-sm font-medium text-[#314b3b]">
                    Section {sectionNumber}
                  </p>

                  <p className="mt-0.5 text-[10px] text-[#8a9189]">
                    BNSS, 2023
                  </p>
                </div>

                <ArrowRight
                  size={15}
                  className="text-[#f06f1f] transition-transform group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>

        </section>

      </div>
    </main>
  )
}