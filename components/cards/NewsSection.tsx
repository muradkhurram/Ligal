"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function KnowYourRights() {
  return (
    <motion.section
      id="know-your-rights"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.4,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="mx-auto w-full max-w-6xl px-4 pb-8 pt-2 sm:px-6 sm:pb-10 sm:pt-4 lg:px-8"
    >
      <div className="relative min-h-[15rem] overflow-hidden rounded-[1.6rem] bg-[#fff0df] px-5 py-6 sm:min-h-[17rem] sm:px-8 sm:py-8 lg:min-h-[18rem]">
        {/* Decorative dots */}
        <div
          aria-hidden="true"
          className="absolute right-[28%] top-[25%] h-24 w-24 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(#ed6817 1.5px, transparent 1.5px)",
            backgroundSize: "10px 10px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[60%] sm:max-w-[55%] lg:max-w-[48%]">
          <h2 className="text-xl font-bold text-[#ed6817] sm:text-2xl lg:text-[1.75rem]">
            Know Your Rights
          </h2>

          <p className="mt-3 text-sm leading-7 text-[#17352b] sm:text-base sm:leading-8">
            Accessible.
            <br />
            Understandable.
            <br />
            Empowering.
          </p>

          <button
            type="button"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#c94f0b] px-4 py-2.5 text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-95 sm:mt-5"
          >
            Learn More
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Responsive law-book visual */}
        <div
          aria-hidden="true"
          className="absolute bottom-[-1rem] right-[2%] h-[12rem] w-[45%] sm:h-[14rem] sm:w-[40%] lg:h-[15rem]"
        >
          {/* Book */}
          <div className="absolute right-[17%] top-[5%] h-[8rem] w-[6rem] rotate-[8deg] rounded-md bg-[#a94416] shadow-[0_15px_25px_rgba(85,45,22,0.20)] sm:h-[10rem] sm:w-[7.5rem]">
            <div className="absolute inset-1 rounded-sm border border-[#f6c58f]/40" />

            <span className="absolute inset-x-0 top-[35%] text-center text-sm font-extrabold tracking-wide text-[#ffd49c] sm:text-base">
              LAW
            </span>

            <span className="absolute bottom-[-0.25rem] left-[30%] h-8 w-3 bg-[#f6a34c]" />
          </div>

          {/* Gavel */}
          <div className="absolute bottom-[13%] right-[-3%] h-16 w-36 rotate-[-25deg] sm:w-44">
            <div className="absolute left-0 top-2 h-7 w-14 rounded-md bg-[#733313] sm:h-8 sm:w-16" />
            <div className="absolute left-11 top-3 h-3 w-28 rounded-full bg-[#a64d19] sm:w-32" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}