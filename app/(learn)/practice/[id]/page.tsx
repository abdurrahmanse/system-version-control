import type { Metadata } from "next";
import { Suspense } from "react";

import { CHALLENGES } from "@/modules/curriculum";
import { ChallengeView } from "@/modules/practice";
import { PageSkeleton } from "@/shared/components/common/page-skeleton";

export function generateStaticParams() {
  return CHALLENGES.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: PageProps<"/practice/[id]">): Promise<Metadata> {
  const { id } = await params;
  const found = CHALLENGES.find((c) => c.id === id);
  return found ? { title: found.title, description: found.goal } : {};
}

async function Challenge({ params }: Pick<PageProps<"/practice/[id]">, "params">) {
  const { id } = await params;
  return <ChallengeView id={id} />;
}

export default function Page({ params }: PageProps<"/practice/[id]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Challenge params={params} />
    </Suspense>
  );
}
