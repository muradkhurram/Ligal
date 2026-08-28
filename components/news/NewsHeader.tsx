import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface NewsHeaderProps {
  homepage?: boolean;
}

export default function NewsHeader({
  homepage = false,
}: NewsHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">
          Stay Informed
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          Latest Legal News
        </h2>

        <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600">
          Important developments in courts, legislation, government and
          constitutional law, explained clearly.
        </p>
      </div>

      {homepage && (
        <Link
          href="/news"
          className="group flex w-fit items-center gap-2 font-semibold text-orange-600"
        >
          View All
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      )}
    </div>
  );
}