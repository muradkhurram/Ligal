import Link from "next/link";
import { ChevronRight } from "lucide-react";
import BottomNavigation from "@/components/navigation/BottomNavigation";

const articles = [
  { number: "369", title: "Temporary power to Parliament to make laws with respect to certain matters in the State List as if they were matters in the Concurrent List." },
  { number: "370", title: "Temporary provisions with respect to the State of Jammu and Kashmir." },
  { number: "371", title: "Special provision with respect to the States of Maharashtra and Gujarat." },
  { number: "371A", title: "Special provision with respect to the State of Nagaland." },
  { number: "371B", title: "Special provision with respect to the State of Assam." },
  { number: "371C", title: "Special provision with respect to the State of Manipur." },
  { number: "371D", title: "Special provisions with respect to the State of Andhra Pradesh or the State of Telangana." },
  { number: "371E", title: "Establishment of Central University in Andhra Pradesh." },
  { number: "371F", title: "Special provisions with respect to the State of Sikkim." },
  { number: "371G", title: "Special provision with respect to the State of Mizoram." },
  { number: "371H", title: "Special provision with respect to the State of Arunachal Pradesh." },
  { number: "371I", title: "Special provision with respect to the State of Goa." },
  { number: "371J", title: "Special provisions with respect to the State of Karnataka." },
  { number: "372", title: "Continuance in force of existing laws and their adaptation." },
  { number: "372A", title: "Power of the President to adapt laws." },
  { number: "373", title: "Power of President to make order in respect of persons under preventive detention in certain cases." },
  { number: "374", title: "Provisions as to Judges of the Federal Court and proceedings pending in the Federal Court or before His Majesty in Council." },
  { number: "375", title: "Courts, authorities and officers to continue to function subject to the provisions of the Constitution." },
  { number: "376", title: "Provisions as to Judges of High Courts." },
  { number: "377", title: "Provisions as to Comptroller and Auditor-General of India." },
  { number: "378", title: "Provisions as to Public Service Commissions." },
  { number: "378A", title: "Special provision as to duration of Andhra Pradesh Legislative Assembly." },
  { number: "392", title: "Power of the President to remove difficulties." },
];

export default function PartTwentyOnePage() {
  return (
    <main className="min-h-screen bg-[#fffaf3] pb-36 text-[#103b2c]">
      <div className="mx-auto w-full max-w-5xl px-5 pt-[164px] sm:px-8">
        <section className="relative overflow-hidden rounded-[24px] border border-[#eadfd2] bg-white p-5 shadow-sm sm:p-7">
          <div className="absolute inset-y-0 left-0 w-2 bg-[#ed6817]" />
          <div className="pl-3 sm:pl-4">
            <h1 className="font-serif text-2xl leading-tight font-bold text-[#103b2c] sm:text-4xl">
              Part XXI – Temporary, Transitional and Special Provisions
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-[#737c76] sm:text-base">
              <span>Articles 369–392</span>
              <span>{articles.length} Article entries</span>
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
                href={`/constitution/articles/${article.number}`}
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