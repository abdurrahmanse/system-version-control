import { GitBranch } from "lucide-react";
import Link from "next/link";

import { SITE } from "@/shared/config/site";

export function BrandMark() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="flex size-8 items-center justify-center border-2 border-edge bg-signal text-primary-foreground">
        <GitBranch className="size-4" />
      </span>
      <span className="sr-only font-heading text-base font-bold tracking-tight sm:not-sr-only sm:whitespace-nowrap md:text-lg xl:text-xl">
        {SITE.name}
      </span>
    </Link>
  );
}
