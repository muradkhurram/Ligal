import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, FileText } from "lucide-react"
import { bnssSchedules } from "@/data/bnss/schedules"

interface PageProps {
  params: Promise<{
    scheduleNumber: string
  }>
}

export default async function BnssSchedulePage({
  params,
}: PageProps) {
  const { scheduleNumber } = await params

  const schedule = bnssSchedules.find(
    (item) => item.number === Number(scheduleNumber)
  )

  if (!schedule) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#fbf8f1] px-4 py-10 sm:px-6 sm:py-14">

      <div className="mx-auto max-w-5xl">

        <Link
          href="/bnss/schedules"
          className="inline-flex items-center gap-2 text-xs font-medium text-[#0b7339]"
        >
          <ArrowLeft size={14} />
          All Schedules
        </Link>

        <header className="relative mt-8 overflow-hidden rounded-2xl border border-[#e4dbce] bg-[#fffdf9] p-7 shadow-[0_8px_30px_rgba(35,45,37,0.05)] sm:p-10">

          <div className="absolute left-0 top-0 h-full w-[3px] bg-[#f06f1f]" />

          <div className="flex items-start gap-5">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#fff0dc] font-serif text-xl text-[#f06f1f]">
              {schedule.roman}
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f06f1f]">
                Schedule {schedule.roman}
              </p>

              <h1 className="mt-2 font-serif text-3xl text-[#173b28] sm:text-4xl">
                {schedule.title}
              </h1>

              <p className="mt-3 text-sm text-[#687269]">
                {schedule.description}
              </p>
            </div>

          </div>
        </header>

        <section className="mt-8 rounded-2xl border border-[#e5ddd1] bg-[#fffdf9] p-6 sm:p-8">

          <div className="flex items-start gap-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#edf5ef] text-[#0b7339]">
              <FileText size={18} />
            </div>

            <div>
              <h2 className="font-serif text-xl text-[#173b28]">
                {schedule.description}
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#69736b]">
                The complete statutory content of this schedule will be
                presented here from the original BNSS text.
              </p>
            </div>

          </div>

          <div className="mt-7 border-t border-[#e7e0d5] pt-6">
            <div className="rounded-xl bg-[#f7f2e9] p-5">
              <p className="text-xs leading-6 text-[#687269]">
                Source: Bharatiya Nagarik Suraksha Sanhita, 2023.
                This section will contain the original schedule text
                without altering the statutory wording.
              </p>
            </div>
          </div>

        </section>

      </div>
    </main>
  )
}