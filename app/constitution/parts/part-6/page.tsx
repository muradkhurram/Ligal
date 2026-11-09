
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import BottomNavigation from "@/components/navigation/BottomNavigation";

const articles = Array.from({ length: 86 }, (_, index) => {
  const number = index + 152;
  return {
    number: String(number),
    title: "Read constitutional provision",
    href: `/constitution/articles/${number}`,
  };
});

export default function PartSixPage() {
  return (
    <main className="min-h-screen bg-[#fffaf3] pb-36 text-[#103b2c]">
      <div className="mx-auto w-full max-w-5xl px-5 pt-[164px] sm:px-8">
        <section className="relative overflow-hidden rounded-[24px] border border-[#eadfd2] bg-white p-5 shadow-sm sm:p-7">
          <div className="absolute inset-y-0 left-0 w-2 bg-[#ed6817]" />
          <div className="pl-3 sm:pl-4">
            <h1 className="font-serif text-2xl leading-tight font-bold text-[#103b2c] sm:text-4xl">
              Part VI – The States
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-[#737c76] sm:text-base">
              <span>Articles 152–237</span>
              <span>86 Article Numbers</span>
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
            {articles.map((article) => (
              <Link
                key={article.number}
                href={article.href}
                className="group flex min-h-[112px] items-center gap-4 overflow-hidden rounded-[18px] border border-[#eadfd2] bg-white p-3 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#ed6817]/50 hover:shadow-md sm:gap-5 sm:p-4"
              >
                <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[16px] bg-[#fff0df] sm:h-[82px] sm:w-[82px]">
                  <span className="font-serif text-3xl text-[#ed6817] sm:text-4xl">
                    {article.number}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-xl font-bold text-[#103b2c] sm:text-2xl">
                    Article {article.number}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm leading-relaxed font-medium text-[#737c76] sm:text-base">
                    {article.title}
                  </p>
                </div>
                <ChevronRight
                  size={23}
                  className="shrink-0 text-[#ed6817] transition-transform group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>
        </section>
      </div>
      <BottomNavigation />
    </main>
  );
}
