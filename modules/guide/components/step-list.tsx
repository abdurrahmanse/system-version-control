import type { GuideStep } from "@/modules/curriculum";
import { StepCard } from "@/modules/guide/components/step-card";

export function StepList({ steps }: { steps: readonly GuideStep[] }) {
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
