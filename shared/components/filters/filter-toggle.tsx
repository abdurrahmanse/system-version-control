import { Check } from "lucide-react";

import { cn } from "@/shared/lib/utils";

type Props = { label: string; pressed: boolean; onChange: (pressed: boolean) => void };

// On/off filter ("hide completed", "warnings only").
export function FilterToggle({ label, pressed, onChange }: Props) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={() => onChange(!pressed)}
      className={cn(
        "flex items-center gap-2 border-2 border-edge px-3 py-1 font-label text-xs tracking-wider uppercase transition-colors hover:bg-secondary",
        pressed ? "bg-foreground text-background hover:bg-foreground" : "bg-card",
      )}
    >
      <span
        className={cn(
          "flex size-4 items-center justify-center border-2",
          pressed ? "border-background" : "border-edge",
        )}
      >
        {pressed ? <Check className="size-3" /> : null}
      </span>
      {label}
    </button>
  );
}
