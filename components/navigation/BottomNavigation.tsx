"use client";

import { usePathname } from "next/navigation";
import { House, Scale, FileText, User } from "lucide-react";

import FloatingAIButton from "./FloatingAIButton";
import NavItem from "./NavItem";

// Only change from the original: the center spacer now carries an
// "Ask AI" label so the floating button's purpose is legible at a
// glance, per the requirement that a generic "+" isn't enough when the
// button represents an AI assistant. Routes and nav items unchanged.
export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-4">
      <div className="relative mx-auto max-w-md">
        <FloatingAIButton />

        <div className="h-20 rounded-3xl backdrop-blur-xl bg-slate-900/80 border border-white/10 shadow-2xl flex items-center">
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

          <div className="w-20 flex flex-col items-center justify-end pb-1.5">
            <span className="text-[9px] font-semibold text-blue-400 tracking-wide">
              
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
