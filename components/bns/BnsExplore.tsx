"use client";

import { BnsHero } from "./BnsHero";
import { BnsChapters } from "./BnsChapters";
import BottomNavigation from "@/components/navigation/BottomNavigation";

export function BnsExplore() {
  return (
    <main className="min-h-screen bg-[#fffaf4] pb-28">
      <div className="mx-auto w-full max-w-[960px]">
        <BnsHero />
        <BnsChapters />
      </div>

      <BottomNavigation />
    </main>
  );
}