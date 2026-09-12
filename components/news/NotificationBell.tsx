import Link from "next/link";
import { Bell } from "lucide-react";

export default function NotificationBell() {
  return (
    <Link
      href="/news"
      aria-label="Latest Legal News"
      className="relative flex items-center justify-center rounded-xl p-2 text-gray-700 transition hover:bg-orange-50 hover:text-orange-600"
    >
      <Bell size={21} />

      <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-orange-600 ring-2 ring-white" />
    </Link>
  );
}