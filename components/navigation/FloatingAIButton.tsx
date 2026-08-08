"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export function FloatingAIButton() {
  return (
    <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto flex flex-col items-center">
      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Ask Ligal AI"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-brand-primary via-blue-600 to-brand-accent text-white shadow-ai-glow border border-white/20 focus:outline-hidden group"
      >
        {/* Soft Ambient Glow Behind Button */}
        <div 
          aria-hidden="true" 
          className="absolute -inset-1.5 rounded-full bg-brand-accent/25 blur-lg pointer-events-none group-hover:bg-brand-accent/45 transition-all"
        />

        {/* Center Plus Icon */}
        <Plus className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 stroke-[2.5] transition-transform duration-200 group-hover:rotate-90" />
      </motion.button>

      {/* Label positioned slightly lower for visual alignment */}
      <span 
        className="mt-1 text-[10px] font-semibold text-text-muted/80 tracking-tight select-none"
        aria-hidden="true"
      >
        Ask Ligal AI
      </span>
    </div>
  );
}

export default FloatingAIButton;