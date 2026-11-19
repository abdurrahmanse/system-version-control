import { getChapter, getLessonBySlug } from "@/modules/curriculum";
import { NAVIGATION } from "@/modules/navigation/data/navigation";
import { ALL_NAV, NAV_GROUPS } from "@/shared/config/site";
import { PAGE_META } from "@/shared/data/metadata";

const LEGAL_TITLES: Record<string, string> = { "/privacy": PAGE_META.privacy.title, "/terms": PAGE_META.terms.title };

const segments = (pathname: string) => pathname.split("/").filter(Boolean);

// Human title for any pathname in the site. Pure and deterministic.
export function titleFor(pathname: string): string {
  if (pathname === "/") return NAVIGATION.homeLabel;
  const [first, second] = segments(pathname);
  if (first === "roadmap" && second) return getLessonBySlug(second)?.lesson.title ?? second;
  if (first === "guide" && second) {
    const chapter = getChapter(second);
    return chapter ? `${chapter.n}. ${chapter.title}` : second;
  }
  const nav = ALL_NAV.find((n) => n.href === `/${first}`);
  return nav?.label ?? LEGAL_TITLES[`/${first}`] ?? pathname;
}

// The nav group a top-level page belongs to (Learn, Reference, Project), if any.
export function groupFor(pathname: string): string | undefined {
  const [first] = segments(pathname);
  return NAV_GROUPS.find((g) => g.items.some((i) => i.href === `/${first}`))?.label;
}
