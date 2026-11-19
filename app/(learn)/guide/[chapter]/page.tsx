import type { Metadata } from "next";
import { Suspense } from "react";

import { CHAPTERS, getChapter } from "@/modules/curriculum";
import { GuideChapterView } from "@/modules/guide";
import { PageSkeleton } from "@/shared/components/common/page-skeleton";

export function generateStaticParams() {
  return CHAPTERS.map((c) => ({ chapter: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/guide/[chapter]">): Promise<Metadata> {
  const { chapter } = await params;
  const found = getChapter(chapter);
  return found ? { title: `${found.n}. ${found.title}`, description: found.summary } : {};
}

// `params` is read inside a Suspense boundary, as required by Cache Components.
async function Chapter({ params }: Pick<PageProps<"/guide/[chapter]">, "params">) {
  const { chapter } = await params;
  return <GuideChapterView slug={chapter} />;
}

export default function Page({ params }: PageProps<"/guide/[chapter]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Chapter params={params} />
    </Suspense>
  );
}
