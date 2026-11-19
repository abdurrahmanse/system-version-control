"use client";

import { Search } from "lucide-react";
import { useQueryState } from "nuqs";
import { useMemo } from "react";
import { useDebouncedCallback } from "use-debounce";

import type { GuideStep } from "@/modules/curriculum";
import { StepList } from "@/modules/guide/components/step-list";
import { UI } from "@/shared/data/ui";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/ui/input-group";

// Filters all steps. The query lives in the URL (?q=) via nuqs and is debounced with use-debounce.
export function GuideSearch({ steps }: { steps: GuideStep[] }) {
  const [q, setQ] = useQueryState("q", { defaultValue: "" });
  const onChange = useDebouncedCallback((value: string) => void setQ(value || null), 250);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return steps.slice(0, 10);
    return steps.filter((s) => `${s.title} ${s.command} ${s.explain}`.toLowerCase().includes(term));
  }, [q, steps]);

  return (
    <div className="space-y-6">
      <InputGroup className="max-w-xl">
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupInput
          defaultValue={q}
          onChange={(e) => onChange(e.target.value)}
          placeholder={UI.filterPlaceholder}
          aria-label={UI.filterPlaceholder}
        />
      </InputGroup>
      <p role="status" className="font-label text-xs tracking-wider text-muted-foreground uppercase">
        {UI.resultsCount(results.length)}
      </p>
      <StepList steps={results} />
    </div>
  );
}
