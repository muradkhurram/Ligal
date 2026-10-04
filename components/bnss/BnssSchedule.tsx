import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { bnssSchedules } from "@/data/bnss/schedules"
import { BnssScheduleCard } from "./BnssScheduleCard"

export function BnssSchedule() {
  return (
    <section className="px-4 pb-14 sm:px-6 sm:pb-20">
      <div className="mx-auto max-w-5xl">

        <div className="mb-5 flex items-end justify-between border-b border-[#dfd8cc] pb-2">
          <div>
            <h2 className="font-serif text-xl font-semibold text-[#173b28] sm:text-2xl">
              Schedules
            </h2>

            <div className="mt-1 h-[2px] w-10 bg-[#f06f1f]" />
          </div>

          {/*<Link
            href="/bnss/schedules"
            className="group flex items-center gap-1 text-[10px] font-medium text-[#f06f1f]"
          >
            View All
            <ArrowRight
              size={12}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>*/}
        </div>

        <div className="grid gap-2.5">
          {bnssSchedules.map((schedule) => (
            <BnssScheduleCard
              key={schedule.number}
              schedule={schedule}
            />
          ))}
        </div>

      </div>
    </section>
  )
}