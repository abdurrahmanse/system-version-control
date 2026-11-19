import type { Metadata } from "next";
import { Suspense } from "react";

import { levelFromSlug, LEVELS, levelSlug } from "@/modules/curriculum";
import { PathLevelView } from "@/modules/path";
import { PageSkeleton } from "@/shared/components/common/page-skeleton";

export function generateStaticParams() {
  return LEVELS.map((l) => ({ level: levelSlug(l.name) }));
}

export async function generateMetadata({ params }: PageProps<"/path/[level]">): Promise<Metadata> {
  const { level } = await params;
  const found = levelFromSlug(level);
  return found ? { title: `${found.name} path`, description: found.tagline } : {};
}

async function Level({ params }: Pick<PageProps<"/path/[level]">, "params">) {
  const { level } = await params;
  return <PathLevelView slug={level} />;
}

export default function Page({ params }: PageProps<"/path/[level]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Level params={params} />
    </Suspense>
  );
}
