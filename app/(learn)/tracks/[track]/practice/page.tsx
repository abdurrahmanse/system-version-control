import type { Metadata } from "next";
import { Suspense } from "react";

import { TRACKS, TrackSectionView } from "@/modules/tracks";
import { PageSkeleton } from "@/shared/components/common/page-skeleton";

export function generateStaticParams() {
  return TRACKS.map((track) => ({ track: track.slug }));
}

export async function generateMetadata({ params }: PageProps<"/tracks/[track]/practice">): Promise<Metadata> {
  const { track } = await params;
  const found = TRACKS.find((item) => item.slug === track);
  return found ? { title: `${found.title}: practice`, description: found.outcome } : {};
}

async function Section({ params }: Pick<PageProps<"/tracks/[track]/practice">, "params">) {
  const { track } = await params;
  return <TrackSectionView slug={track} section="practice" />;
}

export default function Page({ params }: PageProps<"/tracks/[track]/practice">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Section params={params} />
    </Suspense>
  );
}
