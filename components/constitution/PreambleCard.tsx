import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PreambleCard() {
  return (
    <section className="relative z-10 mx-auto -mt-2 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <Link
        href="/constitution/preamble"
        className="
          group
          relative
          flex
          min-h-[138px]
          items-center
          overflow-hidden
          rounded-[24px]
          border
          border-[#eadfd2]
          bg-white/95
          shadow-[0_12px_35px_rgba(55,45,30,0.08)]
          backdrop-blur-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_18px_45px_rgba(55,45,30,0.12)]
          sm:min-h-[145px]
          lg:min-h-[150px]
        "
      >
        {/* Orange vertical accent */}
        <span className="absolute inset-y-0 left-0 w-[5px] bg-[#ed6817]" />

        {/* Ashoka Emblem */}
        <div
          className="
            ml-5
            flex
            h-[82px]
            w-[82px]
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-full
            bg-[#fff0df]
            sm:ml-7
            sm:h-[92px]
            sm:w-[92px]
            lg:h-[96px]
            lg:w-[96px]
          "
        >
          <Image
            src="/images/constitution/ashoka-emblem.png"
            alt="Ashoka Emblem of India"
            width={500}
            height={500}
            priority
            className="h-full w-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1 px-5 py-5 sm:px-8 sm:py-5">

          
          <p className="mb-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#ed6817] sm:text-[11px]">
            The Soul of the Constitution
          </p>
          

          <h2 className="font-serif text-[1.45rem] font-semibold leading-tight tracking-[-0.02em] text-[#103b2c] sm:text-3xl">
            Preamble
          </h2>

          <p className="mt-1.5 line-clamp-2 max-w-3xl font-sans text-sm leading-relaxed text-[#66716f] sm:text-base">
            We, the People of India, having solemnly resolved to constitute
            India into a Sovereign Socialist Secular Democratic Republic and
            to secure to all its citizens...
          </p>
        </div>

        {/* Arrow */}
        <div
          className="
            mr-4
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#fff0df]
            text-[#ed6817]
            transition-transform
            duration-300
            group-hover:translate-x-1
            sm:mr-8
            sm:h-12
            sm:w-12
          "
        >
          <ArrowRight size={21} strokeWidth={1.8} />
        </div>
      </Link>
    </section>
  );
}