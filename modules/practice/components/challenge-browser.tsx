"use client";

import { parseAsBoolean, parseAsString, useQueryStates } from "nuqs";

import { CHALLENGES, LEVELS } from "@/modules/curriculum";
import { ChallengeSummary } from "@/modules/practice/components/challenge-summary";
import { PRACTICE_FILTERS as F, PRACTICE_UI as T } from "@/modules/practice/data/practice";
import { useProgressStore } from "@/modules/progress";
import { CardGrid } from "@/shared/components/cards/card-grid";
import { FilterBar } from "@/shared/components/filters/filter-bar";
import { FilterChips } from "@/shared/components/filters/filter-chips";
import { FilterSummary } from "@/shared/components/filters/filter-summary";
import { FilterToggle } from "@/shared/components/filters/filter-toggle";
import { UI } from "@/shared/data/ui";

const ALL = "all";
const OPTIONS = [{ value: ALL, label: UI.filterAll }, ...LEVELS.map((l) => ({ value: l.name, label: l.name }))];

// The practice hub: filter by level and by "unsolved only", then open a challenge.
export function ChallengeBrowser() {
  const [params, setParams] = useQueryStates({
    level: parseAsString.withDefault(ALL),
    unsolved: parseAsBoolean.withDefault(false),
  });
  const solved = useProgressStore((s) => s.challenges);
  const list = CHALLENGES.filter(
    (c) => (params.level === ALL || c.level === params.level) && !(params.unsolved && solved[c.id]),
  );
  const solvedCount = CHALLENGES.filter((c) => solved[c.id]).length;

  return (
    <div className="space-y-6">
      <FilterBar
        summary={
          <FilterSummary
            count={`${UI.resultsCount(list.length)} · ${T.solvedCount(solvedCount, CHALLENGES.length)}`}
            clearLabel={UI.filterClear}
            canClear={params.level !== ALL || params.unsolved}
            onClear={() => void setParams({ level: null, unsolved: null })}
          />
        }
      >
        <FilterChips
          label={F.level}
          options={OPTIONS}
          value={params.level}
          onChange={(v) => void setParams({ level: v === ALL ? null : v })}
        />
        <FilterToggle
          label={F.unsolved}
          pressed={params.unsolved}
          onChange={(v) => void setParams({ unsolved: v || null })}
        />
      </FilterBar>
      {list.length === 0 ? (
        <p className="text-muted-foreground">{F.empty}</p>
      ) : (
        <CardGrid>
          {list.map((c) => (
            <ChallengeSummary key={c.id} challenge={c} />
          ))}
        </CardGrid>
      )}
    </div>
  );
}
