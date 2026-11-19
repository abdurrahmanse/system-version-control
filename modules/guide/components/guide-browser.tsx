"use client";

import { parseAsBoolean, parseAsString, useQueryStates } from "nuqs";
import { useMemo } from "react";

import { CHAPTERS, type GuideStep, LEVELS } from "@/modules/curriculum";
import { StepList } from "@/modules/guide/components/step-list";
import { GUIDE_FILTERS as T } from "@/modules/guide/data/guide";
import { useProgress } from "@/modules/progress";
import { FilterBar } from "@/shared/components/filters/filter-bar";
import { FilterChips } from "@/shared/components/filters/filter-chips";
import { FilterSearch } from "@/shared/components/filters/filter-search";
import { FilterSummary } from "@/shared/components/filters/filter-summary";
import { FilterToggle } from "@/shared/components/filters/filter-toggle";
import { UI } from "@/shared/data/ui";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";

const ALL = "all";
const LEVEL_OPTIONS = [{ value: ALL, label: UI.filterAll }, ...LEVELS.map((l) => ({ value: l.name, label: l.name }))];
const chapterLevel = new Map(CHAPTERS.map((c) => [c.slug, c.level]));

// All 100 steps with filters: text, chapter, level, "warnings only" and "hide completed". Filters are kept in the URL.
export function GuideBrowser({ steps }: { steps: GuideStep[] }) {
  const [params, setParams] = useQueryStates({
    q: parseAsString.withDefault(""),
    chapter: parseAsString.withDefault(ALL),
    level: parseAsString.withDefault(ALL),
    warn: parseAsBoolean.withDefault(false),
    hideDone: parseAsBoolean.withDefault(false),
  });
  const { hydrated, persisted } = useProgress();
  const q = params.q.trim().toLowerCase();

  const results = useMemo(() => {
    const filtered = steps.filter(
      (s) =>
        (params.chapter === ALL || s.chapter === params.chapter) &&
        (params.level === ALL || chapterLevel.get(s.chapter) === params.level) &&
        (!params.warn || Boolean(s.danger)) &&
        !(params.hideDone && hydrated && persisted.steps[String(s.id)]) &&
        (!q || `${s.title} ${s.command} ${s.explain}`.toLowerCase().includes(q)),
    );
    return params.q || params.chapter !== ALL || params.level !== ALL || params.warn || params.hideDone
      ? filtered
      : filtered.slice(0, 10);
  }, [steps, q, params, hydrated, persisted.steps]);

  const canClear =
    Boolean(params.q) || params.chapter !== ALL || params.level !== ALL || params.warn || params.hideDone;

  return (
    <div className="space-y-6">
      <FilterBar
        summary={
          <FilterSummary
            count={UI.resultsCount(results.length)}
            clearLabel={UI.filterClear}
            canClear={canClear}
            onClear={() => void setParams({ q: null, chapter: null, level: null, warn: null, hideDone: null })}
          />
        }
      >
        <FilterSearch
          value={params.q}
          onChange={(v) => void setParams({ q: v || null })}
          label={UI.filterPlaceholder}
          placeholder={UI.filterPlaceholder}
        />
        <Select value={params.chapter} onValueChange={(v) => void setParams({ chapter: v === ALL ? null : v })}>
          <SelectTrigger aria-label={T.chapter} className="w-56">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL}>{T.chapterAll}</SelectItem>
            {CHAPTERS.map((c) => (
              <SelectItem key={c.slug} value={c.slug}>
                {`${c.n}. ${c.title}`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FilterChips
          label={T.level}
          options={LEVEL_OPTIONS}
          value={params.level}
          onChange={(v) => void setParams({ level: v === ALL ? null : v })}
        />
        <FilterToggle
          label={T.warningsOnly}
          pressed={params.warn}
          onChange={(v) => void setParams({ warn: v || null })}
        />
        <FilterToggle
          label={T.hideDone}
          pressed={params.hideDone}
          onChange={(v) => void setParams({ hideDone: v || null })}
        />
      </FilterBar>
      {results.length === 0 ? <p className="text-muted-foreground">{T.empty}</p> : <StepList steps={results} />}
    </div>
  );
}
