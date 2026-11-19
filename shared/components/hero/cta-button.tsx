import { ArrowRight } from "lucide-react";
import Link from "next/link";

import type { Cta } from "@/shared/types/content";
import { Button } from "@/shared/ui/button";

type Props = { cta: Cta; variant?: "default" | "outline"; arrow?: boolean };

export function CtaButton({ cta, variant = "default", arrow = false }: Props) {
  const Icon = cta.icon;
  return (
    <Button asChild size="lg" variant={variant} className="h-11 px-5">
      <Link href={cta.href}>
        {Icon ? <Icon data-icon="inline-start" /> : null}
        {cta.label}
        {arrow ? <ArrowRight data-icon="inline-end" /> : null}
      </Link>
    </Button>
  );
}
