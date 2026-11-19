import type { LucideIcon } from "lucide-react";
import Link from "next/link";

type Props = { n: number; label: string; icon: LucideIcon; href: string };

// One numbered mini-step inside a lesson on the path (Read, Run, Practise).
export function PathStepLink({ n, label, icon: Icon, href }: Props) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 border-2 border-edge bg-card px-3 py-1.5 text-sm font-bold hover:bg-secondary"
    >
      <span className="font-label text-xs text-signal">{n}</span>
      <Icon className="size-4" />
      {label}
    </Link>
  );
}
