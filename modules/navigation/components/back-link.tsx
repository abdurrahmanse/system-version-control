"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { NAVIGATION } from "@/modules/navigation/data/navigation";
import { useHistory } from "@/modules/navigation/hooks/use-history";

// "Back to <the page you came from>". Hidden until there is a previous page.
export function BackLink() {
  const { previous } = useHistory();
  if (!previous) return null;
  return (
    <Link
      href={previous.href}
      className="inline-flex items-center gap-1.5 font-label text-xs tracking-wider uppercase hover:text-signal"
    >
      <ArrowLeft className="size-3.5" />
      {NAVIGATION.backTo} {previous.title}
    </Link>
  );
}
