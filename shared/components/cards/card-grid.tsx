import type { ReactNode } from "react";

import { cn } from "@/shared/lib/utils";
import { Stagger, StaggerItem } from "@/shared/motion/stagger";

// Responsive grid whose children animate in one after another.
export function CardGrid({ children, className }: { children: ReactNode[]; className?: string }) {
  return (
    <Stagger className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {children.map((child, i) => (
        <StaggerItem key={i}>{child}</StaggerItem>
      ))}
    </Stagger>
  );
}
