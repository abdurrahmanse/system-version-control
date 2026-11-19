import { Gauge, ListChecks, Table2, Target } from "lucide-react";
import { Suspense } from "react";

import { ChapterChart } from "@/modules/progress/components/chapter-chart";
import { GoalPlanner } from "@/modules/progress/components/goal-planner";
import { LessonsTable } from "@/modules/progress/components/lessons-table";
import { LevelChart } from "@/modules/progress/components/level-chart";
import { ProgressReset } from "@/modules/progress/components/progress-reset";
import { ProgressSummary } from "@/modules/progress/components/progress-summary";
import { ProgressTransfer } from "@/modules/progress/components/progress-transfer";
import { PROGRESS_HERO, PROGRESS_UI as T } from "@/modules/progress/data/progress";
import { PageMain } from "@/shared/components/common/page-main";
import { SafeSection } from "@/shared/components/common/safe-section";
import { PageIntro } from "@/shared/components/hero/page-intro";
import { Section } from "@/shared/components/section/section";
import { Skeleton } from "@/shared/ui/skeleton";

export function ProgressView() {
  return (
    <PageMain>
      <PageIntro copy={PROGRESS_HERO} />
      <Section copy={{ numeral: "I", icon: Gauge, eyebrow: T.overviewTitle, title: T.overviewTitle }}>
        <SafeSection>
          <ProgressSummary />
        </SafeSection>
      </Section>
      <Section
        copy={{
          numeral: "II",
          icon: ListChecks,
          eyebrow: T.chartTitle,
          title: T.chartTitle,
          description: T.chartDescription,
        }}
      >
        <SafeSection>
          <div className="grid gap-6 lg:grid-cols-2">
            <LevelChart />
            <GoalPlanner />
            <ChapterChart />
          </div>
        </SafeSection>
      </Section>
      <Section
        copy={{
          numeral: "III",
          icon: Table2,
          eyebrow: T.tableTitle,
          title: T.tableTitle,
          description: T.tableDescription,
        }}
      >
        <SafeSection>
          <Suspense fallback={<Skeleton className="h-64 w-full" />}>
            <LessonsTable />
          </Suspense>
        </SafeSection>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <SafeSection>
            <ProgressTransfer />
          </SafeSection>
          <div className="flex items-start gap-3">
            <Target className="mt-2 size-4 text-signal" />
            <ProgressReset />
          </div>
        </div>
      </Section>
    </PageMain>
  );
}
