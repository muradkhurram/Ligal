"use client";

import { motion } from "framer-motion";
import { Scale } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  return (
    <section
      aria-label="LiGal Introduction"
      className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center overflow-hidden px-4 pb-3 pt-6 sm:px-6 sm:pb-6 sm:pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pt-4"
    >
      {/* Brand content */}
      <motion.div
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="relative z-10 py-5 sm:py-7 lg:py-10"
      >
        <div className="mb-3 w-fit text-[#ed6817] sm:mb-4">
          <Scale className="h-14 w-14 stroke-[1.7] sm:h-[4.5rem] sm:w-[4.5rem] lg:h-20 lg:w-20" />
        </div>

        <h1 className="text-[4.25rem] font-extrabold leading-[0.85] tracking-[-0.07em] text-[#ed6817] sm:text-[5.5rem] lg:text-[7rem]">
          LiGal
        </h1>

        <p className="mt-5 text-[1.15rem] font-semibold leading-[1.5] text-[#103b2c] sm:mt-6 sm:text-2xl lg:text-[1.65rem]">
          Understand the Law.
          <br />
          Protect Rights.
        </p>
      </motion.div>

      {/* Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        className="relative h-[15rem] min-w-0 sm:h-[20rem] lg:h-[25rem]"
        aria-hidden="true"
      >
        {/* Orange circle */}
        <div className="absolute left-[15%] top-[5%] aspect-square w-[12rem] rounded-full bg-[#ed6817] sm:left-[17%] sm:w-[17rem] lg:left-[15%] lg:w-[22rem]" />

        {/* Decorative dots */}
        <div
          className="absolute left-[2%] top-[38%] h-24 w-28 opacity-40 sm:left-[5%]"
          style={{
            backgroundImage:
              "radial-gradient(#ed6817 1.5px, transparent 1.5px)",
            backgroundSize: "10px 10px",
          }}
        />

        {/* Birds */}
        <div className="absolute left-[17%] top-[7%] z-10 flex gap-5 text-xl font-bold text-[#ed6817] sm:text-2xl">
          <span className="-rotate-12">⌁</span>
          <span className="translate-y-4 scale-75 rotate-6">⌁</span>
        </div>

        {/* Simplified responsive Supreme Court illustration */}
        <div className="absolute bottom-0 right-[-4%] h-[92%] w-[88%] max-w-[34rem] sm:right-[0%] sm:w-[85%]">
          {/* Dome */}
          <div className="absolute left-[19%] top-0 h-[43%] w-[62%] rounded-[50%_50%_12%_12%] border-2 border-[#c9a27f]/40 bg-[#fffaf1] shadow-[inset_0_-12px_rgba(165,83,42,0.10)]" />

          {/* Dome base */}
          <div className="absolute left-[15%] top-[36%] h-[8%] w-[70%] rounded-t-lg bg-[#874728]" />

          {/* Central building */}
          <div className="absolute bottom-0 left-[7%] h-[58%] w-[86%] overflow-hidden rounded-t-xl bg-[#f5e5d3] shadow-[0_10px_25px_rgba(80,50,30,0.10)]">
            {/* Red/brown band */}
            <div className="absolute left-0 right-0 top-0 h-[17%] bg-[#874728]" />

            {/* Columns */}
            <div className="absolute left-[15%] right-[15%] top-[18%] flex h-[58%] justify-between">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className="h-full w-[8%] border-x border-[#c9a27f]/30 bg-[#fff8ef]"
                />
              ))}
            </div>

            {/* Lower building */}
            <div className="absolute bottom-0 left-0 right-0 h-[28%] bg-[#bd7950]" />

            {/* Indian flag */}
            <div className="absolute left-1/2 top-[27%] h-[4.5rem] w-1 -translate-x-1/2 bg-[#6d4c38]">
              <div className="absolute left-1 top-2 h-5 w-8 bg-[linear-gradient(to_bottom,#ed7c22_0_33%,#fff_33%_66%,#24844b_66%)]" />
            </div>
          </div>

          {/* Side domes */}
          <div className="absolute bottom-[17%] left-0 h-[22%] w-[15%] rounded-t-full bg-[#f8eee2] shadow-[inset_0_-8px_#874728]" />
          <div className="absolute bottom-[17%] right-0 h-[22%] w-[15%] rounded-t-full bg-[#f8eee2] shadow-[inset_0_-8px_#874728]" />
        </div>
      </motion.div>
    </section>
  );
}