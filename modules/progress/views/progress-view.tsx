import { Gauge, ListChecks, Route, ShieldAlert } from "lucide-react";

import { GoalPlanner } from "@/modules/progress/components/goal-planner";
import { ProgressSummary } from "@/modules/progress/components/progress-summary";
import { PROGRESS_HERO, PROGRESS_NAV, PROGRESS_VIEWS } from "@/modules/progress/data/progress";
import { PROGRESS_SUBNAV } from "@/modules/progress/views/progress-section-view";
import { CardGrid } from "@/shared/components/cards/card-grid";
import { InfoCard } from "@/shared/components/cards/info-card";
import { SafeSection } from "@/shared/components/common/safe-section";
import { TopicPage } from "@/shared/components/layout/topic-page";

const ICONS = { path: Route, charts: Gauge, lessons: ListChecks, backup: ShieldAlert } as const;

// Overview: your totals and goal, then one card per detail page.
export function ProgressView() {
  return (
    <TopicPage intro={PROGRESS_HERO} nav={{ items: PROGRESS_SUBNAV, label: PROGRESS_NAV.label }}>
      <SafeSection>
        <ProgressSummary />
      </SafeSection>
      <SafeSection>
        <GoalPlanner />
      </SafeSection>
      <CardGrid>
        {PROGRESS_VIEWS.map((v) => (
          <InfoCard key={v.slug} icon={ICONS[v.slug]} title={v.title} text={v.text} href={`/progress/${v.slug}`} />
        ))}
      </CardGrid>
    </TopicPage>
  );
}
