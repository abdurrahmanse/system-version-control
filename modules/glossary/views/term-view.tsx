import { notFound } from "next/navigation";

import { getTermBySlug, TERMS, termSlug } from "@/modules/curriculum";
import { TermGraph } from "@/modules/glossary/components/term-graph";
import { GLOSSARY_TERM as T } from "@/modules/glossary/data/glossary";
import { LinkArrow } from "@/shared/components/common/link-arrow";
import { MonoLabel } from "@/shared/components/common/mono-label";
import { PageMain } from "@/shared/components/common/page-main";
import { PrevNext } from "@/shared/components/common/prev-next";
import { SafeSection } from "@/shared/components/common/safe-section";
import { Container } from "@/shared/components/layout/container";
import { ContentColumn } from "@/shared/components/layout/content-column";

const sorted = [...TERMS].sort((a, b) => a.term.localeCompare(b.term));

// One term on its own page: definition plus a small graph of where it is taught and which command uses it.
export function TermView({ slug }: { slug: string }) {
  const term = getTermBySlug(slug);
  if (!term) notFound();
  const i = sorted.findIndex((t) => t.term === term.term);
  const prev = sorted[i - 1];
  const next = sorted[i + 1];
  return (
    <PageMain>
      <Container className="py-12">
        <ContentColumn className="space-y-8">
          <header className="space-y-3">
            <MonoLabel>{T.definition}</MonoLabel>
            <h1 className="font-heading text-5xl font-bold">{term.term}</h1>
            <p className="text-xl text-muted-foreground">{term.definition}</p>
          </header>
          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold">{T.graphTitle}</h2>
            <SafeSection>
              <TermGraph term={term} />
            </SafeSection>
          </section>
          <LinkArrow href="/glossary">{T.back}</LinkArrow>
          <PrevNext
            prev={prev ? { href: `/glossary/${termSlug(prev.term)}`, title: prev.term } : undefined}
            next={next ? { href: `/glossary/${termSlug(next.term)}`, title: next.term } : undefined}
          />
        </ContentColumn>
      </Container>
    </PageMain>
  );
}
