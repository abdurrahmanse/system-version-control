import { ExternalLink as Icon } from "lucide-react";
import type { ReactNode } from "react";

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 underline decoration-signal decoration-2 underline-offset-4 hover:text-signal"
    >
      {children}
      <Icon className="size-3.5" />
    </a>
  );
}
