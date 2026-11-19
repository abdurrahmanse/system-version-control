import type { LucideIcon } from "lucide-react";

import { Badge } from "@/shared/ui/badge";

export function HeroBadge({ icon: Icon, children }: { icon: LucideIcon; children: string }) {
  return (
    <Badge variant="outline" className="h-7 gap-2 bg-background px-3">
      <Icon />
      {children}
    </Badge>
  );
}
