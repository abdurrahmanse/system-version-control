import { X } from "lucide-react";

import { Button } from "@/shared/ui/button";

type Props = { count: string; clearLabel: string; canClear: boolean; onClear: () => void };

// "12 results" plus a clear-all button that only appears when a filter is active.
export function FilterSummary({ count, clearLabel, canClear, onClear }: Props) {
  return (
    <div className="flex items-center gap-4">
      <p role="status" className="font-label text-xs tracking-wider text-muted-foreground uppercase">
        {count}
      </p>
      {canClear ? (
        <Button variant="ghost" size="sm" onClick={onClear}>
          <X data-icon="inline-start" />
          {clearLabel}
        </Button>
      ) : null}
    </div>
  );
}
