"use client";

import { Search } from "lucide-react";
import { useQueryState } from "nuqs";
import { useMemo } from "react";

import type { Term } from "@/modules/curriculum";
import { AlphabetNav } from "@/modules/glossary/components/alphabet-nav";
import { TermCard } from "@/modules/glossary/components/term-card";
import { GLOSSARY_UI } from "@/modules/glossary/data/glossary";
import { UI } from "@/shared/data/ui";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/ui/input-group";

// Search is stored in the URL (?q=) so a term can be shared or linked from the search palette.
export function GlossaryBrowser({ terms }: { terms: Term[] }) {
  const [q, setQ] = useQueryState("q", { defaultValue: "" });

  const grouped = useMemo(() => {
    const term = q.trim().toLowerCase();
    const filtered = term ? terms.filter((t) => `${t.term} ${t.definition}`.toLowerCase().includes(term)) : terms;
    const map = new Map<string, Term[]>();
    for (const t of filtered) {
      const letter = t.term.charAt(0).toUpperCase();
      map.set(letter, [...(map.get(letter) ?? []), t]);
    }
    return [...map.entries()];
  }, [q, terms]);

  return (
    <div className="space-y-8">
      <InputGroup className="max-w-xl">
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupInput
          value={q}
          onChange={(e) => void setQ(e.target.value || null)}
          placeholder={GLOSSARY_UI.searchPlaceholder}
          aria-label={GLOSSARY_UI.searchLabel}
        />
      </InputGroup>
      <AlphabetNav letters={grouped.map(([l]) => l)} />
      <p role="status" className="font-label text-xs tracking-wider text-muted-foreground uppercase">
        {UI.resultsCount(grouped.reduce((n, [, t]) => n + t.length, 0))}
      </p>
      {grouped.length === 0 ? <p className="text-muted-foreground">{GLOSSARY_UI.empty}</p> : null}
      {grouped.map(([letter, list]) => (
        <section key={letter} id={`letter-${letter}`} className="scroll-mt-28">
          <h2 className="mb-4 font-heading text-5xl font-bold text-signal">{letter}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {list.map((t) => (
              <TermCard key={t.term} term={t} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
