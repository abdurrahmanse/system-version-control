import type { GuideStep } from "@/modules/curriculum";
import { CommandBlock } from "@/modules/guide/components/command-block";
import { StepHeader } from "@/modules/guide/components/step-header";
import { StepDoneToggle } from "@/modules/progress";
import { Callout } from "@/shared/components/common/callout";
import { UI } from "@/shared/data/ui";
import { Card, CardContent } from "@/shared/ui/card";

export function StepCard({ step }: { step: GuideStep }) {
  return (
    <Card id={`step-${step.id}`} className="scroll-mt-28">
      <CardContent className="space-y-4">
        <StepHeader step={step} />
        <CommandBlock command={step.command} />
        <p className="text-sm text-muted-foreground">{step.explain}</p>
        {step.output ? (
          <p className="font-code text-xs text-muted-foreground">
            <span className="tracking-wider uppercase">{UI.expectedOutput}:</span> {step.output}
          </p>
        ) : null}
        {step.tip ? <Callout variant="tip">{step.tip}</Callout> : null}
        {step.danger ? <Callout variant="danger">{step.danger}</Callout> : null}
        <div className="flex justify-end">
          <StepDoneToggle id={step.id} />
        </div>
      </CardContent>
    </Card>
  );
}
