import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ConstitutionPart } from "@/data/constitution/parts";

type Props = {
  part: ConstitutionPart;
};

export function ConstitutionPartCard({ part }: Props) {
  return (
    <Link
      href={`/constitution/parts/${part.slug}`}
      className="group relative flex min-h-[94px] items-center overflow-hidden rounded-[20px] border border-[#eee4d8] bg-white/90 px-4 py-4 shadow-[0_5px_20px_rgba(55,45,30,0.045)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ed6817]/20 hover:shadow-[0_10px_28px_rgba(55,45,30,0.08)] sm:min-h-[102px] sm:px-6"
    >
      {/* Orange edge */}
      <span className="absolute inset-y-0 left-0 w-[5px] bg-[#ed6817]" />

      {/* Roman numeral */}
      <div className="ml-2 flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#fff0df] sm:h-[72px] sm:w-[72px]">
        <span className="font-serif text-2xl font-semibold text-[#ed6817] sm:text-3xl">
          {part.roman}
        </span>
      </div>

      {/* Divider */}
      <div className="mx-5 hidden h-12 w-px bg-[#ded4c8] sm:block" />

      {/* Text */}
      <div className="min-w-0 flex-1 py-1 pl-4 sm:pl-0">
        <h3 className="font-serif text-lg font-semibold leading-tight tracking-[-0.015em] text-[#103b2c] sm:text-xl">
          {part.title}
        </h3>

        <p className="mt-1 font-sans text-sm text-[#69736f] sm:text-base">
          {part.articles}
        </p>
      </div>

      {/* Arrow */}
      <ChevronRight
        className="mr-1 shrink-0 text-[#ed6817] transition-transform duration-300 group-hover:translate-x-1 sm:mr-2"
        size={24}
        strokeWidth={1.7}
      />
    </Link>
  );
}