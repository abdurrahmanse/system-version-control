import type { Metadata } from "next";
import { Suspense } from "react";

import { PROGRESS_VIEWS, ProgressSectionView } from "@/modules/progress";
import { PageSkeleton } from "@/shared/components/common/page-skeleton";

export function generateStaticParams() {
  return PROGRESS_VIEWS.map((v) => ({ view: v.slug }));
}

export async function generateMetadata({ params }: PageProps<"/progress/[view]">): Promise<Metadata> {
  const { view } = await params;
  const found = PROGRESS_VIEWS.find((v) => v.slug === view);
  return found ? { title: found.title, description: found.text } : {};
}

async function View({ params }: Pick<PageProps<"/progress/[view]">, "params">) {
  const { view } = await params;
  return <ProgressSectionView slug={view} />;
}

export default function Page({ params }: PageProps<"/progress/[view]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <View params={params} />
    </Suspense>
  );
}
