import { ConstitutionHero } from "@/components/constitution/ConstitutionHero";
import { PreambleCard } from "@/components/constitution/PreambleCard";
import { ConstitutionParts } from "@/components/constitution/ConstitutionParts";
import BottomNavigation from "@/components/navigation/BottomNavigation";

export default function ConstitutionPage() {
  return (
    <main className="min-h-screen bg-[#fffaf3] text-[#103b2c]">
      <ConstitutionHero />

      <PreambleCard />

      <ConstitutionParts />

      {/* EXACT SAME navigation component used by homepage */}
      <BottomNavigation />
    </main>
  );
}