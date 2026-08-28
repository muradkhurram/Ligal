"use client";

import { Bell, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Legal notifications"
        className="relative rounded-full p-2 text-gray-700 transition hover:bg-orange-50 hover:text-orange-600"
      >
        <Bell size={21} />

        <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-orange-600 ring-2 ring-white" />
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-50 w-80 overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-2xl">
          <div className="border-b border-gray-100 p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-900">
                Legal Updates
              </h3>

              <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-700">
                New
              </span>
            </div>
          </div>

          <Link
            href="/news/supreme-court-modifies-3-year-practice-rule-judicial-service-entry"
            className="block border-b border-gray-100 p-4 transition hover:bg-orange-50"
            onClick={() => setOpen(false)}
          >
            <p className="text-xs font-semibold text-orange-600">
              SUPREME COURT
            </p>

            <p className="mt-1 text-sm font-semibold leading-5 text-gray-900">
              Supreme Court modifies 3-year practice rule for judicial service
              entry
            </p>

            <p className="mt-2 text-xs text-gray-500">
              22 August 2026
            </p>
          </Link>

          <Link
            href="/news"
            className="flex items-center justify-center gap-2 p-4 text-sm font-semibold text-orange-600 hover:bg-orange-50"
            onClick={() => setOpen(false)}
          >
            View all updates
            <ArrowRight size={15} />
          </Link>
        </div>
      )}
    </div>
  );
}