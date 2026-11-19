import Link from "next/link";

import type { GuideStep } from "@/modules/curriculum";
import { lessonCode, lessonHref, stepHref } from "@/modules/curriculum";
import { StepNumber } from "@/shared/components/common/step-number";
import { Badge } from "@/shared/ui/badge";

export function StepHeader({ step, page = false }: { step: GuideStep; page?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <StepNumber n={step.id} />
      {page ? (
        <h1 className="flex-1 font-heading text-3xl font-bold">{step.title}</h1>
      ) : (
        <h3 className="flex-1 font-heading text-xl font-bold">
          <Link href={stepHref(step)} className="hover:text-signal">
            {step.title}
          </Link>
        </h3>
      )}
      <Link href={lessonHref(step.lesson)}>
        <Badge variant="outline" className="hover:bg-foreground hover:text-background">
          {lessonCode(step.lesson)}
        </Badge>
      </Link>
    </div>
  );
}
