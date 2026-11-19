import type { Metadata } from "next";
import { Suspense } from "react";

import { getTermBySlug, TERMS, termSlug } from "@/modules/curriculum";
import { TermView } from "@/modules/glossary";
import { PageSkeleton } from "@/shared/components/common/page-skeleton";

export function generateStaticParams() {
  return TERMS.map((t) => ({ term: termSlug(t.term) }));
}

export async function generateMetadata({ params }: PageProps<"/glossary/[term]">): Promise<Metadata> {
  const { term } = await params;
  const found = getTermBySlug(term);
  return found ? { title: found.term, description: found.definition } : {};
}

async function Term({ params }: Pick<PageProps<"/glossary/[term]">, "params">) {
  const { term } = await params;
  return <TermView slug={term} />;
}

export default function Page({ params }: PageProps<"/glossary/[term]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Term params={params} />
    </Suspense>
  );
}
