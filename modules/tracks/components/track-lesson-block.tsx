import type { ReactNode } from "react";

import type { Lesson } from "@/modules/curriculum";
import { TRACK_SECTION_COPY } from "@/modules/tracks/data/tracks";

// A numbered heading with the lesson title and a one-line caption, wrapping whatever the page shows for it.
export function TrackLessonBlock({
  index,
  lesson,
  caption,
  children,
}: {
  index: number;
  lesson: Lesson;
  caption?: string;
  children: ReactNode;
}) {
  return (
    <section id={`step-${index}`} className="scroll-mt-24 space-y-3">
      <header className="space-y-1">
        <p className="font-label text-xs tracking-widest text-signal uppercase">
          {TRACK_SECTION_COPY.stepLabel(index)}
        </p>
        <h2 className="font-heading text-2xl font-bold">{lesson.title}</h2>
        {caption ? <p className="text-sm text-muted-foreground">{caption}</p> : null}
      </header>
      {children}
    </section>
  );
}
