import type { ReactNode } from "react";

import { cn } from "@/shared/lib/utils";

// Small uppercase monospace label used for eyebrows and captions.
export function MonoLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("font-label text-xs tracking-[0.2em] text-muted-foreground uppercase", className)}>{children}</p>
  );
}
