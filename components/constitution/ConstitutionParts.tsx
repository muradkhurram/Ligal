import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { constitutionParts } from "@/data/constitution/parts";
import { ConstitutionPartCard } from "./ConstitutionPartCard";

const schedules = [
  {
    roman: "I",
    title: "First Schedule",
    description: "States and Union Territories",
    slug: "schedule-i",
  },
  {
    roman: "II",
    title: "Second Schedule",
    description: "Salaries and Allowances",
    slug: "schedule-ii",
  },
  {
    roman: "III",
    title: "Third Schedule",
    description: "Forms of Oaths and Affirmations",
    slug: "schedule-iii",
  },
  {
    roman: "IV",
    title: "Fourth Schedule",
    description: "Allocation of Seats in the Council of States",
    slug: "schedule-iv",
  },
  {
    roman: "V",
    title: "Fifth Schedule",
    description: "Administration of Scheduled Areas and Scheduled Tribes",
    slug: "schedule-v",
  },

];

export function ConstitutionParts() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-32 pt-10 sm:px-6 sm:pt-12 lg:px-8">

      {/* =========================
          CONSTITUTION PARTS
          ========================= */}

      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-serif text-3xl font-semibold tracking-[-0.03em] text-[#103b2c] sm:text-4xl">
            Constitution Parts
          </h2>

          <span className="mt-3 block h-[3px] w-12 rounded-full bg-[#ed6817]" />
        </div>

        <Link
          href="/constitution/parts"
          className="mb-1 flex shrink-0 items-center gap-2 font-sans text-sm font-semibold text-[#ed6817] transition-opacity hover:opacity-70 sm:text-base"
        >
          View All
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Constitution Parts */}
      <div className="space-y-3">
        {constitutionParts.map((part) => (
          <ConstitutionPartCard
            key={part.slug}
            part={part}
          />
        ))}
      </div>


      {/* =========================
          SCHEDULES
          ========================= */}

      <div className="mb-6 mt-14 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-serif text-3xl font-semibold tracking-[-0.03em] text-[#103b2c] sm:text-4xl">
            Schedules
          </h2>

          <span className="mt-3 block h-[3px] w-12 rounded-full bg-[#ed6817]" />
        </div>

        <Link
          href="/constitution/schedules"
          className="mb-1 flex shrink-0 items-center gap-2 font-sans text-sm font-semibold text-[#ed6817] transition-opacity hover:opacity-70 sm:text-base"
        >
          View All
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Schedules */}
      <div className="space-y-3">
        {schedules.map((schedule) => (
          <Link
            key={schedule.slug}
            href={`/constitution/schedules/${schedule.slug}`}
            className="group relative flex min-h-[94px] items-center overflow-hidden rounded-[20px] border border-[#eee4d8] bg-white/90 px-4 py-4 shadow-[0_5px_20px_rgba(55,45,30,0.045)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ed6817]/20 hover:shadow-[0_10px_28px_rgba(55,45,30,0.08)] sm:min-h-[102px] sm:px-6"
          >
            {/* Orange edge */}
            <span className="absolute inset-y-0 left-0 w-[5px] bg-[#ed6817]" />

            {/* Schedule numeral */}
            <div className="ml-2 flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[18px] bg-[#fff0df] sm:h-[72px] sm:w-[72px]">
              <span className="font-serif text-2xl font-semibold text-[#ed6817] sm:text-3xl">
                {schedule.roman}
              </span>
            </div>

            {/* Divider */}
            <div className="mx-5 hidden h-12 w-px bg-[#ded4c8] sm:block" />

            {/* Schedule text */}
            <div className="min-w-0 flex-1 py-1 pl-4 sm:pl-0">
              <h3 className="font-serif text-lg font-semibold leading-tight tracking-[-0.015em] text-[#103b2c] sm:text-xl">
                {schedule.title}
              </h3>

              <p className="mt-1 font-sans text-sm text-[#69736f] sm:text-base">
                {schedule.description}
              </p>
            </div>

            {/* Arrow */}
            <ChevronRight
              className="mr-1 shrink-0 text-[#ed6817] transition-transform duration-300 group-hover:translate-x-1 sm:mr-2"
              size={24}
              strokeWidth={1.7}
            />
          </Link>
        ))}
      </div>

    </section>
  );
}