import Link from "next/link";
import { ChevronRight } from "lucide-react";
import BottomNavigation from "@/components/navigation/BottomNavigation";

const articles = [
  { number: "330", title: "Reservation of seats for Scheduled Castes and Scheduled Tribes in the House of the People." },
  { number: "330A", title: "Reservation of seats for women in the House of the People." },
  { number: "331", title: "Representation of the Anglo-Indian community in the House of the People." },
  { number: "332", title: "Reservation of seats for Scheduled Castes and Scheduled Tribes in the Legislative Assemblies of the States." },
  { number: "332A", title: "Reservation of seats for women in the Legislative Assemblies of the States." },
  { number: "333", title: "Representation of the Anglo-Indian community in the Legislative Assemblies of the States." },
  { number: "334", title: "Reservation of seats and special representation to cease after certain period." },
  { number: "334A", title: "Reservation of seats for women take effect." },
  { number: "335", title: "Claims of Scheduled Castes and Scheduled Tribes to services and posts." },
  { number: "336", title: "Special provision for Anglo-Indian community in certain services." },
  { number: "337", title: "Special provision with respect to educational grants for the benefit of Anglo-Indian Community." },
  { number: "338", title: "National Commission for Scheduled Castes." },
  { number: "338A", title: "National Commission for Scheduled Tribes." },
  { number: "338B", title: "National Commission for Backward Classes." },
  { number: "339", title: "Control of the Union over the administration of Scheduled Areas and the welfare of Scheduled Tribes." },
  { number: "340", title: "Appointment of a Commission to investigate the conditions of backward classes." },
  { number: "341", title: "Scheduled Castes." },
  { number: "342", title: "Scheduled Tribes." },
  { number: "342A", title: "Socially and educationally backward classes." },
];

export default function PartSixteenPage() {
  return (
    <main className="min-h-screen bg-[#fffaf3] pb-36 text-[#103b2c]">
      <div className="mx-auto w-full max-w-5xl px-5 pt-[164px] sm:px-8">
        <section className="relative overflow-hidden rounded-[24px] border border-[#eadfd2] bg-white p-5 shadow-sm sm:p-7">
          <div className="absolute inset-y-0 left-0 w-2 bg-[#ed6817]" />
          <div className="pl-3 sm:pl-4">
            <h1 className="font-serif text-2xl leading-tight font-bold text-[#103b2c] sm:text-4xl">
              Part XVI – Special Provisions Relating to Certain Classes
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-[#737c76] sm:text-base">
              <span>Articles 330–342A</span>
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