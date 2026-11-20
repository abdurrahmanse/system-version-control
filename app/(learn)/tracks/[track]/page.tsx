import type { Metadata } from "next";
import { Suspense } from "react";

import { TRACKS, TrackView } from "@/modules/tracks";
import { PageSkeleton } from "@/shared/components/common/page-skeleton";

export function generateStaticParams() {
  return TRACKS.map((track) => ({ track: track.slug }));
}

export async function generateMetadata({ params }: PageProps<"/tracks/[track]">): Promise<Metadata> {
  const { track } = await params;
  const found = TRACKS.find((item) => item.slug === track);
  return found ? { title: `${found.title} learning track`, description: found.outcome } : {};
}

async function Track({ params }: Pick<PageProps<"/tracks/[track]">, "params">) {
  const { track } = await params;
  return <TrackView slug={track} />;
}

export default function Page({ params }: PageProps<"/tracks/[track]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Track params={params} />
    </Suspense>
  );
}
