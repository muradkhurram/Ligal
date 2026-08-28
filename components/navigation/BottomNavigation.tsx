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
      aria-label="Main navigation"
      className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.65rem,env(safe-area-inset-bottom))] sm:px-5"
    >
      <div className="relative mx-auto w-full max-w-3xl">
        {/* Navigation background */}
        <div className="flex min-h-[5.4rem] items-center rounded-[1.6rem] border border-[#eadfd3] bg-white/95 px-1.5 shadow-[0_-4px_25px_rgba(84,52,26,0.08)] backdrop-blur-xl sm:min-h-[6rem] sm:px-2">
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

          {/* Center AI */}
          <div className="relative flex h-[5.4rem] min-w-0 flex-1 flex-col items-center justify-end pb-2 sm:h-[6rem]">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[42%]">
              <FloatingAIButton />
            </div>

            <span className="truncate text-[10px] font-bold text-[#17352b] sm:text-xs">
              Ask Legal AI
            </span>
          </div>

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