import type { ReactNode } from "react";

import { Label } from "@/shared/ui/label";

type Props = { id: string; label: string; error?: string; children: ReactNode };

// Label + control + accessible error message.
export function FeedbackField({ id, label, error, children }: Props) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
