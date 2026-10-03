import Image from "next/image";

export function BnsHero() {
  return (
    <section className="relative overflow-hidden px-4 pt-10 sm:px-6 sm:pt-14">
      <div className="relative mx-auto max-w-[960px]">

        {/* HERO TEXT */}
        <div
          className="
            relative z-20 pt-4
            sm:max-w-[650px] sm:pt-8
          "
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="h-px w-7 bg-[#f36f21]" />

            <p
              className="
                text-[9px] font-medium uppercase
                tracking-[0.28em] text-[#6f6b66]
                sm:text-[11px]
              "
            >
              The Criminal Law of India
            </p>
          </div>

          {/* Main title */}
          <h1
            className="
              font-serif
              text-[48px]
              font-semibold
              leading-[0.94]
              tracking-[-0.045em]
              text-[#123f32]

              sm:text-[68px]
              lg:text-[78px]
            "
          >
            Bharatiya
            <br />
            Nyaya Sanhita
          </h1>
        </div>

        {/* SOFT BACKGROUND CIRCLE */}
        <div
          className="
            pointer-events-none
            absolute
            right-[8%]
            top-[25px]
            z-0
            h-[150px]
            w-[150px]
            rounded-full
            bg-[#f8ead8]
            opacity-60

            sm:right-[13%]
            sm:top-[25px]
            sm:h-[230px]
            sm:w-[230px]
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
            w-[650px]

            sm:block
            sm:right-[-100px]
            sm:w-[720px]

            lg:right-[-80px]
            lg:w-[780px]
          "
        >
          <Image
            src="/images/bns/bns-hero.jpg"
            alt="Bharatiya Nyaya Sanhita"
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
              src="/images/bns/bns-hero.jpg"
              alt="Bharatiya Nyaya Sanhita"
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