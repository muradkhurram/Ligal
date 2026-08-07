"use client";

import React from "react";
import { Scale, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section 
      aria-label="Ligal Introduction"
      className="relative text-center pt-8 pb-4 px-4 sm:pt-12 sm:pb-6 max-w-2xl mx-auto overflow-hidden"
    >
      {/* Background Radial Glow Accent */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-brand-primary/15 blur-3xl rounded-full pointer-events-none"
      />

      {/* 1. Glassmorphic Crest / Emblem */}
      <motion.div
        initial={{ opacity: 0, y: -12, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center justify-center mb-5"
      >
        <div className="relative group p-4 rounded-2xl glass-panel text-brand-accent shadow-glass">
          {/* Subtle icon hover motion */}
          <Scale className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:rotate-[-6deg]" />
          
          {/* AI Badge Accent */}
          <span className="absolute -top-1.5 -right-1.5 p-1 rounded-full bg-brand-primary text-white shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
        </div>
      </motion.div>

      {/* 2. Brand Headline (Ligal) */}
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-primary"
      >
        Ligal
      </motion.h1>

      {/* 3. Subtitle / Value Proposition */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-3 text-base sm:text-lg text-text-secondary font-medium max-w-md mx-auto leading-relaxed"
      >
        Understand the Law.{" "}
        <span className="text-text-muted block sm:inline">
          Protect Your Rights.
        </span>
      </motion.p>
    </section>
  );
}