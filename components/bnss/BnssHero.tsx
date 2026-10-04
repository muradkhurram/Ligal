import Link from "next/link"
import { ArrowRight, Scale } from "lucide-react"

export function BnssHero() {
  return (
    <section className="relative overflow-hidden px-4 pt-8 sm:px-6 sm:pt-12">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#f4eee3]">

        {/* Decorative shapes */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f47b20]/10 blur-2xl" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-[#0b7339]/10 blur-3xl" />

        <div className="relative grid min-h-[390px] items-center gap-8 px-7 py-12 sm:min-h-[470px] sm:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">

          {/* Text */}
          <div className="relative z-10">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f06f1f]">
              Criminal Procedure · Act No. 46 of 2023
            </p>

            <h1 className="max-w-2xl font-serif text-[3.2rem] leading-[0.9] tracking-[-0.04em] text-[#123b27] sm:text-6xl lg:text-7xl">
              Bharatiya
              <br />
              Nagarik
              <br />
              <span className="text-[#536b5d]">Suraksha Sanhita</span>
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="border border-[#0b7339]/20 bg-white/70 px-3 py-1.5 text-xs font-medium text-[#0b7339]">
                BNSS, 2023
              </span>

              <span className="text-xs text-[#697268]">
                39 Chapters · 531 Sections · 2 Schedules
              </span>
            </div>
          </div>

          {/* Artwork */}
          <div className="relative hidden h-full min-h-[300px] lg:block">

            <div className="absolute right-6 top-1/2 h-[260px] w-[210px] -translate-y-1/2 rotate-[7deg] border border-[#0b7339]/15 bg-[#173b28] p-4 shadow-2xl">
              <div className="flex h-full flex-col justify-between border border-white/15 p-5">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#f5c48d]">
                    The Republic of India
                  </p>

                  <div className="mt-5 h-px bg-[#f5c48d]/30" />

                  <h2 className="mt-6 font-serif text-3xl leading-none text-[#fff8eb]">
                    BNSS
                  </h2>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#f5c48d]">
                    2023
                  </p>
                </div>

                <div className="flex justify-between text-[#f5c48d]">
                  <Scale size={34} strokeWidth={1.2} />
                  <span className="text-[8px] uppercase tracking-[0.2em]">
                    Act 46
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute right-[245px] top-12 h-20 w-20 rounded-full border border-[#f06f1f]/20 bg-[#fff8eb] p-5">
              <Scale className="h-full w-full text-[#f06f1f]" strokeWidth={1.1} />
            </div>

          </div>

          {/* Mobile artwork */}
          <div className="flex items-center justify-center lg:hidden">
            <div className="relative h-48 w-36 rotate-[5deg] bg-[#173b28] p-4 shadow-xl">
              <div className="flex h-full flex-col justify-between border border-white/15 p-4">
                <div>
                  <p className="text-[7px] uppercase tracking-[0.2em] text-[#f5c48d]">
                    The Republic of India
                  </p>
                  <h2 className="mt-5 font-serif text-3xl text-[#fff8eb]">
                    BNSS
                  </h2>
                  <p className="mt-1 text-[8px] uppercase text-[#f5c48d]">
                    2023
                  </p>
                </div>

                <Scale className="text-[#f5c48d]" size={30} strokeWidth={1.1} />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Small information strip */}
      <div className="mx-auto -mt-5 max-w-5xl px-4">
        <Link
          href="/bnss/chapters"
          className="group relative z-20 flex items-center justify-between gap-4 rounded-2xl border border-[#e6ddd0] bg-[#fffdf8] px-5 py-4 shadow-[0_8px_30px_rgba(37,45,36,0.07)] transition-all hover:border-[#0b7339]/30"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff0dc] text-[#f06f1f]">
              <Scale size={20} />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f06f1f]">
                Criminal Procedure
              </p>

              <p className="mt-0.5 text-sm text-[#405447]">
                Explore the Bharatiya Nagarik Suraksha Sanhita, 2023
              </p>
            </div>
          </div>

          <ArrowRight
            size={18}
            className="shrink-0 text-[#f06f1f] transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  )
}