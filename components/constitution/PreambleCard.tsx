import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PreambleCard() {
  return (
    <section className="relative z-10 mx-auto -mt-2 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <Link
        href="/constitution/preamble"
        className="group relative flex min-h-[150px] items-center overflow-hidden rounded-[24px] border border-[#eadfd2] bg-white/95 shadow-[0_12px_35px_rgba(55,45,30,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(55,45,30,0.12)]"
      >
        {/* Orange vertical accent */}
        <span className="absolute inset-y-0 left-0 w-[5px] bg-[#ed6817]" />

        {/* Emblem */}
        <div className="ml-5 flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#fff0df] sm:ml-7 sm:h-28 sm:w-28">
          <div className="text-center">
            <span className="font-serif text-4xl font-bold text-[#ed6817]">
              अशोक
            </span>
            <span className="mt-1 block font-sans text-[7px] font-bold uppercase tracking-[0.18em] text-[#ed6817]">
              Emblem
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1 px-5 py-7 sm:px-8">
          <p className="mb-2 font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#ed6817]">
            Preamble
          </p>

          <h2 className="font-serif text-2xl font-semibold leading-tight tracking-[-0.02em] text-[#103b2c] sm:text-3xl">
            The Soul of the Constitution
          </h2>

          <p className="mt-2 line-clamp-2 max-w-3xl font-sans text-sm leading-relaxed text-[#66716f] sm:text-base">
            We, the People of India, having solemnly resolved to constitute
            India into a Sovereign Socialist Secular Democratic Republic and
            to secure to all its citizens...
          </p>
        </div>

        {/* Arrow */}
        <div className="mr-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fff0df] text-[#ed6817] transition-transform duration-300 group-hover:translate-x-1 sm:mr-8">
          <ArrowRight size={22} strokeWidth={1.8} />
        </div>
      </Link>
    </section>
  );
}