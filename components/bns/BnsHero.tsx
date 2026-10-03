export function BnsHero() {
  return (
    <section className="px-4 pt-10 pb-8 sm:px-6">
      <div className="relative min-h-[280px] overflow-hidden">
        <div className="relative z-10 pt-6">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-7 bg-[#f36f21]" />

            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#6f6b66]">
              Criminal Law of India
            </p>
          </div>

          <h1 className="font-serif text-[58px] font-semibold leading-[0.95] tracking-[-0.04em] text-[#123f32] sm:text-[72px]">
            Bharatiya
            <br />
            Nyaya Sanhita
          </h1>

          <p className="mt-4 font-serif text-[25px] text-[#59666b]">
            2023
          </p>
        </div>

        {/* Decorative legal document */}
        <div className="absolute right-[5%] top-4 hidden h-[260px] w-[210px] rotate-[-7deg] rounded-[4px] border border-[#d9d1c6] bg-[#f5efe5] shadow-sm sm:block">
          <div className="absolute inset-[14px] border border-[#d8cbb8]" />

          <div className="absolute left-8 right-8 top-14 text-center">
            <p className="font-serif text-[13px] uppercase tracking-[0.12em] text-[#123f32]">
              Bharatiya
            </p>

            <p className="mt-1 font-serif text-[18px] font-semibold text-[#123f32]">
              Nyaya Sanhita
            </p>

            <div className="mx-auto mt-5 h-px w-12 bg-[#f36f21]" />

            <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-[#77736e]">
              2023
            </p>
          </div>
        </div>

        <div className="absolute right-[18%] top-10 h-36 w-36 rounded-full bg-[#f8ead8] opacity-60 sm:right-[15%]" />
      </div>
    </section>
  );
}