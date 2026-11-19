import type { LucideIcon } from "lucide-react";

import { MonoLabel } from "@/shared/components/common/mono-label";

export function SectionEyebrow({ icon: Icon, children }: { icon: LucideIcon; children: string }) {
  return (
    <MonoLabel className="mb-3 flex items-center gap-2">
      <Icon className="size-4" />
      {children}
    </MonoLabel>
  );
}
