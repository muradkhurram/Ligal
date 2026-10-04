import Image from "next/image";

export function BnssHero() {
  return (
    <section className="relative overflow-hidden px-4 pt-10 sm:px-6 sm:pt-14">
      <div className="relative mx-auto min-h-[430px] max-w-[960px] sm:min-h-[500px]">

        {/* HERO TEXT */}
        <div className="relative z-20 max-w-[620px] pt-6 sm:pt-8">

          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-7 bg-[#f36f21]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#6f6b66] sm:text-[11px]">
              Criminal Procedure · Act No. 46 of 2023
            </p>
          </div>

          {/* Main title */}
          <h1
            className="
              font-serif
              text-[52px]
              font-semibold
              leading-[0.92]
              tracking-[-0.045em]
              text-[#123f32]
              sm:text-[68px]
              lg:text-[78px]
            "
          >
            Bharatiya
            <br />
            Nagarik
            <br />
            Suraksha Sanhita
          </h1>

        </div>

        {/* SOFT BACKGROUND CIRCLE */}
        <div
          className="
            pointer-events-none
            absolute
            right-[12%]
            top-[25px]
            z-0
            h-[180px]
            w-[180px]
            rounded-full
            bg-[#f8ead8]
            opacity-60
            sm:h-[220px]
            sm:w-[220px]
          "
        />

        {/* DESKTOP / WINDOWS IMAGE */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-[-5px]
            right-[-80px]
            z-10
            hidden
            w-[600px]
            sm:block
            sm:right-[-90px]
            sm:w-[680px]
            lg:right-[-80px]
            lg:w-[720px]
          "
        >
          <Image
            src="/images/bnss/bnss-hero.png"
            alt="Bharatiya Nagarik Suraksha Sanhita"
            width={885}
            height={432}
            priority
            className="h-auto w-full object-contain"
          />
        </div>

        {/* MOBILE IMAGE */}
        <div
          className="
            relative
            z-10
            mt-8
            flex
            justify-end
            sm:hidden
          "
        >
          <div className="w-[285px]">
            <Image
              src="/images/bnss/bnss-hero.png"
              alt="Bharatiya Nagarik Suraksha Sanhita"
              width={885}
              height={432}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}