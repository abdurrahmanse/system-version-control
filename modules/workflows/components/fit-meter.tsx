import { WF_FIT_LABELS } from "@/modules/workflows/data/workflows";
import { cn } from "@/shared/lib/utils";

// Three bars show how high a strategy scores on one dimension (1 to 3).
export function FitMeter({ label, value }: { label: string; value: 1 | 2 | 3 }) {
  return (
    <div className="space-y-1">
      <p className="font-label text-xs tracking-wider uppercase">{label}</p>
      <div role="img" aria-label={`${label}: ${WF_FIT_LABELS.levels[value - 1]}`} className="flex gap-1">
        {[1, 2, 3].map((i) => (
          <span key={i} className={cn("h-3 flex-1 border-2 border-edge", i <= value ? "bg-signal" : "bg-card")} />
        ))}
      </div>
      <p className="text-xs text-muted-foreground">{WF_FIT_LABELS.levels[value - 1]}</p>
    </div>
  );
}
