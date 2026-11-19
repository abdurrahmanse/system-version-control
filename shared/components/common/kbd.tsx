import type { ReactNode } from "react";

export function Kbd({ children }: { children: ReactNode }) {
  return <kbd className="border border-edge/50 bg-background px-1.5 font-label text-[0.65rem]">{children}</kbd>;
}
