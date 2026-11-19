import type { Metadata } from "next";
import { Suspense } from "react";

import { groupSlug, PACKAGE_GROUPS, PackageGroupView } from "@/modules/toolbox";
import { PageSkeleton } from "@/shared/components/common/page-skeleton";

export function generateStaticParams() {
  return PACKAGE_GROUPS.map((g) => ({ group: groupSlug(g.title) }));
}

export async function generateMetadata({ params }: PageProps<"/packages/[group]">): Promise<Metadata> {
  const { group } = await params;
  const found = PACKAGE_GROUPS.find((g) => groupSlug(g.title) === group);
  return found ? { title: found.title, description: found.text } : {};
}

async function Group({ params }: Pick<PageProps<"/packages/[group]">, "params">) {
  const { group } = await params;
  return <PackageGroupView slug={group} />;
}

export default function Page({ params }: PageProps<"/packages/[group]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Group params={params} />
    </Suspense>
  );
}
