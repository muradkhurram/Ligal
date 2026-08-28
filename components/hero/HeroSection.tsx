"use client";

import Image from "next/image";
import { Scale } from "lucide-react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  return (
    <section
      aria-label="LiGal Introduction"
      className="relative mx-auto w-full max-w-7xl overflow-hidden bg-[#fffaf3] px-4 pt-4 sm:px-6 lg:px-8"
    >
      <div
        className="
          relative
          mx-auto
          flex
          w-full
          flex-row
          items-start
          justify-between
          gap-2

          sm:gap-4
          lg:gap-8
        "
      >
        {/* =====================================================
            LEFT SIDE
            LiGal BRANDING
            (top-aligned, compact on mobile so it sits flush
            next to the image instead of stacking above it)
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="
            relative
            z-20
            flex
            w-[42%]
            shrink-0
            flex-col
            items-start
            justify-start
            pt-1

            sm:w-[38%]
            sm:pt-3

            lg:w-[34%]
            lg:pt-10
          "
        >
          {/* Scales of Justice */}
          <div className="mb-1.5 text-[#ed6817] sm:mb-3 lg:mb-5">
            <Scale
              aria-hidden="true"
              className="
                h-8
                w-8
                stroke-[1.6]

                sm:h-12
                sm:w-12

                lg:h-[4.5rem]
                lg:w-[4.5rem]
              "
            />
          </div>

          {/* Eyebrow label — small official-style tag above the
              wordmark, common on gov./institutional legal sites */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.02, ease: EASE }}
            className="
              text-[0.55rem]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#8a6a52]

              sm:text-[0.7rem]
              sm:tracking-[0.2em]

              lg:text-[0.85rem]
            "
          >
            Legal Ecosystem
          </motion.p>

          {/* Ligal — plain, standard heading typeface (system serif
              stack) rather than a stylised/branded display font,
              so it reads as an official legal-site heading */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
            className="
              font-serif
              text-[2rem]
              font-bold
              leading-[1]
              tracking-tight
              text-[#ed6817]

              sm:text-[3.1rem]

              lg:text-[5.2rem]
              xl:text-[5.6rem]
            "
          >
            Ligal
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: EASE }}
            className="
              mt-2
              text-[0.8rem]
              font-semibold
              leading-[1.4]
              tracking-[-0.005em]
              text-[#103b2c]

              sm:mt-4
              sm:text-[1.05rem]

              lg:mt-7
              lg:text-[1.45rem]

              xl:text-[1.55rem]
            "
          >
            Understand the Law.
            <br />
            Protect Rights.
          </motion.p>
        </motion.div>

        {/* =====================================================
            RIGHT SIDE
            SUPREME COURT IMAGE + DOT-GRID DECORATION

            "Photo edit" applied here without swapping the asset:
            - removed mix-blend-multiply (it was muting/greying the
              image so it matched the cream backdrop; the target
              design keeps the photo fully vivid/opaque)
            - added saturate + contrast filter so the orange sun
              and brick tones pop the way they do in the target
            - added a dotted-grid pattern behind/left of the image,
              matching the decorative motif in the target design
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, x: 18, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
          className="
            relative
            z-10
            h-[19rem]
            w-[58%]

            sm:h-[24rem]
            sm:w-[62%]

            md:h-[27rem]

            lg:h-[31rem]
            lg:w-[66%]

            xl:h-[34rem]
          "
        >
          {/* Dot-grid decoration, sits behind the image, peeking
              out on its left edge like the reference design */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[-14%]
              top-[18%]
              z-0
              h-24
              w-16
              opacity-70

              sm:left-[-10%]
              sm:h-32
              sm:w-20

              lg:h-40
              lg:w-24
            "
            style={{
              backgroundImage:
                "radial-gradient(currentColor 1.5px, transparent 1.5px)",
              backgroundSize: "10px 10px",
              color: "#ed6817",
              opacity: 0.35,
              maskImage:
                "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            }}
          />

          <Image
            src="/images/supreme-court.png"
            alt="Supreme Court of India"
            fill
            priority
            sizes="
              (max-width: 640px) 60vw,
              (max-width: 1024px) 55vw,
              45vw
            "
            className="
              relative
              z-10
              object-contain
              object-center
              saturate-[1.15]
              contrast-[1.05]
            "
            style={{
              // Feathers the photo's flat rectangular canvas edge
              // (visible now that mix-blend-multiply is gone) so it
              // dissolves into the page background instead of
              // reading as a separate boxed-in photo.
              maskImage:
                "radial-gradient(100% 100% at 50% 42%, black 62%, transparent 96%)",
              WebkitMaskImage:
                "radial-gradient(100% 100% at 50% 42%, black 62%, transparent 96%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}