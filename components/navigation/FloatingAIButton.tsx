"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface FloatingAIButtonProps {
  onClick?: () => void;
}

export function FloatingAIButton({
  onClick,
}: FloatingAIButtonProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.94 }}
      onClick={onClick}
      aria-label="Ask Legal AI"
      className="relative flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full border-[3px] border-white bg-[#ed6817] text-white shadow-[0_8px_22px_rgba(237,104,23,0.30)] sm:h-[4.75rem] sm:w-[4.75rem]"
    >
      <span
        aria-hidden="true"
        className="absolute -inset-1 rounded-full bg-[#ed6817]/15 blur-md"
      />

      <Sparkles className="relative z-10 h-7 w-7 stroke-[1.8] sm:h-8 sm:w-8" />
    </motion.button>
  );
}

export default FloatingAIButton;