import type { Metadata } from "next";
import { Suspense } from "react";

import { CONCEPT_TOPICS, ConceptTopicView } from "@/modules/concepts";
import { PageSkeleton } from "@/shared/components/common/page-skeleton";

export function generateStaticParams() {
  return CONCEPT_TOPICS.map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/concepts/[topic]">): Promise<Metadata> {
  const { topic } = await params;
  const found = CONCEPT_TOPICS.find((t) => t.slug === topic);
  return found ? { title: found.title, description: found.text } : {};
}

async function Topic({ params }: Pick<PageProps<"/concepts/[topic]">, "params">) {
  const { topic } = await params;
  return <ConceptTopicView slug={topic} />;
}

export default function Page({ params }: PageProps<"/concepts/[topic]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Topic params={params} />
    </Suspense>
  );
}
