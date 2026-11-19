import Link from "next/link";

export function LinkArrow({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="font-label text-xs tracking-wider uppercase underline decoration-signal decoration-2 underline-offset-4 hover:text-signal"
    >
      {children}
    </Link>
  );
}
