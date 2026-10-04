import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { BnssSchedule } from "@/data/bnss/schedules"

interface BnssScheduleCardProps {
  schedule: BnssSchedule
}

export function BnssScheduleCard({
  schedule,
}: BnssScheduleCardProps) {
  return (
    <Link
      href={schedule.href}
      className="group block"
    >
      <article className="relative overflow-hidden rounded-xl border border-[#e5ddd1] bg-[#fffdf9] px-4 py-4 shadow-[0_4px_18px_rgba(44,49,42,0.035)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f06f1f]/45 hover:shadow-[0_10px_30px_rgba(44,49,42,0.08)]">

        <div className="absolute bottom-0 left-0 top-0 w-[2px] bg-[#f06f1f]" />

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fff0dc] font-serif text-base text-[#f06f1f]">
            {schedule.roman}
          </div>

          <div className="min-w-0 flex-1 border-l border-[#eee4d6] pl-3">
            <p className="font-serif text-[13px] font-semibold text-[#173b28]">
              {schedule.title}
            </p>

            <p className="mt-1 text-[9px] uppercase tracking-[0.08em] text-[#8a9189]">
              {schedule.description}
            </p>
          </div>

          <ArrowRight
            size={15}
            className="shrink-0 text-[#f06f1f] transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </article>
    </Link>
  )
}