import { ExampleAnswer } from "@/modules/mentor/components/example-answer";
import { GuardrailList } from "@/modules/mentor/components/guardrail-list";
import { RuleGrid } from "@/modules/mentor/components/rule-grid";
import { SourceRanking } from "@/modules/mentor/components/source-ranking";
import {
  MENTOR_CTA,
  MENTOR_EXAMPLE_SECTION,
  MENTOR_FLOW,
  MENTOR_GUARDRAILS_SECTION,
  MENTOR_HERO,
  MENTOR_RULES_SECTION,
  MENTOR_SOURCES_SECTION,
} from "@/modules/mentor/data/mentor";
import { PageMain } from "@/shared/components/common/page-main";
import { Flowchart } from "@/shared/components/diagrams/flowchart";
import { PageIntro } from "@/shared/components/hero/page-intro";
import { CtaSection } from "@/shared/components/section/cta-section";
import { Section } from "@/shared/components/section/section";

export function MentorView() {
  return (
    <PageMain>
      <PageIntro copy={MENTOR_HERO} />
      <Section id="rules" copy={MENTOR_RULES_SECTION}>
        <RuleGrid />
      </Section>
      <Section copy={MENTOR_SOURCES_SECTION}>
        <SourceRanking />
      </Section>
      <Section copy={MENTOR_FLOW}>
        <Flowchart label={MENTOR_FLOW.label} nodes={MENTOR_FLOW.nodes} perRow={5} />
      </Section>
      <Section copy={MENTOR_EXAMPLE_SECTION}>
        <ExampleAnswer />
      </Section>
      <Section copy={MENTOR_GUARDRAILS_SECTION}>
        <GuardrailList />
      </Section>
      <CtaSection copy={MENTOR_CTA} />
    </PageMain>
  );
}
