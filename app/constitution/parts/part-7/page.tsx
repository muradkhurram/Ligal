
import BottomNavigation from "@/components/navigation/BottomNavigation";

export default function PartSevenPage() {
  return (
    <main className="min-h-screen bg-[#fffaf3] pb-36 text-[#103b2c]">
      <div className="mx-auto w-full max-w-5xl px-5 pt-[164px] sm:px-8">

        <section className="relative overflow-hidden rounded-[24px] border border-[#eadfd2] bg-white p-5 shadow-sm sm:p-7">
          <div className="absolute inset-y-0 left-0 w-2 bg-[#ed6817]" />
          <div className="pl-3 sm:pl-4">
            <h1 className="font-serif text-2xl leading-tight font-bold text-[#103b2c] sm:text-4xl">
              Part VII – The States in Part B of the First Schedule
            </h1>
            <div className="mt-4 text-sm font-semibold text-[#737c76] sm:text-base">
              Repealed
            </div>
          </div>
        </section>

        <section className="mt-9">
          <h2 className="font-serif text-3xl font-bold text-[#103b2c]">
            Constitutional Status
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-[#ed6817]" />

          <div className="mt-5 rounded-[18px] border border-[#eadfd2] bg-white p-5 shadow-sm sm:p-6">
            <p className="text-base leading-relaxed font-medium text-[#737c76]">
              Part VII was repealed by the Constitution (Seventh Amendment)
              Act, 1956. It is retained here for historical and constitutional
              reference.
            </p>
          </div>
        </section>

      </div>
      <BottomNavigation />
    </main>
  );
}
