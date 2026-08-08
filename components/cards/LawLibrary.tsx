"use client";

import { motion, type Variants } from "framer-motion";
import { Scroll, BookOpen, Gavel, Landmark, type LucideIcon } from "lucide-react";

interface WireframeCard {
  id: string;
  title: string;
  icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
}

// Content unchanged from the original, including the "BRNS" label —
// preserved as-is per the no-redesign / keep-behaviour-intact instruction.
const WIREFRAME_CARDS: WireframeCard[] = [
  {
    id: "constitution",
    title: "Constitution",
    icon: Scroll,
    iconBgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    id: "bns",
    title: "BNS",
    icon: BookOpen,
    iconBgColor: "bg-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    id: "bnss",
    title: "BNSS",
    icon: Gavel,
    iconBgColor: "bg-amber-700/20",
    iconColor: "text-amber-500",
  },
  {
    id: "brns",
    title: "BRNS",
    icon: Landmark,
    iconBgColor: "bg-indigo-500/20",
    iconColor: "text-indigo-400",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

export function LawLibrary() {
  return (
    <section
      aria-label="Core Legal Frameworks"
      className="w-full max-w-sm sm:max-w-md mx-auto px-4 py-2"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 gap-3.5"
      >
        {WIREFRAME_CARDS.map((card) => {
          const Icon = card.icon;

          return (
            <motion.button
              key={card.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              aria-label={card.title}
              className="relative flex flex-col items-center justify-center p-4 h-32 sm:h-36 rounded-2xl bg-surface/50 border border-white/10 backdrop-blur-xl shadow-glass overflow-hidden text-center focus:outline-hidden focus:ring-2 focus:ring-brand-accent/50 group"
            >
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary to-brand-accent opacity-90"
              />

              <div
                className={`w-11 h-11 rounded-xl ${card.iconBgColor} flex items-center justify-center ${card.iconColor} transition-transform group-hover:scale-105 mb-2.5`}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
              </div>

              <span className="text-sm sm:text-base font-semibold tracking-tight text-text-primary group-hover:text-brand-accent transition-colors">
                {card.title}
              </span>
            </motion.button>
          );
        })}
      </motion.div>
    </section>
  );
}
