import { HeroSection } from "@/components/hero/HeroSection";
import { SearchBar } from "@/components/search/SearchBar";
import { LawLibrary } from "@/components/cards/LawLibrary";
import BottomNavigation from "@/components/navigation/BottomNavigation";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SearchBar />
      <LawLibrary />
      <BottomNavigation />

    </main>
  );
}