import type { GuideStep } from "@/modules/curriculum";
import { StepCard } from "@/modules/guide/components/step-card";
import { StepRow } from "@/modules/guide/components/step-row";

type Props = {
  steps: readonly GuideStep[];
  /** "rows" is the short list (default); "cards" shows every explanation. */ variant?: "rows" | "cards";
};

export function StepList({ steps, variant = "cards" }: Props) {
  if (variant === "rows") {
    return (
      <ol className="border-2 border-edge bg-card shadow-[4px_4px_0_0_var(--shadow-hard)]">
        {steps.map((s) => (
          <StepRow key={s.id} step={s} />
        ))}
      </ol>
    );
  }
  return (
    <ol className="space-y-6">
      {steps.map((s) => (
        <li key={s.id}>
          <StepCard step={s} />
        </li>
      ))}
    </ol>
  );
}
