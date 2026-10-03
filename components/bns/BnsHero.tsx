import Image from "next/image";

export function BnsHero() {
  return (
    <section className="relative overflow-hidden px-4 pt-10 sm:px-6 sm:pt-14">
      <div className="relative min-h-[430px] sm:min-h-[520px]">

        {/* Text */}
        <div className="relative z-20 max-w-[620px] pt-6 sm:pt-8">

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-7 bg-[#f36f21]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#6f6b66] sm:text-[11px]">
              The Criminal Law of India
            </p>
          </div>

          <h1 className="font-serif text-[52px] font-semibold leading-[0.92] tracking-[-0.045em] text-[#123f32] sm:text-[72px] lg:text-[82px]">
            Bharatiya
            <br />
            Nyaya Sanhita
          </h1>

          <p className="mt-5 font-serif text-[25px] text-[#59666b] sm:text-[30px]">
            2023
          </p>

          <p className="mt-4 max-w-[360px] text-[13px] leading-6 text-[#77736e] sm:text-[14px]">
            The principal law relating to offences and punishments in India.
          </p>
        </div>

        {/* BNS image */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-[-10px]
            right-[-100px]
            z-10
            w-[650px]
            sm:right-[-120px]
            sm:w-[760px]
            lg:right-[-100px]
            lg:w-[820px]
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

        {/* Soft background circle */}
        <div
          className="
            absolute
            right-[12%]
            top-[25px]
            z-0
            h-[180px]
            w-[180px]
            rounded-full
            bg-[#f8ead8]
            opacity-60
            sm:h-[230px]
            sm:w-[230px]
          "
        />
      </div>
    </section>
  );
}