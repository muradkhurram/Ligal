import { ChevronRight } from "lucide-react";
import { constitutionSchedules } from "@/data/constitution/parts";
import BottomNavigation from "@/components/navigation/BottomNavigation";

export default function ConstitutionSchedulesPage() {
  return (
    <main className="min-h-screen bg-[#fffaf3] text-[#103b2c] pb-32">
      <section className="mx-auto w-full max-w-5xl px-4 pb-10 pt-8 sm:px-6 sm:pt-10 lg:px-8">

        <h1 className="mb-8 font-serif text-3xl font-semibold tracking-[-0.03em] text-[#103b2c] sm:text-4xl">
          All Schedules
        </h1>

        <div className="space-y-3">
          {constitutionSchedules.map((schedule) => (
            <div
              key={schedule.slug}
              className="group relative flex min-h-[94px] items-center overflow-hidden rounded-[20px] border border-[#eee4d8] bg-white/90 px-4 py-4 shadow-[0_5px_20px_rgba(55,45,30,0.045)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ed6817]/20 hover:shadow-[0_10px_28px_rgba(55,45,30,0.08)] sm:min-h-[102px] sm:px-6"
            >
              <span className="absolute inset-y-0 left-0 w-[5px] bg-[#ed6817]" />

              <div className="ml-2 flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[16px] bg-[#fff0df] sm:h-[72px] sm:w-[72px]">
                <span className="font-serif text-2xl font-semibold text-[#ed6817] sm:text-3xl">
                  {schedule.roman}
                </span>
              </div>

              <div className="mx-5 hidden h-12 w-px bg-[#ded4c8] sm:block" />

              <div className="min-w-0 flex-1 py-1 pl-4 sm:pl-0">
                <h2 className="font-serif text-lg font-semibold leading-tight tracking-[-0.015em] text-[#103b2c] sm:text-xl">
                  {schedule.title}
                </h2>

                <p className="mt-1 font-sans text-sm text-[#69736f] sm:text-base">
                  {schedule.description}
                </p>
              </div>

              <ChevronRight
                className="mr-1 shrink-0 text-[#ed6817] sm:mr-2"
                size={24}
                strokeWidth={1.7}
              />
            </div>
          ))}
        </div>
      </section>

      <BottomNavigation />
    </main>
  );
}