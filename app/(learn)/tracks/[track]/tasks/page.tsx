import type { Metadata } from "next";
import { Suspense } from "react";

import { TRACKS, TrackSectionView } from "@/modules/tracks";
import { PageSkeleton } from "@/shared/components/common/page-skeleton";

export function generateStaticParams() {
  return TRACKS.map((track) => ({ track: track.slug }));
}

export async function generateMetadata({ params }: PageProps<"/tracks/[track]/tasks">): Promise<Metadata> {
  const { track } = await params;
  const found = TRACKS.find((item) => item.slug === track);
  return found ? { title: `${found.title}: tasks`, description: found.outcome } : {};
}

async function Section({ params }: Pick<PageProps<"/tracks/[track]/tasks">, "params">) {
  const { track } = await params;
  return <TrackSectionView slug={track} section="tasks" />;
}

export default function Page({ params }: PageProps<"/tracks/[track]/tasks">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Section params={params} />
    </Suspense>
  );
}
