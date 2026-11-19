// Pure selectors over the static content in /data. No UI strings live here.
import { TERMS } from "@/modules/curriculum/data/glossary";
import { CHAPTERS, type ChapterSlug, STEPS } from "@/modules/curriculum/data/guide";
import { LESSON_DETAILS, LESSONS, type Level } from "@/modules/curriculum/data/lessons";

export const getChapter = (slug: string) => CHAPTERS.find((c) => c.slug === slug);
export const getChapterIndex = (slug: string) => CHAPTERS.findIndex((c) => c.slug === slug);
export const stepsByChapter = (slug: ChapterSlug) => STEPS.filter((s) => s.chapter === slug);
export const stepsByLesson = (n: number) => STEPS.filter((s) => s.lesson === n);

export const lessonsByLevel = (level: Level) => LESSONS.filter((l) => l.level === level);
export const lessonSlug = (n: number) => {
  const detail = LESSON_DETAILS[n];
  if (!detail) throw new Error(`Unknown lesson: ${n}`);
  return detail.slug;
};
export const lessonHref = (n: number) => `/roadmap/${lessonSlug(n)}`;
export const lessonCode = (n: number) => `L${String(n).padStart(2, "0")}`;

export const getLessonBySlug = (slug: string) => {
  const entry = Object.entries(LESSON_DETAILS).find(([, d]) => d.slug === slug);
  if (!entry) return undefined;
  const n = Number(entry[0]);
  const lesson = LESSONS.find((l) => l.n === n);
  return lesson ? { lesson, detail: entry[1] } : undefined;
};

export const neighbours = <T>(list: readonly T[], index: number) => ({
  prev: index > 0 ? list[index - 1] : undefined,
  next: index < list.length - 1 ? list[index + 1] : undefined,
});

export const termsByLetter = () => {
  const map = new Map<string, typeof TERMS>();
  for (const t of [...TERMS].sort((a, b) => a.term.localeCompare(b.term))) {
    const letter = t.term.charAt(0).toUpperCase();
    map.set(letter, [...(map.get(letter) ?? []), t]);
  }
  return map;
};
