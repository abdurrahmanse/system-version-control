import Link from "next/link";

import { type Lesson, LESSON_TERMS, termSlug } from "@/modules/curriculum";
import { TrackLessonBlock } from "@/modules/tracks/components/track-lesson-block";
import { TRACK_SECTION_COPY } from "@/modules/tracks/data/tracks";

// Glossary words each lesson uses, linked to their definitions.
export function TermsSection({ lessons }: { lessons: readonly Lesson[] }) {
  return (
    <div className="space-y-8">
      {lessons.map((lesson, index) => {
        const terms = LESSON_TERMS[lesson.n] ?? [];
        return (
          <TrackLessonBlock key={lesson.n} index={index + 1} lesson={lesson}>
            {terms.length > 0 ? (
              <ul className="flex flex-wrap gap-2">
                {terms.map((term) => (
                  <li key={term}>
                    <Link
                      href={`/glossary/${termSlug(term)}`}
                      className="block border-2 border-edge bg-card px-3 py-1.5 text-sm font-bold hover:bg-secondary"
                    >
                      {term}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">{TRACK_SECTION_COPY.noTerms}</p>
            )}
          </TrackLessonBlock>
        );
      })}
    </div>
  );
}
