import type { Metadata } from "next";
import { Suspense } from "react";

import { LESSONS } from "@/modules/curriculum";
import { TrackLessonView, TRACKS } from "@/modules/tracks";
import { PageSkeleton } from "@/shared/components/common/page-skeleton";

export function generateStaticParams() {
  return TRACKS.flatMap((track) =>
    LESSONS.filter((lesson) => lesson.level === track.level).map((lesson) => ({
      track: track.slug,
      lesson: String(lesson.n),
    })),
  );
}

export async function generateMetadata({ params }: PageProps<"/tracks/[track]/[lesson]">): Promise<Metadata> {
  const { track, lesson } = await params;
  const trackFound = TRACKS.find((item) => item.slug === track);
  const lessonFound = LESSONS.find((item) => item.n === Number(lesson));
  return trackFound && lessonFound && lessonFound.level === trackFound.level
    ? { title: `${trackFound.title}: ${lessonFound.title}`, description: lessonFound.summary }
    : {};
}

async function Lesson({ params }: Pick<PageProps<"/tracks/[track]/[lesson]">, "params">) {
  const { track, lesson } = await params;
  return <TrackLessonView trackSlug={track} lessonNumber={Number(lesson)} tab="overview" />;
}

export default function Page({ params }: PageProps<"/tracks/[track]/[lesson]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Lesson params={params} />
    </Suspense>
  );
}
