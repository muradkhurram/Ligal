import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-parchment-50 pb-32 pt-10 text-ink-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 text-center">
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm"
        >
          <Link href="/about" className="hover:underline">
            About
          </Link>

          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>

          <Link href="/terms" className="hover:underline">
            Terms
          </Link>

          <Link href="/disclaimer" className="hover:underline">
            Disclaimer
          </Link>
        </nav>

        <p className="text-sm opacity-60">
          © 2026 LiGal
        </p>
      </div>
    </footer>
  );
}