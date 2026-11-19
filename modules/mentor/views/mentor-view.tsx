import { RuleGrid } from "@/modules/mentor/components/rule-grid";
import { MENTOR_HERO, MENTOR_HUB, MENTOR_NAV, MENTOR_RULES_SECTION, MENTOR_TOPICS } from "@/modules/mentor/data/mentor";
import { MENTOR_SUBNAV } from "@/modules/mentor/views/mentor-topic-view";
import { CardGrid } from "@/shared/components/cards/card-grid";
import { InfoCard } from "@/shared/components/cards/info-card";
import { TopicPage } from "@/shared/components/layout/topic-page";
import { SectionHeader } from "@/shared/components/section/section-header";

// Hub: the six rules, then cards to the other pages.
export function MentorView() {
  return (
    <TopicPage intro={MENTOR_HERO} nav={{ items: MENTOR_SUBNAV, label: MENTOR_NAV.label }}>
      <section id="rules">
        <SectionHeader copy={MENTOR_RULES_SECTION} />
        <RuleGrid />
      </section>
      <section>
        <SectionHeader copy={MENTOR_HUB} />
        <CardGrid>
          {MENTOR_TOPICS.map((t) => (
            <InfoCard key={t.slug} icon={t.icon} title={t.title} text={t.text} href={`/mentor/${t.slug}`} />
          ))}
        </CardGrid>
      </section>
    </TopicPage>
  );
}
