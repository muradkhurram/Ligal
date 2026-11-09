import Link from "next/link";
import { ChevronRight } from "lucide-react";
import BottomNavigation from "@/components/navigation/BottomNavigation";

const articles = [
  "264", "265", "266", "267", "268", "268A", "269",
  "269A", "270", "271", "272", "273", "274", "275",
  "276", "277", "278", "279", "279A", "280", "281",
  "282", "283", "284", "285", "286", "287", "288",
  "289", "290", "290A", "291", "292", "293", "294",
  "295", "296", "297", "298", "299", "300", "300A",
];

export default function PartTwelvePage() {
  return (
    <main className="min-h-screen bg-[#fffaf3] pb-36 text-[#103b2c]">
      <div className="mx-auto w-full max-w-5xl px-5 pt-[164px] sm:px-8">

        <section className="relative overflow-hidden rounded-[24px] border border-[#eadfd2] bg-white p-5 shadow-sm sm:p-7">
          <div className="absolute inset-y-0 left-0 w-2 bg-[#ed6817]" />
          <div className="pl-3 sm:pl-4">
            <h1 className="font-serif text-2xl leading-tight font-bold text-[#103b2c] sm:text-4xl">
              Part XII – Finance, Property, Contracts and Suits
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-[#737c76] sm:text-base">
              <span>Articles 264–300A</span>
              <span>{articles.length} Article Entries</span>
            </div>
          </div>
        </section>

        <section className="mt-9">
          <div className="mb-5">
            <h2 className="font-serif text-3xl font-bold text-[#103b2c]">
              Articles
            </h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-[#ed6817]" />
          </div>

          <div className="space-y-3">
            {articles.map((number) => (
              <Link
                key={number}
                href={`/constitution/articles/${number}`}
                className="group flex min-h-[112px] items-center gap-4 overflow-hidden rounded-[18px] border border-[#eadfd2] bg-white p-3 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#ed6817]/50 hover:shadow-md sm:gap-5 sm:p-4"
              >
                <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[16px] bg-[#fff0df] sm:h-[82px] sm:w-[82px]">
                  <span className="font-serif text-3xl text-[#ed6817] sm:text-4xl">
                    {number}
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-xl font-bold text-[#103b2c] sm:text-2xl">
                    Article {number}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm leading-relaxed font-medium text-[#737c76] sm:text-base">
                    Read constitutional provision
                  </p>
                </div>

                <ChevronRight size={23} className="shrink-0 text-[#ed6817] transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </section>
      </div>
      <BottomNavigation />
    </main>
  );
}