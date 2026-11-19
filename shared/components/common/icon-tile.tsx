import type { LucideIcon } from "lucide-react";

export function IconTile({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="mb-3 flex size-10 items-center justify-center border-2 border-edge bg-secondary text-foreground">
      <Icon className="size-5" />
    </span>
  );
}
