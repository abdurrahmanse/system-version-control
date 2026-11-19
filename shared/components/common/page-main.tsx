import type { ReactNode } from "react";

// Target of the skip link. Every page renders its content inside this.
export function PageMain({ children }: { children: ReactNode }) {
  return (
    <main id="main-content" tabIndex={-1} className="overflow-x-clip outline-none">
      {children}
    </main>
  );
}
