import { Gauge } from "lucide-react";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { ChapterChart } from "@/modules/progress/components/chapter-chart";
import { LessonGraph } from "@/modules/progress/components/lesson-graph";
import { LessonsGrid } from "@/modules/progress/components/lessons-grid";
import { LevelChart } from "@/modules/progress/components/level-chart";
import { ProgressReset } from "@/modules/progress/components/progress-reset";
import { ProgressTransfer } from "@/modules/progress/components/progress-transfer";
import {
  PROGRESS_NAV,
  PROGRESS_UI as T,
  PROGRESS_VIEWS,
  type ProgressViewSlug,
} from "@/modules/progress/data/progress";
import { SafeSection } from "@/shared/components/common/safe-section";
import { pagerFor, TopicPage } from "@/shared/components/layout/topic-page";
import type { HeroCopy } from "@/shared/types/content";
import { Skeleton } from "@/shared/ui/skeleton";

export const PROGRESS_SUBNAV = [
  { href: "/progress", label: PROGRESS_NAV.overview },
  ...PROGRESS_VIEWS.map((v) => ({ href: `/progress/${v.slug}`, label: v.title })),
];

const intro = (
  title: { top: string; accent: string },
  description: string,
  next: { label: string; href: string },
): HeroCopy => ({
  badge: T.badge,
  icon: Gauge,
  title,
  description,
  primary: next,
});

const INTROS: Record<ProgressViewSlug, HeroCopy> = {
  path: intro({ top: "Your path through", accent: "the lessons." }, T.graphDescription, {
    label: "Next: charts",
    href: "/progress/charts",
  }),
  charts: intro({ top: "Progress,", accent: "in charts." }, T.chartDescription, {
    label: "Next: all lessons",
    href: "/progress/lessons",
  }),
  lessons: intro({ top: "Every lesson,", accent: "one grid." }, T.tableDescription, {
    label: "Next: backup",
    href: "/progress/backup",
  }),
  backup: intro({ top: "Back up", accent: "and reset." }, T.transferDescription, {
    label: "Back to the overview",
    href: "/progress",
  }),
};

function Body({ slug }: { slug: ProgressViewSlug }) {
  switch (slug) {
    case "path":
      return (
        <SafeSection>
          <LessonGraph />
        </SafeSection>
      );
    case "charts":
      return (
        <SafeSection>
          <div className="grid gap-6 lg:grid-cols-2">
            <LevelChart />
            <ChapterChart />
          </div>
        </SafeSection>
      );
    case "lessons":
      return (
        <SafeSection>
          <Suspense fallback={<Skeleton className="h-64 w-full" />}>
            <LessonsGrid />
          </Suspense>
        </SafeSection>
      );
    case "backup":
      return (
        <div className="grid gap-6 lg:grid-cols-2">
          <SafeSection>
            <ProgressTransfer />
          </SafeSection>
          <div>
            <ProgressReset />
          </div>
        </div>
      );
  }
}

export function ProgressSectionView({ slug }: { slug: string }) {
  const view = PROGRESS_VIEWS.find((v) => v.slug === slug);
  if (!view) notFound();
  return (
    <TopicPage
      intro={INTROS[view.slug]}
      nav={{ items: PROGRESS_SUBNAV, label: PROGRESS_NAV.label }}
      pager={pagerFor(
        PROGRESS_VIEWS,
        view.slug,
        (v) => `/progress/${v.slug}`,
        (v) => v.title,
      )}
    >
      <Body slug={view.slug} />
    </TopicPage>
  );
}
