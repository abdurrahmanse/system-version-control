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

export async function generateMetadata({ params }: PageProps<"/tracks/[track]/[lesson]/commands">): Promise<Metadata> {
  const { track, lesson } = await params;
  const trackFound = TRACKS.find((item) => item.slug === track);
  const lessonFound = LESSONS.find((item) => item.n === Number(lesson));
  return trackFound && lessonFound
    ? { title: `${trackFound.title}: ${lessonFound.title} commands`, description: lessonFound.summary }
    : {};
}

async function Commands({ params }: Pick<PageProps<"/tracks/[track]/[lesson]/commands">, "params">) {
  const { track, lesson } = await params;
  return <TrackLessonView trackSlug={track} lessonNumber={Number(lesson)} tab="commands" />;
}

export default function Page({ params }: PageProps<"/tracks/[track]/[lesson]/commands">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Commands params={params} />
    </Suspense>
  );
}
