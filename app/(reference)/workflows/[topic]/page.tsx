import type { Metadata } from "next";
import { Suspense } from "react";

import { WF_TOPICS, WorkflowTopicView } from "@/modules/workflows";
import { PageSkeleton } from "@/shared/components/common/page-skeleton";

export function generateStaticParams() {
  return WF_TOPICS.map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/workflows/[topic]">): Promise<Metadata> {
  const { topic } = await params;
  const found = WF_TOPICS.find((t) => t.slug === topic);
  return found ? { title: found.title, description: found.text } : {};
}

async function Topic({ params }: Pick<PageProps<"/workflows/[topic]">, "params">) {
  const { topic } = await params;
  return <WorkflowTopicView slug={topic} />;
}

export default function Page({ params }: PageProps<"/workflows/[topic]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Topic params={params} />
    </Suspense>
  );
}
