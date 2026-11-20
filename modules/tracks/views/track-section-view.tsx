import { notFound } from "next/navigation";

import { lessonsByLevel } from "@/modules/curriculum";
import { ChecklistSection } from "@/modules/tracks/components/checklist-section";
import { CommandsSection } from "@/modules/tracks/components/commands-section";
import { MistakesSection } from "@/modules/tracks/components/mistakes-section";
import { PracticeSection } from "@/modules/tracks/components/practice-section";
import { QuizSection } from "@/modules/tracks/components/quiz-section";
import { TasksSection } from "@/modules/tracks/components/tasks-section";
import { TermsSection } from "@/modules/tracks/components/terms-section";
import { QUIZZES } from "@/modules/tracks/data/quiz";
import { TRACK_NAV, TRACK_SECTION_COPY, TRACK_SECTIONS, TRACKS, type TrackSection } from "@/modules/tracks/data/tracks";
import { trackNav } from "@/modules/tracks/views/track-nav";
import { TopicPage } from "@/shared/components/layout/topic-page";

export function TrackSectionView({ slug, section }: { slug: string; section: TrackSection }) {
  const track = TRACKS.find((item) => item.slug === slug);
  const meta = TRACK_SECTIONS.find((item) => item.slug === section);
  if (!track || !meta) notFound();

  const lessons = lessonsByLevel(track.level);
  const body = {
    commands: <CommandsSection lessons={lessons} />,
    tasks: <TasksSection lessons={lessons} />,
    checklist: <ChecklistSection lessons={lessons} />,
    mistakes: <MistakesSection lessons={lessons} />,
    terms: <TermsSection lessons={lessons} />,
    quiz: <QuizSection questions={QUIZZES[track.slug] ?? []} />,
    practice: <PracticeSection track={track} lessons={lessons} />,
  }[section];

  return (
    <TopicPage
      intro={{
        badge: `Track ${track.numeral}`,
        icon: track.icon,
        title: { top: `${track.title}:`, accent: meta.label },
        description: TRACK_SECTION_COPY.intro(track.title, meta.description),
        primary: { label: TRACK_SECTION_COPY.lessonsLabel, href: `/tracks/${track.slug}` },
      }}
      nav={{ items: trackNav(track.slug), label: TRACK_NAV.label }}
    >
      {body}
    </TopicPage>
  );
}
