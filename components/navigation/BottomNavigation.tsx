"use client";

import { usePathname } from "next/navigation";

import {
  House,
  Scale,
  FileText,
  User,
} from "lucide-react";

import FloatingAIButton from "./FloatingAIButton";
import NavItem from "./NavItem";

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-40

        px-4
        pb-4
      "
    >
      <div
        className="
          relative
          mx-auto
          max-w-md
        "
      >
        <FloatingAIButton />

        <div
          className="
            h-20

            rounded-3xl

            backdrop-blur-xl

            bg-slate-900/80

            border

            border-white/10

            shadow-2xl

            flex

            items-center
          "
        >
          <NavItem
            href="/"
            icon={House}
            label="Home"
            active={pathname === "/"}
          />

          <NavItem
            href="/judgments"
            icon={Scale}
            label="Judgments"
            active={pathname === "/judgments"}
          />

          {/* Space for AI Button */}

          <div className="w-20" />

          <NavItem
            href="/documents"
            icon={FileText}
            label="Documents"
            active={pathname === "/documents"}
          />

          <NavItem
            href="/profile"
            icon={User}
            label="Profile"
            active={pathname === "/profile"}
          />
        </div>
      </div>
    </nav>
  );
}