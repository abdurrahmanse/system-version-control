import type { ReactNode } from "react";

import { MonoLabel } from "@/shared/components/common/mono-label";

// A labelled block of content inside a lesson card or page.
export function LessonBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <MonoLabel className="mb-2 text-[0.65rem]">{label}</MonoLabel>
      {children}
    </div>
  );
}
