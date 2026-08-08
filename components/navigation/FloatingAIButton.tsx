"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function FloatingAIButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label="AI Search"
      className="absolute left-1/2 -translate-x-1/2 -top-8 z-50 h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-2xl border border-white/20 flex items-center justify-center"
    >
      <Plus className="w-9 h-9 text-white stroke-[2.5]" />
    </motion.button>
  );
}
