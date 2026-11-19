import "server-only";

import { LESSONS } from "@/modules/curriculum/data/lessons";
import { lessonCode, lessonSlug } from "@/modules/curriculum/lib/selectors";
import type { LessonDto, LessonsQuery } from "@/modules/curriculum/schemas/lesson";

// Repository: the only place that knows where lessons come from. Today it is in-memory data;
// swapping in a database later means writing another implementation of this interface.
export interface LessonRepository {
  list(query?: LessonsQuery): Promise<LessonDto[]>;
  findBySlug(slug: string): Promise<LessonDto | undefined>;
}

const toDto = (l: (typeof LESSONS)[number]): LessonDto => ({
  n: l.n,
  code: lessonCode(l.n),
  slug: lessonSlug(l.n),
  title: l.title,
  level: l.level,
  summary: l.summary,
});

export const inMemoryLessonRepository: LessonRepository = {
  async list(query) {
    return LESSONS.filter((l) => !query?.level || l.level === query.level).map(toDto);
  },
  async findBySlug(slug) {
    return LESSONS.map(toDto).find((l) => l.slug === slug);
  },
};
