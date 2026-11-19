import type { ComponentProps } from "react";

import { cn } from "@/shared/lib/utils";

// A readable column (max 4xl) that stays left-aligned inside the Container so edges line up.
export function ContentColumn({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("max-w-4xl", className)} {...props} />;
}
