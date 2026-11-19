import { notFound } from "next/navigation";

import { levelFromSlug, LEVELS, levelSlug } from "@/modules/curriculum";
import { PathTimeline } from "@/modules/path/components/path-timeline";
import { PATH_LEVEL_ICONS, PATH_NAV } from "@/modules/path/data/path";
import { SafeSection } from "@/shared/components/common/safe-section";
import { pagerFor, TopicPage } from "@/shared/components/layout/topic-page";
import type { HeroCopy } from "@/shared/types/content";

export const PATH_SUBNAV = [
  { href: "/path", label: PATH_NAV.overview },
  ...LEVELS.map((l) => ({ href: `/path/${levelSlug(l.name)}`, label: l.name })),
];

const levels = LEVELS.map((l) => ({ ...l, slug: levelSlug(l.name) }));

export function PathLevelView({ slug }: { slug: string }) {
  const level = levelFromSlug(slug);
  if (!level) notFound();
  const next = levels[levels.findIndex((l) => l.slug === levelSlug(level.name)) + 1];
  const intro: HeroCopy = {
    badge: `Level ${level.numeral}`,
    icon: PATH_LEVEL_ICONS[level.name],
    title: { top: `${level.name}:`, accent: level.tagline },
    description: "Follow the line from top to bottom. Each lesson has four small steps.",
    primary: next
      ? { label: `Next level: ${next.name}`, href: `/path/${next.slug}` }
      : { label: "Practise", href: "/practice" },
  };
  return (
    <TopicPage
      intro={intro}
      nav={{ items: PATH_SUBNAV, label: PATH_NAV.label }}
      pager={pagerFor(
        levels,
        levelSlug(level.name),
        (l) => `/path/${l.slug}`,
        (l) => l.name,
      )}
    >
      <SafeSection>
        <PathTimeline level={level.name} />
      </SafeSection>
    </TopicPage>
  );
}
