import { TriangleAlert } from "lucide-react";
import Link from "next/link";

import type { GuideStep } from "@/modules/curriculum";
import { stepHref } from "@/modules/curriculum";
import { CopyButton } from "@/modules/guide/components/copy-button";
import { GUIDE_STEP as T } from "@/modules/guide/data/guide";
import { StepDoneToggle } from "@/modules/progress";
import { StepNumber } from "@/shared/components/common/step-number";

// One compact line per step in a chapter: number, title, the command with a copy button, and "done".
// The title opens the full step page.
export function StepRow({ step }: { step: GuideStep }) {
  return (
    <li
      id={`step-${step.id}`}
      className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-edge/30 px-4 py-3 last:border-b-0"
    >
      <StepNumber n={step.id} />
      <div className="min-w-0 flex-1 basis-56 space-y-1">
        <Link
          href={stepHref(step)}
          className="flex items-center gap-2 font-heading text-lg font-bold hover:text-signal"
        >
          {step.title}
          {step.danger ? <TriangleAlert aria-label={T.dangerLabel} className="size-4 text-signal" /> : null}
        </Link>
        <p className="flex items-center gap-1 font-code text-xs text-muted-foreground">
          <span className="truncate">{step.command}</span>
          <CopyButton text={step.command} />
        </p>
      </div>
      <StepDoneToggle id={step.id} />
    </li>
  );
}
