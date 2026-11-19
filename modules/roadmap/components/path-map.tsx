import Link from "next/link";

import { lessonCode, lessonHref, lessonsByLevel, LEVELS } from "@/modules/curriculum";
import { ROADMAP_MAP } from "@/modules/roadmap/data/roadmap";
import { Stagger, StaggerItem } from "@/shared/motion/stagger";

// Subway-style map: one line per level, one stop per lesson. Every stop links to its lesson.
export function PathMap() {
  return (
    <Stagger as="ol" className="space-y-4">
      {LEVELS.map((level) => (
        <StaggerItem key={level.name} as="li" className="grid items-center gap-3 md:grid-cols-[11rem_1fr]">
          <div className="flex items-baseline gap-3">
            <span className="font-heading text-4xl font-bold text-signal">{level.numeral}</span>
            <span className="font-heading text-xl font-bold">{level.name}</span>
          </div>
          <ul
            aria-label={`${ROADMAP_MAP.label}: ${level.name}`}
            className="relative flex flex-wrap gap-3 before:absolute before:inset-x-0 before:top-1/2 before:-z-10 before:h-0.5 before:bg-edge"
          >
            {lessonsByLevel(level.name).map((l) => (
              <li key={l.n}>
                <Link
                  href={lessonHref(l.n)}
                  className="flex items-center gap-2 border-2 border-edge bg-card px-3 py-2 shadow-[3px_3px_0_0_var(--shadow-hard)] transition-transform hover:-translate-x-px hover:-translate-y-px hover:bg-secondary"
                >
                  <span className="font-label text-xs font-bold text-signal">{lessonCode(l.n)}</span>
                  <span className="text-sm font-bold">{l.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
