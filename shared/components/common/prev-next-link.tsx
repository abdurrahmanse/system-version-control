import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = { href: string; label: string; title: string; direction: "prev" | "next" };

export function PrevNextLink({ href, label, title, direction }: Props) {
  const next = direction === "next";
  return (
    <Link
      href={href}
      className={`group flex flex-1 items-center gap-3 border-2 border-edge bg-card p-4 shadow-[4px_4px_0_0_var(--shadow-hard)] transition-transform hover:-translate-x-px hover:-translate-y-px ${next ? "justify-end text-right" : ""}`}
    >
      {!next ? <ArrowLeft className="size-5 shrink-0 text-signal" /> : null}
      <span>
        <span className="block font-label text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
          {label}
        </span>
        <span className="font-heading text-lg font-bold">{title}</span>
      </span>
      {next ? <ArrowRight className="size-5 shrink-0 text-signal" /> : null}
    </Link>
  );
}
