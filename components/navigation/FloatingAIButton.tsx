"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export function FloatingAIButton() {
  return (
    <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Ask Ligal AI"
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-brand-primary via-blue-600 to-brand-accent text-white shadow-ai-glow border border-white/20 focus:outline-hidden group"
      >
        {/* Soft Ambient Glow Behind Button */}
        <div 
          aria-hidden="true" 
          className="absolute -inset-1 rounded-full bg-brand-accent/20 blur-md pointer-events-none group-hover:bg-brand-accent/40 transition-all"
        />

        {/* Center Plus Icon */}
        <Plus className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 stroke-[2.5] transition-transform duration-200 group-hover:rotate-90" />
      </motion.button>
    </div>
  );
}

export default FloatingAIButton;