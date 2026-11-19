import { CtaButton } from "@/shared/components/hero/cta-button";
import { HeroCommand } from "@/shared/components/hero/hero-command";
import type { HeroCopy } from "@/shared/types/content";

export function HeroActions({ copy }: { copy: HeroCopy }) {
  return (
    <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
      <CtaButton cta={copy.primary} arrow />
      {copy.secondary ? <CtaButton cta={copy.secondary} variant="outline" /> : null}
      {copy.command ? <HeroCommand command={copy.command} /> : null}
    </div>
  );
}
