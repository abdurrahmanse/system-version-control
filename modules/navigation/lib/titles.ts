import { CONCEPT_TOPICS } from "@/modules/concepts";
import {
  CHALLENGES,
  getChapter,
  getLessonBySlug,
  getStep,
  getTermBySlug,
  LESSONS,
  levelFromSlug,
} from "@/modules/curriculum";
import { MENTOR_TOPICS } from "@/modules/mentor";
import { NAVIGATION } from "@/modules/navigation/data/navigation";
import { PROGRESS_VIEWS } from "@/modules/progress";
import { groupSlug, PACKAGE_GROUPS } from "@/modules/toolbox";
import { TRACK_SECTIONS, TRACKS } from "@/modules/tracks";
import { WF_TOPICS } from "@/modules/workflows";
import { ALL_NAV, FOOTER_LINKS, NAV_GROUPS } from "@/shared/config/site";

const segments = (pathname: string) => pathname.split("/").filter(Boolean);

const topicTitle = (list: readonly { slug: string; title: string }[], slug: string) =>
  list.find((t) => t.slug === slug)?.title;

// Human title for any pathname in the site. Pure and deterministic.
export function titleFor(pathname: string): string {
  const [first, second, third, fourth] = segments(pathname);
  if (!first) return NAVIGATION.homeLabel;
  const top =
    ALL_NAV.find((n) => n.href === `/${first}`)?.label ?? FOOTER_LINKS.find((l) => l.href === `/${first}`)?.label;
  if (!second) return top ?? pathname;

  if (third) {
    if (first === "roadmap") return NAVIGATION.lessonTabs[third as keyof typeof NAVIGATION.lessonTabs] ?? third;
    if (first === "guide") {
      const step = getStep(Number(third));
      return step ? NAVIGATION.stepTitle(third, step.title) : third;
    }
    if (first === "tracks") {
      const section = TRACK_SECTIONS.find((item) => item.slug === third);
      if (section) return section.label;
      const lesson = LESSONS.find((item) => item.n === Number(third));
      if (lesson) {
        if (fourth === "commands") return `${lesson.title}: commands`;
        if (fourth === "checkpoints") return `${lesson.title}: checkpoints`;
        return lesson.title;
      }
      return third;
    }
    return third;
  }

  switch (first) {
    case "roadmap":
      return getLessonBySlug(second)?.lesson.title ?? second;
    case "guide": {
      const chapter = getChapter(second);
      return chapter ? `${chapter.n}. ${chapter.title}` : second;
    }
    case "concepts":
      return topicTitle(CONCEPT_TOPICS, second) ?? second;
    case "workflows":
      return topicTitle(WF_TOPICS, second) ?? second;
    case "mentor":
      return topicTitle(MENTOR_TOPICS, second) ?? second;
    case "progress":
      return topicTitle(PROGRESS_VIEWS, second) ?? second;
    case "path":
      return levelFromSlug(second)?.name ?? second;
    case "tracks":
      return topicTitle(TRACKS, second) ?? second;
    case "glossary":
      return getTermBySlug(second)?.term ?? second;
    case "practice":
      return CHALLENGES.find((c) => c.id === second)?.title ?? second;
    case "packages":
      return PACKAGE_GROUPS.find((g) => groupSlug(g.title) === second)?.title ?? second;
    default:
      return second;
  }
}

// The nav group a top-level page belongs to (Learn, Reference, Project), if any.
export function groupFor(pathname: string): string | undefined {
  const [first] = segments(pathname);
  return NAV_GROUPS.find((g) => g.items.some((i) => i.href === `/${first}`))?.label;
}
