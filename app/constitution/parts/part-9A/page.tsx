import Link from "next/link";
import { ChevronRight } from "lucide-react";
import BottomNavigation from "@/components/navigation/BottomNavigation";

const articles = [
  { number: "243P", title: "Definitions." },
  { number: "243Q", title: "Constitution of Municipalities." },
  { number: "243R", title: "Composition of Municipalities." },
  { number: "243S", title: "Constitution and composition of Wards Committees, etc." },
  { number: "243T", title: "Reservation of seats." },
  { number: "243U", title: "Duration of Municipalities, etc." },
  { number: "243V", title: "Disqualifications for membership." },
  { number: "243W", title: "Powers, authority and responsibilities of Municipalities, etc." },
  { number: "243X", title: "Power to impose taxes by, and Funds of, the Municipalities." },
  { number: "243Y", title: "Finance Commission." },
  { number: "243Z", title: "Audit of accounts of Municipalities." },
  { number: "243ZA", title: "Elections to the Municipalities." },
  { number: "243ZB", title: "Application to Union territories." },
  { number: "243ZC", title: "Part not to apply to certain areas." },
  { number: "243ZD", title: "Committee for district planning." },
  { number: "243ZE", title: "Committee for Metropolitan planning." },
  { number: "243ZF", title: "Continuance of existing laws and Municipalities." },
  { number: "243ZG", title: "Bar to interference by courts in electoral matters." },
];

export default function PartNineAPage() {
  return (
    <main className="min-h-screen bg-[#fffaf3] pb-36 text-[#103b2c]">
      <div className="mx-auto w-full max-w-5xl px-5 pt-[164px] sm:px-8">
        <section className="relative overflow-hidden rounded-[24px] border border-[#eadfd2] bg-white p-5 shadow-sm sm:p-7">
          <div className="absolute inset-y-0 left-0 w-2 bg-[#ed6817]" />
          <div className="pl-3 sm:pl-4">
            <h1 className="font-serif text-2xl leading-tight font-bold sm:text-4xl">
              Part IXA – The Municipalities
            </h1>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[#737c76] sm:text-base">
              <span>Articles 243P–243ZG</span>
              <span>{articles.length} Articles</span>
            </div>
          </div>
        </section>

        <section className="mt-9">
          <div className="mb-5">
            <h2 className="font-serif text-3xl font-bold">Articles</h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-[#ed6817]" />
          </div>
          <div className="space-y-3">
            {articles.map((article) => (
              <Link
                key={article.number}
                href={`/constitution/articles/${article.number}`}
                className="group flex min-h-[112px] items-center gap-4 rounded-[18px] border border-[#eadfd2] bg-white p-3 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#ed6817]/50 hover:shadow-md sm:gap-5 sm:p-4"
              >
                <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[16px] bg-[#fff0df] sm:h-[82px] sm:w-[82px]">
                  <span className="font-serif text-xl text-[#ed6817] sm:text-2xl">{article.number}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-xl font-bold sm:text-2xl">Article {article.number}</h3>
                  <p className="mt-1 line-clamp-2 text-sm font-medium text-[#737c76] sm:text-base">{article.title}</p>
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