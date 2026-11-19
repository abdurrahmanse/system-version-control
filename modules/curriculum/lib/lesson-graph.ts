import { CHALLENGES } from "@/modules/curriculum/data/challenges";
import { CHAPTERS, STEPS } from "@/modules/curriculum/data/guide";
import { LESSON_PREREQUISITES, LESSON_TERMS } from "@/modules/curriculum/data/lesson-graph";
import { LESSONS } from "@/modules/curriculum/data/lessons";

const byNumber = (n: number) => LESSONS.find((l) => l.n === n);

export const lessonPrerequisites = (n: number) => (LESSON_PREREQUISITES[n] ?? []).flatMap((p) => byNumber(p) ?? []);
export const lessonUnlocks = (n: number) => LESSONS.filter((l) => (LESSON_PREREQUISITES[l.n] ?? []).includes(n));

// Every prerequisite link as an edge list: { from: prerequisite, to: lesson }.
export const lessonEdges = () =>
  LESSONS.flatMap((l) => (LESSON_PREREQUISITES[l.n] ?? []).map((p) => ({ from: p, to: l.n })));

// Everything directly connected to one lesson: used by the "connected topics" graph.
export function lessonNeighbourhood(n: number) {
  const chapterSlugs = [...new Set(STEPS.filter((s) => s.lesson === n).map((s) => s.chapter))];
  return {
    prerequisites: lessonPrerequisites(n),
    unlocks: lessonUnlocks(n),
    chapters: chapterSlugs.flatMap((slug) => CHAPTERS.find((c) => c.slug === slug) ?? []),
    challenge: CHALLENGES.find((c) => c.lesson === n),
    terms: LESSON_TERMS[n] ?? [],
  };
}

// The first lesson (in order) that is not done and whose prerequisites are all done.
export function nextLesson(done: ReadonlySet<number>) {
  return LESSONS.find((l) => !done.has(l.n) && (LESSON_PREREQUISITES[l.n] ?? []).every((p) => done.has(p)));
}

export type PathItem = {
  lesson: (typeof LESSONS)[number];
  chapters: ReturnType<typeof lessonNeighbourhood>["chapters"];
  challenge: ReturnType<typeof lessonNeighbourhood>["challenge"];
  stepCount: number;
};

// Step-by-step learning path: for each lesson, what to read, which guide chapters to run and which challenge to solve.
export const learningPath = (): PathItem[] =>
  LESSONS.map((lesson) => {
    const hood = lessonNeighbourhood(lesson.n);
    return {
      lesson,
      chapters: hood.chapters,
      challenge: hood.challenge,
      stepCount: STEPS.filter((s) => s.lesson === lesson.n).length,
    };
  });
