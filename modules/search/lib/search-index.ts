import { lessonCode, lessonHref, LESSONS, stepHref, STEPS, TERMS, termSlug } from "@/modules/curriculum";
import { ALL_NAV } from "@/shared/config/site";
import { type UI } from "@/shared/data/ui";

export type SearchGroup = keyof typeof UI.searchGroups;
export type SearchItem = {
  id: string;
  group: SearchGroup;
  title: string;
  subtitle?: string;
  href: string;
  keywords: string;
};

// Built once on the server and passed to the client palette as plain data.
export function buildSearchIndex(): SearchItem[] {
  return [
    ...ALL_NAV.map((n) => ({
      id: `page-${n.href}`,
      group: "pages" as const,
      title: n.label,
      href: n.href,
      keywords: n.label,
    })),
    ...LESSONS.map((l) => ({
      id: `lesson-${l.n}`,
      group: "lessons" as const,
      title: `${lessonCode(l.n)} ${l.title}`,
      subtitle: l.summary,
      href: lessonHref(l.n),
      keywords: `${l.title} ${l.summary} ${l.learn.join(" ")}`,
    })),
    ...STEPS.map((s) => ({
      id: `step-${s.id}`,
      group: "steps" as const,
      title: s.title,
      subtitle: s.command,
      href: stepHref(s),
      keywords: `${s.title} ${s.command} ${s.explain}`,
    })),
    ...TERMS.map((t) => ({
      id: `term-${t.term}`,
      group: "terms" as const,
      title: t.term,
      subtitle: t.definition,
      href: `/glossary/${termSlug(t.term)}`,
      keywords: `${t.term} ${t.definition}`,
    })),
  ];
}
