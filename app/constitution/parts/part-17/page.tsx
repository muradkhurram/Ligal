import Link from "next/link";
import { ChevronRight } from "lucide-react";
import BottomNavigation from "@/components/navigation/BottomNavigation";

const articles = [
  { number: "343", title: "Official language of the Union." },
  { number: "344", title: "Commission and Committee of Parliament on official language." },
  { number: "345", title: "Official language or languages of a State." },
  { number: "346", title: "Official language for communication between one State and another or between a State and the Union." },
  { number: "347", title: "Special provision relating to language spoken by a section of the population of a State." },
  { number: "348", title: "Language to be used in the Supreme Court and in the High Courts and for Acts, Bills, etc." },
  { number: "349", title: "Special procedure for enactment of certain laws relating to language." },
  { number: "350", title: "Language to be used in representations for redress of grievances." },
  { number: "350A", title: "Facilities for instruction in mother-tongue at primary stage." },
  { number: "350B", title: "Special Officer for linguistic minorities." },
  { number: "351", title: "Directive for development of the Hindi language." },
];

export default function PartSeventeenPage() {
  return (
    <main className="min-h-screen bg-[#fffaf3] pb-36 text-[#103b2c]">
      <div className="mx-auto w-full max-w-5xl px-5 pt-[164px] sm:px-8">
        <section className="relative overflow-hidden rounded-[24px] border border-[#eadfd2] bg-white p-5 shadow-sm sm:p-7">
          <div className="absolute inset-y-0 left-0 w-2 bg-[#ed6817]" />
          <div className="pl-3 sm:pl-4">
            <h1 className="font-serif text-2xl leading-tight font-bold text-[#103b2c] sm:text-4xl">
              Part XVII – Official Language
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-[#737c76] sm:text-base">
              <span>Articles 343–351</span>
              <span>{articles.length} Article entries</span>
            </div>
          </div>
        </section>

        <section className="mt-9">
          <div className="mb-5">
            <h2 className="font-serif text-3xl font-bold text-[#103b2c]">Articles</h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-[#ed6817]" />
          </div>
          <div className="space-y-3">
            {articles.map((article) => (
              <Link
                key={article.number}
                href={`/constitution/articles/${article.number}`}
                className="group flex min-h-[112px] items-center gap-4 overflow-hidden rounded-[18px] border border-[#eadfd2] bg-white p-3 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#ed6817]/50 hover:shadow-md sm:gap-5 sm:p-4"
              >
                <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[16px] bg-[#fff0df] sm:h-[82px] sm:w-[82px]">
                  <span className="font-serif text-3xl text-[#ed6817] sm:text-4xl">{article.number}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-xl font-bold text-[#103b2c] sm:text-2xl">Article {article.number}</h3>
                  <p className="mt-1 line-clamp-2 text-sm leading-relaxed font-medium text-[#737c76] sm:text-base">{article.title}</p>
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