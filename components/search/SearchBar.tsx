"use client";

import { useRef, useEffect } from "react";
import { Search, Sparkles, Command } from "lucide-react";
import { motion } from "framer-motion";

export function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
    >
      <div className="relative flex min-h-[4.5rem] items-center gap-3 rounded-[1.4rem] border border-[#eadfd3] bg-white px-4 shadow-[0_8px_28px_rgba(84,52,26,0.07)] transition-shadow focus-within:shadow-[0_10px_32px_rgba(84,52,26,0.11)] sm:min-h-24 sm:gap-4 sm:px-6">
        <label htmlFor="legal-search-input" className="sr-only">
          Search legal frameworks, sections, judgments, or ask AI
        </label>

        {/* Search icon */}
        <Search className="h-6 w-6 shrink-0 text-[#ed6817] sm:h-7 sm:w-7" />

        {/* Input */}
        <input
          ref={inputRef}
          id="legal-search-input"
          type="search"
          placeholder="Search legal frameworks, sections, cases, keywords..."
          className="min-w-0 flex-1 border-0 bg-transparent text-sm text-[#17352b] outline-none placeholder:text-[#8d8d8b] sm:text-base lg:text-lg"
        />

        {/* Keyboard shortcut */}
        <kbd className="hidden shrink-0 items-center gap-0.5 rounded-md border border-[#eadfd3] bg-[#fffaf3] px-2 py-1 text-[10px] font-medium text-[#8d8d8b] sm:inline-flex">
          <Command className="h-3 w-3" />
          K
        </kbd>

        {/* AI button */}
        <button
          type="button"
          aria-label="Ask Legal AI"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.9rem] bg-[#ed6817] text-white shadow-[0_6px_16px_rgba(237,104,23,0.25)] transition-transform hover:scale-[1.03] active:scale-95 sm:h-14 sm:w-14"
        >
          <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
    </motion.div>
  );
}