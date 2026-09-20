import Image from "next/image";

export function ConstitutionHero() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf3]">
      <div className="relative mx-auto min-h-[430px] w-full max-w-7xl overflow-hidden px-6 pt-8 sm:px-10 lg:min-h-[470px] lg:px-14">

        {/* Decorative glow */}
        <div
          aria-hidden="true"
          className="absolute right-[18%] top-20 h-44 w-44 rounded-full bg-[#ed6817]/10 blur-[2px]"
        />

        {/* Birds */}
        <div className="absolute right-[28%] top-20 text-[#ed6817]/60">
          ︵
        </div>

        <div className="absolute right-[20%] top-28 text-[#ed6817]/50">
          ︵
        </div>

        {/* Hero text */}
        <div className="relative z-10 max-w-[650px] pt-4 sm:pt-8 lg:pt-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#ed6817]" />

            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6b746f]">
              The Republic of India
            </span>
          </div>

          <h1 className="font-serif text-[3.7rem] font-semibold leading-[0.88] tracking-[-0.045em] text-[#103b2c] sm:text-[5rem] lg:text-[6.4rem]">
            Constitution
            <span className="mt-2 block text-[#52616b]">
              of India
            </span>
          </h1>

          <p className="mt-6 max-w-md font-sans text-lg leading-relaxed text-[#52616b] sm:text-xl">
            The supreme law of the Republic
          </p>
        </div>

        {/* Right-side constitutional principles */}
        <div className="absolute right-6 top-24 z-10 hidden border-l border-[#c8bca9] pl-5 sm:block lg:right-12">
          <p className="font-sans text-[11px] font-medium uppercase leading-[1.65] tracking-[0.16em] text-[#7b807d]">
            Justice
            <br />
            Liberty
            <br />
            Equality
            <br />
            Fraternity
          </p>

          <span className="mt-4 block h-px w-8 bg-[#ed6817]" />

          <p className="mt-4 max-w-[120px] font-serif text-sm italic leading-relaxed text-[#52616b]">
            “We, the People
            <br />
            of India …”
          </p>
        </div>

        {/* Constitution / Parliament artwork */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            right-[-45px]
            h-[185px]
            w-[390px]
            sm:right-[-50px]
            sm:h-[250px]
            sm:w-[520px]
            md:right-[-40px]
            md:h-[300px]
            md:w-[620px]
            lg:right-[-20px]
            lg:h-[390px]
            lg:w-[780px]
            xl:right-[-10px]
            xl:h-[420px]
            xl:w-[840px]
          "
        >
          <Image
            src="/constitution/parliament/constitution-hero.png"
            alt="Illustration of the Parliament of India"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 75vw, 55vw"
            className="object-contain object-bottom"
          />
        </div>

      </div>
    </section>
  );
}