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
      className="flex flex-col items-center justify-center gap-1 flex-1 py-3 transition-all"
    >
      <Icon
        className={`w-5 h-5 ${
          active ? "text-blue-500" : "text-slate-400"
        }`}
      />

      <span
        className={`text-[11px] ${
          active ? "text-white" : "text-slate-400"
        }`}
      >
        {label}
      </span>
    </Link>
  );
}
