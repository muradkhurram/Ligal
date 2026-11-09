
import Link from "next/link";
import {
  ArrowLeft,
  ChevronRight,
  FileText,
  List,
} from "lucide-react";

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

      {/* Top navigation */}
      <div className="mx-auto w-full max-w-5xl px-5 pt-5 sm:px-8">

        <Link
          href="/constitution/parts"
          aria-label="Back to all Constitution Parts"
          className="mb-7 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#eadfd2] bg-white text-[#103b2c] transition hover:bg-[#fff0df]"
        >
          <ArrowLeft size={21} />
        </Link>

        {/* Part header */}
        <section className="relative overflow-hidden rounded-[24px] border border-[#eadfd2] bg-white p-5 shadow-sm sm:p-7">

          <div className="absolute inset-y-0 left-0 w-2 bg-[#ed6817]" />

          <div className="flex items-center gap-4 sm:gap-6">

            {/* Roman numeral */}
            <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-[#fff0df] sm:h-24 sm:w-24">
              <span className="font-serif text-4xl font-bold text-[#ed6817] sm:text-5xl">
                I
              </span>
            </div>

            {/* Part information */}
            <div className="min-w-0 flex-1">

              <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-[#ed6817]">
                Constitution of India
              </p>

              <h1 className="font-serif text-2xl leading-tight font-bold text-[#103b2c] sm:text-4xl">
                Part I – The Union and its Territory
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-[#737c76] sm:text-base">

                <div className="flex items-center gap-2">
                  <FileText size={17} />
                  <span>Articles 1–4</span>
                </div>

                <div className="flex items-center gap-2">
                  <List size={18} />
                  <span>4 Articles</span>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Article section heading */}
        <section className="mt-9">

          <div className="mb-5 flex items-center justify-between gap-3">

            <div>
              <h2 className="font-serif text-3xl font-bold text-[#103b2c]">
                Articles
              </h2>

              <div className="mt-2 h-1 w-12 rounded-full bg-[#ed6817]" />
            </div>

            <span className="text-sm font-bold text-[#ed6817] sm:text-base">
              Articles 1–4
            </span>

          </div>

          {/* Article cards */}
          <div className="space-y-3">

            {articles.map((article) => (

              <Link
                key={article.number}
                href={article.href}
                className="group flex min-h-[112px] items-center gap-4 overflow-hidden rounded-[18px] border border-[#eadfd2] bg-white p-3 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#ed6817]/50 hover:shadow-md sm:gap-5 sm:p-4"
              >

                {/* Article number */}
                <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[16px] bg-[#fff0df] sm:h-[82px] sm:w-[82px]">

                  <span className="font-serif text-3xl text-[#ed6817] sm:text-4xl">
                    {article.number}
                  </span>

                </div>

                {/* Article title */}
                <div className="min-w-0 flex-1">

                  <h3 className="font-serif text-xl font-bold text-[#103b2c] sm:text-2xl">
                    Article {article.number}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-sm leading-relaxed font-medium text-[#737c76] sm:text-base">
                    {article.title}
                  </p>

                </div>

                {/* Arrow */}
                <ChevronRight
                  size={23}
                  className="shrink-0 text-[#ed6817] transition-transform group-hover:translate-x-1"
                />

              </Link>

            ))}

          </div>
        </section>

        {/* Source information */}
        <div className="mt-8 rounded-xl border border-[#eadfd2] bg-[#fff7ed] p-4">

          <p className="text-xs font-semibold text-[#737c76]">
            OFFICIAL SOURCE
          </p>

          <p className="mt-1 text-sm font-medium text-[#103b2c]">
            The Constitution of India, 2026 edition.
            Legislative Department, Ministry of Law and Justice.
          </p>

        </div>

      </div>

      {/* Existing navigation */}
      <BottomNavigation />

    </main>
  );
}
