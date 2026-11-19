import type { Metadata } from "next";
import { Suspense } from "react";

import { getLessonBySlug, LESSONS, lessonSlug } from "@/modules/curriculum";
import { LessonView } from "@/modules/roadmap";
import { PageSkeleton } from "@/shared/components/common/page-skeleton";

export function generateStaticParams() {
  return LESSONS.map((l) => ({ slug: lessonSlug(l.n) }));
}

export async function generateMetadata({ params }: PageProps<"/roadmap/[slug]/checkpoints">): Promise<Metadata> {
  const { slug } = await params;
  const found = getLessonBySlug(slug);
  return found ? { title: `${found.lesson.title}: checkpoints`, description: found.lesson.summary } : {};
}

async function Lesson({ params }: Pick<PageProps<"/roadmap/[slug]/checkpoints">, "params">) {
  const { slug } = await params;
  return <LessonView slug={slug} tab="checkpoints" />;
}

export default function Page({ params }: PageProps<"/roadmap/[slug]/checkpoints">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Lesson params={params} />
    </Suspense>
  );
}
