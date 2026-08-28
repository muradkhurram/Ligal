import { Header } from "@/components/header/Header";
import { HeroSection } from "@/components/hero/HeroSection";
import { SearchBar } from "@/components/search/SearchBar";
import { AskLegalAI } from "@/components/cards/AskLegalAI";
import { LawLibrary } from "@/components/cards/LawLibrary";
import NewsSection from "@/components/home/NewsSection";
import BottomNavigation from "@/components/navigation/BottomNavigation";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fffaf3] pb-32 text-[#17352b]">
      <Header />

      <HeroSection />

      <SearchBar />

      <AskLegalAI />

      <LawLibrary />

      <NewsSection />

      <BottomNavigation />
    </main>
  );
}