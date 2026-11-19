import type { Metadata } from "next";
import { Suspense } from "react";

import { getStep, STEPS } from "@/modules/curriculum";
import { GuideStepView } from "@/modules/guide";
import { PageSkeleton } from "@/shared/components/common/page-skeleton";

export function generateStaticParams() {
  return STEPS.map((s) => ({ chapter: s.chapter, id: String(s.id) }));
}

export async function generateMetadata({ params }: PageProps<"/guide/[chapter]/[id]">): Promise<Metadata> {
  const { id } = await params;
  const step = getStep(Number(id));
  return step ? { title: `Step ${step.id}: ${step.title}`, description: step.explain } : {};
}

async function Step({ params }: Pick<PageProps<"/guide/[chapter]/[id]">, "params">) {
  const { chapter, id } = await params;
  return <GuideStepView chapter={chapter} id={id} />;
}

export default function Page({ params }: PageProps<"/guide/[chapter]/[id]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Step params={params} />
    </Suspense>
  );
}
