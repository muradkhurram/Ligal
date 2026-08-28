"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface NavItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  active?: boolean;
}

export default function NavItem({
  href,
  icon: Icon,
  label,
  active = false,
}: NavItemProps) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`group relative flex min-w-0 flex-1 flex-col items-center justify-center gap-1 py-2 transition-colors sm:gap-1.5 ${
        active ? "text-[#ed6817]" : "text-[#68727a]"
      }`}
    >
      <Icon
        className={`h-5 w-5 stroke-[1.8] transition-transform group-hover:scale-105 sm:h-6 sm:w-6 ${
          active ? "text-[#ed6817]" : "text-[#68727a]"
        }`}
      />

      <span
        className={`max-w-full truncate text-[10px] font-semibold sm:text-xs ${
          active ? "text-[#ed6817]" : "text-[#68727a]"
        }`}
      >
        {label}
      </span>

      {/* Active indicator */}
      {active && (
        <span className="absolute bottom-0 h-0.5 w-7 rounded-full bg-[#ed6817] sm:w-8" />
      )}
    </Link>
  );
}