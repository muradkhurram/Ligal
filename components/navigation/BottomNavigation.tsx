"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { HelpCircle, BookOpen, FileText, User } from "lucide-react";
import FloatingAIButton from "./FloatingAIButton";
import NavItem from "./NavItem";

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav 
      aria-label="Main Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 px-3 pb-3 pointer-events-none"
    >
      <div className="max-w-xs sm:max-w-sm mx-auto relative pointer-events-auto">
        {/* Floating Separated AI Button */}
        <FloatingAIButton />

        {/* Compact Instagram-style Glass Dock */}
        <div className="glass-panel rounded-full h-12 sm:h-14 px-2 flex items-center justify-between shadow-2xl border border-white/10 bg-bg-secondary/80 backdrop-blur-2xl">
          {/* Left Group */}
          <NavItem
            href="/"
            icon={HelpCircle}
            label="Home"
            active={pathname === "/"}
          />

          <NavItem
            href="/judgments"
            icon={BookOpen}
            label="Judgments"
            active={pathname === "/judgments"}
          />

          {/* Center Gap Reserved for Separated Floating AI Button */}
          <div className="w-12 sm:w-14 shrink-0" aria-hidden="true" />

          {/* Right Group */}
          <NavItem
            href="/documents"
            icon={FileText}
            label="Generator"
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

export default BottomNavigation;