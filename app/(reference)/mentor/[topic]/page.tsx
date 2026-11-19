import type { Metadata } from "next";
import { Suspense } from "react";

import { MENTOR_TOPICS, MentorTopicView } from "@/modules/mentor";
import { PageSkeleton } from "@/shared/components/common/page-skeleton";

export function generateStaticParams() {
  return MENTOR_TOPICS.map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/mentor/[topic]">): Promise<Metadata> {
  const { topic } = await params;
  const found = MENTOR_TOPICS.find((t) => t.slug === topic);
  return found ? { title: found.title, description: found.text } : {};
}

async function Topic({ params }: Pick<PageProps<"/mentor/[topic]">, "params">) {
  const { topic } = await params;
  return <MentorTopicView slug={topic} />;
}

export default function Page({ params }: PageProps<"/mentor/[topic]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Topic params={params} />
    </Suspense>
  );
}
