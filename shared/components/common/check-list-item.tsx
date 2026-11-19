import { Check } from "lucide-react";
import type { ReactNode } from "react";

export function CheckListItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="mt-0.5 size-4 shrink-0 text-signal" />
      <span>{children}</span>
    </li>
  );
}
