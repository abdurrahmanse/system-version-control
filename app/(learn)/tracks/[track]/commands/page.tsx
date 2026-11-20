import type { Metadata } from "next";
import { Suspense } from "react";

import { TRACKS, TrackSectionView } from "@/modules/tracks";
import { PageSkeleton } from "@/shared/components/common/page-skeleton";

export function generateStaticParams() {
  return TRACKS.map((track) => ({ track: track.slug }));
}

export async function generateMetadata({ params }: PageProps<"/tracks/[track]/commands">): Promise<Metadata> {
  const { track } = await params;
  const found = TRACKS.find((item) => item.slug === track);
  return found ? { title: `${found.title}: commands`, description: found.outcome } : {};
}

async function Section({ params }: Pick<PageProps<"/tracks/[track]/commands">, "params">) {
  const { track } = await params;
  return <TrackSectionView slug={track} section="commands" />;
}

export default function Page({ params }: PageProps<"/tracks/[track]/commands">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Section params={params} />
    </Suspense>
  );
}
