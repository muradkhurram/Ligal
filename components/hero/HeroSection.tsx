"use client";

import Image from "next/image";
import { Scale } from "lucide-react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

// Feathers all four edges of the photo evenly so its flat rectangular
// canvas dissolves into the page background instead of showing a hard
// cut line (this was the main bug — the old mask only faded near the
// image's vertical center, so the bottom edge stayed a visible box).
const IMAGE_EDGE_MASK =
  "linear-gradient(to right, transparent, black 12%, black 88%, transparent), " +
  "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)";

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
          grid
          w-full
          grid-cols-1
          items-center
          gap-1

          lg:grid-cols-[0.72fr_1.28fr]
          lg:gap-0
        "
      >
        {/* =====================================================
            LEFT SIDE — BRANDING
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="
            relative
            z-20
            flex
            w-full
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
                h-10
                w-10
                stroke-[1.6]

                sm:h-12
                sm:w-12

                lg:h-[4.5rem]
                lg:w-[4.5rem]
              "
            />
          </div>

          {/* Eyebrow label */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.02, ease: EASE }}
            className="
              text-[0.7rem]
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

          {/* Ligal — standard serif heading, not a branded logotype */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
            className="
              font-serif
              text-[2.5rem]
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
              text-[0.9.95rem]
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
            RIGHT SIDE — SUPREME COURT IMAGE + DOT-GRID DECORATION

            Sizing logic (this is the part that needed fixing):
            - mobile: small, right-aligned (ml-auto) so it sits in
              its own space next to the branding instead of
              overlapping it, with even edge feathering so it reads
              as one blended scene rather than a boxed-in photo
            - lg and up: reverts to the original larger, non-shifted
              desktop treatment
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, x: 18, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
          className="
            relative
            z-10
            ml-auto

            h-[14rem]
            w-[62%]
            -mt-1

            sm:h-[17rem]
            sm:w-[58%]
            sm:-mt-1

            md:h-[21rem]
            md:w-[56%]

            lg:ml-0
            lg:mt-0
            lg:h-[31rem]
            lg:w-[66%]

            xl:h-[34rem]
            xl:w-[68%]
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
              (max-width: 640px) 62vw,
              (max-width: 1024px) 56vw,
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
              maskImage: IMAGE_EDGE_MASK,
              WebkitMaskImage: IMAGE_EDGE_MASK,
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in, source-in",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}