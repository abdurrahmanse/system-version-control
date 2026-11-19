import Link from "next/link";

import type { Term } from "@/modules/curriculum";
import { GLOSSARY_UI } from "@/modules/glossary/data/glossary";
import { CodeChip } from "@/shared/components/common/code-chip";
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

export function TermCard({ term }: { term: Term }) {
  return (
    <Card id={term.term.toLowerCase().replace(/\W+/g, "-")}>
      <CardHeader>
        <CardTitle className="font-heading text-xl">{term.term}</CardTitle>
        <CardDescription>{term.definition}</CardDescription>
        {term.see ? (
          <p className="pt-1 text-xs text-muted-foreground">
            {GLOSSARY_UI.see}{" "}
            <Link href={`/guide?q=${encodeURIComponent(term.see)}`}>
              <CodeChip>{term.see}</CodeChip>
            </Link>
          </p>
        ) : null}
      </CardHeader>
    </Card>
  );
}
