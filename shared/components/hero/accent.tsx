import type { ReactNode } from "react";

// Italic, accent-coloured emphasis for headlines.
export function Accent({ children }: { children: ReactNode }) {
  return <em className="font-heading text-signal italic">{children}</em>;
}
