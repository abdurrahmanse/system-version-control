import { ConceptGraph } from "@/modules/concepts/components/concept-graph";
import { CONCEPT_TOPICS, CONCEPTS_HERO, CONCEPTS_HUB, CONCEPTS_NAV } from "@/modules/concepts/data/concepts";
import { CardGrid } from "@/shared/components/cards/card-grid";
import { InfoCard } from "@/shared/components/cards/info-card";
import { SafeSection } from "@/shared/components/common/safe-section";
import { TopicPage } from "@/shared/components/layout/topic-page";
import { SectionHeader } from "@/shared/components/section/section-header";

const NAV = [
  { href: "/concepts", label: CONCEPTS_NAV.overview },
  ...CONCEPT_TOPICS.map((t) => ({ href: `/concepts/${t.slug}`, label: t.title })),
];

// Hub: the concept map plus one card per sub-page. Short on purpose.
export function ConceptsView() {
  return (
    <TopicPage intro={CONCEPTS_HERO} nav={{ items: NAV, label: CONCEPTS_NAV.label }}>
      <section>
        <SafeSection>
          <ConceptGraph />
        </SafeSection>
      </section>
      <section>
        <SectionHeader copy={CONCEPTS_HUB} />
        <CardGrid>
          {CONCEPT_TOPICS.map((t) => (
            <InfoCard key={t.slug} icon={t.icon} title={t.title} text={t.text} href={`/concepts/${t.slug}`} />
          ))}
        </CardGrid>
      </section>
    </TopicPage>
  );
}
