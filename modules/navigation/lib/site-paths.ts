import { CONCEPT_TOPICS } from "@/modules/concepts";
import { CHALLENGES, CHAPTERS, LESSONS, lessonSlug, stepHref, STEPS, TERMS, termSlug } from "@/modules/curriculum";
import { MENTOR_TOPICS } from "@/modules/mentor";
import { PROGRESS_VIEWS } from "@/modules/progress";
import { groupSlug, PACKAGE_GROUPS } from "@/modules/toolbox";
import { TRACK_SECTIONS, TRACKS } from "@/modules/tracks";
import { WF_TOPICS } from "@/modules/workflows";
import { ALL_NAV, FOOTER_LINKS } from "@/shared/config/site";

// Every page of the site, for the sitemap and for tests that check every route has a title.
export function allSitePaths(): string[] {
  const lessonPages = LESSONS.flatMap((l) => {
    const base = `/roadmap/${lessonSlug(l.n)}`;
    return [base, `${base}/commands`, `${base}/checkpoints`];
  });
  return [
    ...new Set([
      ...ALL_NAV.map((n) => n.href),
      ...FOOTER_LINKS.map((l) => l.href),
      "/privacy",
      "/terms",
      ...lessonPages,
      ...CHAPTERS.map((c) => `/guide/${c.slug}`),
      ...STEPS.map(stepHref),
      ...CONCEPT_TOPICS.map((t) => `/concepts/${t.slug}`),
      ...WF_TOPICS.map((t) => `/workflows/${t.slug}`),
      ...MENTOR_TOPICS.map((t) => `/mentor/${t.slug}`),
      ...PROGRESS_VIEWS.map((v) => `/progress/${v.slug}`),
      ...TRACKS.flatMap((track) => [
        "/tracks",
        `/tracks/${track.slug}`,
        ...TRACK_SECTIONS.map((section) => `/tracks/${track.slug}/${section.slug}`),
        ...LESSONS.filter((lesson) => lesson.level === track.level).flatMap((lesson) => [
          `/tracks/${track.slug}/${lesson.n}`,
          `/tracks/${track.slug}/${lesson.n}/commands`,
          `/tracks/${track.slug}/${lesson.n}/checkpoints`,
        ]),
      ]),
      ...TERMS.map((t) => `/glossary/${termSlug(t.term)}`),
      ...CHALLENGES.map((c) => `/practice/${c.id}`),
      ...PACKAGE_GROUPS.map((g) => `/packages/${groupSlug(g.title)}`),
    ]),
  ];
}
