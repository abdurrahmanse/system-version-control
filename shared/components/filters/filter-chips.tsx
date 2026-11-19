import { cn } from "@/shared/lib/utils";

type Option = { value: string; label: string };
type Props = { label: string; options: readonly Option[]; value: string; onChange: (value: string) => void };

// Single-choice filter shown as a row of chips (radio group semantics).
export function FilterChips({ label, options, value, onChange }: Props) {
  return (
    <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => {
        const checked = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={checked}
            onClick={() => onChange(o.value)}
            className={cn(
              "border-2 border-edge px-3 py-1 font-label text-xs tracking-wider uppercase transition-colors hover:bg-secondary",
              checked ? "bg-foreground text-background hover:bg-foreground" : "bg-card",
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
