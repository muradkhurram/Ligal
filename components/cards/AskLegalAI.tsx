"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function AskLegalAI() {
  return (
    <motion.section
      id="ask-legal-ai"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: 0.28,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8"
    >
      <button
        type="button"
        className="group flex min-h-[4.5rem] w-full items-center gap-3 rounded-[1.35rem] border border-[#eadfd3] bg-white/70 px-4 text-left shadow-[0_5px_18px_rgba(84,52,26,0.035)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(84,52,26,0.08)] sm:min-h-[5rem] sm:gap-4 sm:px-5"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0df] text-[#ed6817] sm:h-12 sm:w-12">
          <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
        </span>

        <span className="min-w-0 flex-1 text-sm font-medium text-[#17352b] sm:text-base lg:text-lg">
          Ask Legal AI anything about Indian Law
        </span>

        <ArrowRight className="h-5 w-5 shrink-0 text-[#ed6817] transition-transform group-hover:translate-x-1" />
      </button>
    </motion.section>
  );
}