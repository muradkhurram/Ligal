import Image from "next/image";

export function BnsHero() {
  return (
    <section className="relative overflow-hidden px-4 pt-10 sm:px-6 sm:pt-14">
      <div className="relative mx-auto max-w-[960px]">

        {/* HERO TEXT */}
        <div className="relative z-20 pt-4 sm:max-w-[620px] sm:pt-8">

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-7 bg-[#f36f21]" />

            <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#6f6b66] sm:text-[11px]">
              The Criminal Law of India
            </p>
          </div>

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

          <p
            className="
              mt-5
              font-serif
              text-[24px]
              text-[#59666b]
              sm:text-[28px]
            "
          >
            2023
          </p>

          <p
            className="
              mt-4
              max-w-[350px]
              text-[13px]
              leading-6
              text-[#77736e]
              sm:text-[14px]
            "
          >
            The principal law relating to offences and punishments in India.
          </p>
        </div>

        {/* DESKTOP / WINDOWS IMAGE */}
        <div
          className="
            pointer-events-none
            absolute
            right-[-80px]
            top-[35px]
            z-10
            hidden
            w-[650px]
            sm:block
            lg:right-[-70px]
            lg:w-[720px]
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