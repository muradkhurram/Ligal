import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { constitutionParts } from "@/data/constitution/parts";
import { ConstitutionPartCard } from "./ConstitutionPartCard";

export function ConstitutionParts() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-32 pt-10 sm:px-6 sm:pt-12 lg:px-8">
      
      {/* Section heading */}
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

      {/* Parts */}
      <div className="space-y-3">
        {constitutionParts.map((part) => (
          <ConstitutionPartCard
            key={part.slug}
            part={part}
          />
        ))}
      </div>
    </section>
  );
}