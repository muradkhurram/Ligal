"use client";

import React, { useRef, useEffect } from "react";
import { Search, Sparkles, Command } from "lucide-react";
import { motion } from "framer-motion";

export function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut (⌘K or /) to focus search bar quickly
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-md sm:max-w-xl mx-auto px-4 my-6"
    >
      <div className="relative group">
        {/* Accessible Form Label for Screen Readers */}
        <label htmlFor="legal-search-input" className="sr-only">
          Search legal frameworks, sections, judgments, or ask AI
        </label>

        {/* Search Input Field */}
        <input
          ref={inputRef}
          id="legal-search-input"
          type="text"
          placeholder="Search legal frameworks, sections, judgments, or ask AI"
          className="w-full h-14 pl-12 pr-24 rounded-2xl glass-panel text-text-primary placeholder:text-text-muted text-sm sm:text-base focus:outline-hidden focus:ring-2 focus:ring-brand-accent/60 focus:border-transparent transition-all shadow-glass"
        />

        {/* Left Icon: Search Lens */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted group-focus-within:text-brand-accent transition-colors">
          <Search className="w-5 h-5" />
        </div>

        {/* Right Action Stack: Keyboard Shortcut & AI Indicator */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none">
          {/* Desktop Keyboard Badge */}
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-1 text-[10px] font-medium text-text-muted bg-surface-glass border border-surface-glass-border rounded-md">
            <Command className="w-3 h-3" />K
          </kbd>

          {/* AI Feature Sparkle Badge */}
          <div 
            className="p-1.5 rounded-lg bg-brand-primary/20 text-brand-accent border border-brand-primary/30"
            title="AI Search Enabled"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}