import { CtaButton } from "@/shared/components/hero/cta-button";
import { HeroBadge } from "@/shared/components/hero/hero-badge";
import { PageIntroTitle } from "@/shared/components/hero/page-intro-title";
import { Container } from "@/shared/components/layout/container";
import type { HeroCopy } from "@/shared/types/content";

// Compact, minimal header for inner pages. Only the home page gets the big framed hero.
export function PageIntro({ copy }: { copy: HeroCopy }) {
  return (
    <header className="border-b-4 border-double border-edge">
      <Container className="space-y-5 py-12 sm:py-16">
        <HeroBadge icon={copy.icon}>{copy.badge}</HeroBadge>
        <PageIntroTitle title={copy.title} />
        <p className="max-w-2xl text-lg text-balance text-muted-foreground">{copy.description}</p>
        <div className="flex flex-wrap gap-4 pt-1">
          <CtaButton cta={copy.primary} arrow />
          {copy.secondary ? <CtaButton cta={copy.secondary} variant="outline" /> : null}
        </div>
      </Container>
    </header>
  );
}
