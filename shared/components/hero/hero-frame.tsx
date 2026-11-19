import type { ReactNode } from "react";

import { GitGraph } from "@/shared/components/graph/git-graph";

// The bordered, shadowed frame with the commit-graph background.
export function HeroFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden border-2 border-edge bg-card shadow-[8px_8px_0_0_var(--shadow-hard)]">
      <GitGraph className="absolute inset-0 size-full" />
      <div className="relative flex flex-col items-center gap-6 px-6 py-20 text-center sm:px-12 sm:py-28">
        {children}
      </div>
    </div>
  );
}
