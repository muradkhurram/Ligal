"use client";

import { Bell } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotificationBell() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("/news")}
      aria-label="Latest Legal News"
      className="relative flex items-center justify-center rounded-xl p-2 text-gray-700 transition hover:bg-orange-50 hover:text-orange-600"
    >
      <Bell size={21} />

      <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-orange-600 ring-2 ring-white" />
    </button>
  );
}