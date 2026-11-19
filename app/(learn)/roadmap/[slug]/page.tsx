import type { Metadata } from "next";
import { Suspense } from "react";

import { getLessonBySlug, LESSONS, lessonSlug } from "@/modules/curriculum";
import { LessonView } from "@/modules/roadmap";
import { PageSkeleton } from "@/shared/components/common/page-skeleton";

export function generateStaticParams() {
  return LESSONS.map((l) => ({ slug: lessonSlug(l.n) }));
}

export async function generateMetadata({ params }: PageProps<"/roadmap/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const found = getLessonBySlug(slug);
  return found ? { title: found.lesson.title, description: found.lesson.summary } : {};
}

// `params` is read inside a Suspense boundary, as required by Cache Components.
async function Lesson({ params }: Pick<PageProps<"/roadmap/[slug]">, "params">) {
  const { slug } = await params;
  return <LessonView slug={slug} tab="overview" />;
}

export default function Page({ params }: PageProps<"/roadmap/[slug]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Lesson params={params} />
    </Suspense>
  );
}
