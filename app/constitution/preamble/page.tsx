
import Image from "next/image";
import BottomNavigation from "@/components/navigation/BottomNavigation";

export default function PreamblePage() {
  return (
    <main className="min-h-screen bg-[#fffaf3] pb-32">

      {/* Clean Preamble display */}
      <section className="mx-auto flex w-full max-w-4xl justify-center px-3 py-6 sm:px-6 sm:py-10">

        <Image
          src="/images/constitution/preamble.png"
          alt="The Preamble of the Constitution of India"
          width={1024}
          height={1536}
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="h-auto w-full max-w-3xl object-contain"
        />

      </section>

      {/* Existing bottom navigation */}
      <BottomNavigation />

    </main>
  );
}
