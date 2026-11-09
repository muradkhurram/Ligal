
import Link from "next/link";

{/*import {
  ArrowLeft,
  ChevronRight,
} from "lucide-react";*/}

import BottomNavigation from "@/components/navigation/BottomNavigation";

import { article1 } from "./article-1";
import { article2 } from "./article-2";
import { article3 } from "./article-3";
import { article4 } from "./article-4";

const articles = [
  article1,
  article2,
  article3,
  article4,
];

export default function PartOnePage() {
  return (
    <main className="min-h-screen bg-[#fffaf3] pb-36 text-[#103b2c]">

      <div className="mx-auto w-full max-w-5xl px-5 pt-5 sm:px-8">

        {/* Back navigation */}
        {/*<Link
          href="/constitution/parts"
          aria-label="Back to all Constitution Parts"
          className="mb-7 inline-flex h-11 w-11 items-center justify-center border border-[#eadfd2] bg-white text-[#103b2c] transition hover:bg-[#fff0df]"
        >
          <ArrowLeft size={21} />
        </Link>*/}

        {/* Part heading */}
        <section className="relative border border-[#eadfd2] bg-white p-5 shadow-sm sm:p-7">

          <div className="absolute inset-y-0 left-0 w-2 bg-[#ed6817]" />

          <div className="pl-3 sm:pl-4">

            <h1 className="font-serif text-2xl leading-tight font-bold text-[#103b2c] sm:text-4xl">
              Part I – The Union and its Territory
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-[#737c76] sm:text-base">

              <span>Articles 1–4</span>

              <span>4 Articles</span>

            </div>

          </div>

        </section>

        {/* Articles heading */}
        <section className="mt-9">

          <div className="mb-5">

            <h2 className="font-serif text-3xl font-bold text-[#103b2c]">
              Articles
            </h2>

            <div className="mt-2 h-1 w-12 bg-[#ed6817]" />

          </div>

          {/* Article cards */}
          <div className="space-y-3">

            {articles.map((article) => (

              <Link
                key={article.number}
                href={article.href}
                className="group flex min-h-[112px] items-center gap-4 border border-[#eadfd2] bg-white p-3 shadow-sm transition duration-200 hover:border-[#ed6817]/50 hover:shadow-md sm:gap-5 sm:p-4"
              >

                {/* Article number */}
                <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center border border-[#f2e4d1] bg-[#fff0df] sm:h-[82px] sm:w-[82px]">

                  <span className="font-serif text-3xl text-[#ed6817] sm:text-4xl">
                    {article.number}
                  </span>

                </div>

                {/* Article information */}
                <div className="min-w-0 flex-1">

                  <h3 className="font-serif text-xl font-bold text-[#103b2c] sm:text-2xl">
                    Article {article.number}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-sm leading-relaxed font-medium text-[#737c76] sm:text-base">
                    {article.title}
                  </p>

                </div>

                {/* Navigation arrow */}
                {/*<ChevronRight
                  size={23}
                  className="shrink-0 text-[#ed6817] transition-transform group-hover:translate-x-1"
                />*/}

              </Link>

            ))}

          </div>

        </section>

      </div>

      {/* Existing bottom navigation */}
      <BottomNavigation />

    </main>
  );
}
