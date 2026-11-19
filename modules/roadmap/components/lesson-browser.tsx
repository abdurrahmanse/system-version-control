"use client";

import { parseAsBoolean, parseAsString, useQueryStates } from "nuqs";
import { useMemo } from "react";

import { LESSONS, LEVELS } from "@/modules/curriculum";
import { useProgress } from "@/modules/progress";
import { LessonList } from "@/modules/roadmap/components/lesson-list";
import { LEVEL_ICONS, ROADMAP_FILTERS as T } from "@/modules/roadmap/data/roadmap";
import { FilterBar } from "@/shared/components/filters/filter-bar";
import { FilterChips } from "@/shared/components/filters/filter-chips";
import { FilterSearch } from "@/shared/components/filters/filter-search";
import { FilterSummary } from "@/shared/components/filters/filter-summary";
import { FilterToggle } from "@/shared/components/filters/filter-toggle";
import { UI } from "@/shared/data/ui";

const ALL = "all";
const LEVEL_OPTIONS = [{ value: ALL, label: UI.filterAll }, ...LEVELS.map((l) => ({ value: l.name, label: l.name }))];

const matches = (q: string, l: (typeof LESSONS)[number]) =>
  !q || `${l.title} ${l.summary} ${l.learn.join(" ")} ${l.commands.join(" ")}`.toLowerCase().includes(q);

// Lessons grouped by level with search, level and "hide completed" filters. All filters live in the URL.
export function LessonBrowser() {
  const [params, setParams] = useQueryStates({
    q: parseAsString.withDefault(""),
    level: parseAsString.withDefault(ALL),
    hideDone: parseAsBoolean.withDefault(false),
  });
  const { hydrated, persisted } = useProgress();
  const q = params.q.trim().toLowerCase();

  const groups = useMemo(
    () =>
      LEVELS.map((level) => ({
        level,
        lessons: LESSONS.filter(
          (l) =>
            l.level === level.name &&
            (params.level === ALL || params.level === level.name) &&
            matches(q, l) &&
            !(params.hideDone && hydrated && persisted.lessons[String(l.n)]),
        ),
      })).filter((g) => g.lessons.length > 0),
    [q, params.level, params.hideDone, hydrated, persisted.lessons],
  );
  const total = groups.reduce((n, g) => n + g.lessons.length, 0);
  const canClear = Boolean(params.q) || params.level !== ALL || params.hideDone;

  return (
    <div className="space-y-8">
      <FilterBar
        summary={
          <FilterSummary
            count={UI.resultsCount(total)}
            clearLabel={UI.filterClear}
            canClear={canClear}
            onClear={() => void setParams({ q: null, level: null, hideDone: null })}
          />
        }
      >
        <FilterSearch
          value={params.q}
          onChange={(v) => void setParams({ q: v || null })}
          label={T.search}
          placeholder={T.searchPlaceholder}
        />
        <FilterChips
          label={T.level}
          options={LEVEL_OPTIONS}
          value={params.level}
          onChange={(v) => void setParams({ level: v === ALL ? null : v })}
        />
        <FilterToggle
          label={T.hideDone}
          pressed={params.hideDone}
          onChange={(v) => void setParams({ hideDone: v || null })}
        />
      </FilterBar>

      {total === 0 ? <p className="text-muted-foreground">{T.noResults}</p> : null}

      {groups.map(({ level, lessons }) => {
        const Icon = LEVEL_ICONS[level.name];
        return (
          <section key={level.name} aria-labelledby={`level-${level.numeral}`} className="space-y-4">
            <h3 id={`level-${level.numeral}`} className="flex items-center gap-3 font-heading text-3xl font-bold">
              <span className="text-signal">{level.numeral}</span>
              <Icon className="size-6" />
              {level.name}
              <span className="font-body text-sm font-normal text-muted-foreground">{level.tagline}</span>
            </h3>
            <LessonList lessons={lessons} />
          </section>
        );
      })}
    </div>
  );
}
