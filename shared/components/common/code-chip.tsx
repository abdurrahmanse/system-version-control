import type { ReactNode } from "react";

export function CodeChip({ children }: { children: ReactNode }) {
  return <code className="border border-edge/40 bg-background px-1.5 py-0.5 font-code text-xs">{children}</code>;
}
