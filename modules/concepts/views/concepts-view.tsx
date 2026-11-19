import { AreasFlow } from "@/modules/concepts/components/areas-flow";
import { BranchDiagram } from "@/modules/concepts/components/branch-diagram";
import { CommandsTabs } from "@/modules/concepts/components/commands-tabs";
import { ResetModes } from "@/modules/concepts/components/reset-modes";
import {
  CONCEPTS_AREAS,
  CONCEPTS_COMMANDS,
  CONCEPTS_CTA,
  CONCEPTS_GRAPH,
  CONCEPTS_HERO,
  CONCEPTS_RESET,
  CONCEPTS_VS,
  CONCEPTS_VS_CARDS,
  VOCAB,
} from "@/modules/concepts/data/concepts";
import { CardGrid } from "@/shared/components/cards/card-grid";
import { InfoCard } from "@/shared/components/cards/info-card";
import { PageMain } from "@/shared/components/common/page-main";
import { PageIntro } from "@/shared/components/hero/page-intro";
import { CtaSection } from "@/shared/components/section/cta-section";
import { Section } from "@/shared/components/section/section";

export function ConceptsView() {
  return (
    <PageMain>
      <PageIntro copy={CONCEPTS_HERO} />
      <Section copy={CONCEPTS_VS}>
        <CardGrid className="md:grid-cols-2 lg:grid-cols-2">
          {CONCEPTS_VS_CARDS.map((c) => (
            <InfoCard key={c.title} icon={c.icon} title={c.title} text={c.text} href={c.href} />
          ))}
        </CardGrid>
      </Section>
      <Section copy={CONCEPTS_AREAS}>
        <AreasFlow />
      </Section>
      <Section copy={CONCEPTS_GRAPH}>
        <div className="mb-8">
          <BranchDiagram />
        </div>
        <CardGrid>
          {VOCAB.map((v) => (
            <InfoCard key={v.title} icon={v.icon} title={v.title} text={v.text} href={v.href} />
          ))}
        </CardGrid>
      </Section>
      <Section copy={CONCEPTS_COMMANDS}>
        <CommandsTabs />
      </Section>
      <Section copy={CONCEPTS_RESET}>
        <ResetModes />
      </Section>
      <CtaSection copy={CONCEPTS_CTA} />
    </PageMain>
  );
}
