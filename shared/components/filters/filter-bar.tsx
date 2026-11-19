import type { ReactNode } from "react";

// Layout for a row of filters: controls on top, summary underneath.
export function FilterBar({ children, summary }: { children: ReactNode; summary: ReactNode }) {
  return (
    <div className="space-y-3 border-2 border-edge bg-card p-4 shadow-[4px_4px_0_0_var(--shadow-hard)]">
      <div className="flex flex-wrap items-center gap-3">{children}</div>
      {summary}
    </div>
  );
}
