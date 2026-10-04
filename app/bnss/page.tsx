import { BnssHero } from "@/components/bnss/BnssHero";
import { BnssChapters } from "@/components/bnss/BnssChapters";
import { BnssSchedule } from "@/components/bnss/BnssSchedule";
import  BottomNavigation  from "@/components/navigation/BottomNavigation";

export default function BnssPage() {
  return (
    <main className="min-h-screen bg-[#fbf8f1] text-[#173b28]">

      <BnssHero />

      <BnssChapters />

      <BnssSchedule />

      <BottomNavigation />

    </main>
  );
}