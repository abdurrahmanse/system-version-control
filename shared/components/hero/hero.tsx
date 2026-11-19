import { HeroActions } from "@/shared/components/hero/hero-actions";
import { HeroBadge } from "@/shared/components/hero/hero-badge";
import { HeroDescription } from "@/shared/components/hero/hero-description";
import { HeroFrame } from "@/shared/components/hero/hero-frame";
import { HeroOrnament } from "@/shared/components/hero/hero-ornament";
import { HeroTitle } from "@/shared/components/hero/hero-title";
import { Container } from "@/shared/components/layout/container";
import type { HeroCopy } from "@/shared/types/content";

// Page hero. All text comes from the `copy` object (see /data/pages).
export function Hero({ copy }: { copy: HeroCopy }) {
  return (
    <section>
      <Container className="py-10 sm:py-16">
        <HeroFrame>
          <HeroBadge icon={copy.icon}>{copy.badge}</HeroBadge>
          <HeroTitle title={copy.title} />
          <HeroOrnament />
          <HeroDescription>{copy.description}</HeroDescription>
          <HeroActions copy={copy} />
        </HeroFrame>
      </Container>
    </section>
  );
}
