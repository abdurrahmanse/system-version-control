import { WF_HUB, WF_NAV, WF_TOPICS, WORKFLOWS_HERO } from "@/modules/workflows/data/workflows";
import { WF_SUBNAV } from "@/modules/workflows/views/workflow-topic-view";
import { CardGrid } from "@/shared/components/cards/card-grid";
import { InfoCard } from "@/shared/components/cards/info-card";
import { TopicPage } from "@/shared/components/layout/topic-page";
import { SectionHeader } from "@/shared/components/section/section-header";

// Hub: one card per workflow topic. Each topic is its own short page.
export function WorkflowsView() {
  return (
    <TopicPage intro={WORKFLOWS_HERO} nav={{ items: WF_SUBNAV, label: WF_NAV.label }}>
      <section>
        <SectionHeader copy={WF_HUB} />
        <CardGrid>
          {WF_TOPICS.map((t) => (
            <InfoCard key={t.slug} icon={t.icon} title={t.title} text={t.text} href={`/workflows/${t.slug}`} />
          ))}
        </CardGrid>
      </section>
    </TopicPage>
  );
}
