
import { constitutionParts } from "@/data/constitution/parts";
import { ConstitutionPartCard } from "@/components/constitution/ConstitutionPartCard";
import BottomNavigation from "@/components/navigation/BottomNavigation";

export default function ConstitutionPartsPage() {
  return (
    <main className="min-h-screen bg-[#fffaf3] text-[#103b2c] pb-32">
      <section className="mx-auto w-full max-w-5xl px-4 pb-10 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <h1 className="mb-8 font-serif text-3xl font-semibold tracking-[-0.03em] text-[#103b2c] sm:text-4xl">
          All Parts
        </h1>

        <div className="space-y-3">
          {constitutionParts.map((part) => (
            <ConstitutionPartCard
              key={part.slug}
              part={part}
            />
          ))}
        </div>
      </section>

      {/* Same bottom navigation used throughout Ligal */}
      <BottomNavigation />
    </main>
  );
}
