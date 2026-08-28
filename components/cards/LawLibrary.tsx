"use client";

import { motion, type Variants } from "framer-motion";
import {
  Scroll,
  BookOpen,
  Gavel,
  Landmark,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

interface LawCard {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const LAW_CARDS: LawCard[] = [
  {
    id: "constitution",
    title: "Constitution",
    description: "The supreme law of India.",
    icon: Scroll,
  },
  {
    id: "bns",
    title: "BNS",
    description: "Bharatiya Nyaya Sanhita",
    icon: BookOpen,
  },
  {
    id: "bnss",
    title: "BNSS",
    description: "Bharatiya Nagarik Suraksha Sanhita",
    icon: Gavel,
  },
  {
    id: "brns",
    title: "BRNS",
    description: "Bharatiya Sakshya Adhiniyam",
    icon: Landmark,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function LawLibrary() {
  return (
    <section
      id="explore-law"
      aria-labelledby="explore-law-heading"
      className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
    >
      {/* Section heading */}
      <div className="mb-5 flex items-end justify-between gap-4 sm:mb-6">
        <div className="min-w-0">
          <h2
            id="explore-law-heading"
            className="text-xl font-bold tracking-tight text-[#103b2c] sm:text-2xl lg:text-[1.75rem]"
          >
            Explore Law
          </h2>

          <p className="mt-1 text-sm text-[#70716f] sm:text-[0.95rem]">
            Browse important legal frameworks
          </p>
        </div>

        <button
          type="button"
          className="flex shrink-0 items-center gap-1 text-sm font-bold text-[#ed6817] transition-opacity hover:opacity-75 sm:text-base"
        >
          <span>View all</span>
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:gap-5"
      >
        {LAW_CARDS.map((card) => {
          const Icon = card.icon;

          return (
            <motion.button
              key={card.id}
              type="button"
              variants={cardVariants}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.985 }}
              aria-label={`Open ${card.title}`}
              className="group relative flex min-h-[8.5rem] w-full items-center gap-4 overflow-hidden rounded-[1.35rem] border border-[#eadfd3] bg-white p-5 text-left shadow-[0_8px_25px_rgba(84,52,26,0.055)] transition-shadow hover:shadow-[0_12px_30px_rgba(84,52,26,0.10)] sm:min-h-[10rem] sm:p-6"
            >
              {/* Orange top accent */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-[#ed6817] opacity-0 transition-opacity group-hover:opacity-100"
              />

              {/* Icon */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#fff0df] text-[#ed6817] sm:h-16 sm:w-16">
                <Icon className="h-7 w-7 stroke-[1.8] sm:h-8 sm:w-8" />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1 pr-5">
                <h3 className="text-base font-bold tracking-tight text-[#103b2c] sm:text-lg">
                  {card.title}
                </h3>

                <p className="mt-1.5 max-w-sm text-sm leading-6 text-[#70716f] sm:text-[0.95rem]">
                  {card.description}
                </p>
              </div>

              {/* Arrow */}
              <ArrowRight className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#ed6817] transition-transform group-hover:translate-x-1 sm:right-5" />
            </motion.button>
          );
        })}
      </motion.div>
    </section>
  );
}