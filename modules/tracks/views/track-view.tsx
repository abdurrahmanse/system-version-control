import Link from "next/link";
import { notFound } from "next/navigation";

import { lessonsByLevel, stepsByLesson } from "@/modules/curriculum";
import { StepList } from "@/modules/guide";
import { TRACK_NAV, TRACK_SECTION_COPY, TRACKS } from "@/modules/tracks/data/tracks";
import { trackNav } from "@/modules/tracks/views/track-nav";
import { pagerFor, TopicPage } from "@/shared/components/layout/topic-page";

// One level, one page: every lesson as a short task followed by its commands.
export function TrackView({ slug }: { slug: string }) {
  const track = TRACKS.find((item) => item.slug === slug);
  if (!track) notFound();

  const lessons = lessonsByLevel(track.level);
  return (
    <TopicPage
      intro={{
        badge: `Track ${track.numeral}`,
        icon: track.icon,
        title: { top: `${track.title}`, accent: track.outcome },
        description: track.audience,
        primary: { label: TRACK_SECTION_COPY.lessonsLabel, href: `/tracks/${track.slug}#step-1` },
      }}
      nav={{ items: trackNav(track.slug), label: TRACK_NAV.label }}
      pager={pagerFor(
        TRACKS,
        track.slug,
        (item) => `/tracks/${item.slug}`,
        (item) => item.title,
      )}
    >
      <div className="space-y-10">
        {lessons.map((lesson, index) => {
          const steps = stepsByLesson(lesson.n);
          return (
            <section key={lesson.n} id={`step-${index + 1}`} className="scroll-mt-24 space-y-3">
              <header className="space-y-1">
                <p className="font-label text-xs tracking-widest text-signal uppercase">
                  {TRACK_SECTION_COPY.stepLabel(index + 1)}
                </p>
                <h2 className="font-heading text-2xl font-bold">{lesson.title}</h2>
                <p className="text-sm text-muted-foreground">{lesson.task}</p>
              </header>
              {steps.length > 0 ? (
                <StepList steps={steps} variant="rows" />
              ) : (
                <ul className="space-y-1 font-code text-xs">
                  {lesson.commands.map((command) => (
                    <li key={command} className="border border-edge/40 bg-card px-3 py-2">
                      {command}
                    </li>
                  ))}
                </ul>
              )}
              <Link
                href={`/tracks/${track.slug}/${lesson.n}`}
                className="inline-block text-sm font-bold hover:text-signal"
              >
                {TRACK_SECTION_COPY.openLesson} →
              </Link>
            </section>
          );
        })}
      </div>
    </TopicPage>
  );
}
