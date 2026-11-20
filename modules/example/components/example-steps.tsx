import { ArrowRight } from "lucide-react";

import { EXAMPLE_COPY } from "@/modules/example/data/example";
import type { ExampleStep } from "@/modules/example/data/steps";
import { CommandLine } from "@/shared/components/common/command-line";
import { StepNumber } from "@/shared/components/common/step-number";

// Numbered commands: what to type, then the one-line result inside the system.
export function ExampleSteps({ steps }: { steps: readonly ExampleStep[] }) {
  return (
    <ol className="border-2 border-edge bg-card shadow-[4px_4px_0_0_var(--shadow-hard)]">
      {steps.map((step, index) => (
        <li key={step.command} className="flex gap-4 border-b border-edge/30 px-4 py-3 last:border-b-0">
          <StepNumber n={index + 1} />
          <div className="min-w-0 flex-1 space-y-1.5">
            <p className="font-heading text-lg leading-tight font-bold">{step.title}</p>
            <CommandLine command={step.command} />
            <p className="flex items-start gap-1.5 text-sm text-muted-foreground">
              <ArrowRight aria-hidden className="mt-0.5 size-4 shrink-0 text-signal" />
              <span>
                <span className="sr-only">{EXAMPLE_COPY.effectLabel}: </span>
                {step.effect}
              </span>
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
