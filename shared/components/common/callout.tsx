import { Lightbulb, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";

import { UI } from "@/shared/data/ui";
import { cn } from "@/shared/lib/utils";

const VARIANTS = {
  tip: { icon: Lightbulb, label: UI.tip, className: "border-edge bg-secondary" },
  danger: { icon: TriangleAlert, label: UI.warning, className: "border-signal bg-signal/10" },
} as const;

export function Callout({ variant, children }: { variant: keyof typeof VARIANTS; children: ReactNode }) {
  const { icon: Icon, label, className } = VARIANTS[variant];
  return (
    <div role="note" className={cn("flex items-start gap-3 border-2 p-3 text-sm", className)}>
      <Icon className={cn("mt-0.5 size-4 shrink-0", variant === "danger" && "text-signal")} />
      <p>
        <strong className="mr-1 font-semibold">{label}:</strong>
        {children}
      </p>
    </div>
  );
}
