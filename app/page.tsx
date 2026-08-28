import { Header } from "@/components/header/Header";
import { HeroSection } from "@/components/hero/HeroSection";
import { SearchBar } from "@/components/search/SearchBar";
import { AskLegalAI } from "@/components/cards/AskLegalAI";
import { LawLibrary } from "@/components/cards/LawLibrary";
import { KnowYourRights } from "@/components/cards/KnowYourRights";
import BottomNavigation from "@/components/navigation/BottomNavigation";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fffaf3] pb-32 text-[#17352b]">
      <Header />

      <HeroSection />

      <SearchBar />

      <AskLegalAI />

      <LawLibrary />

      <KnowYourRights />

      <BottomNavigation />
    </main>
  );
}