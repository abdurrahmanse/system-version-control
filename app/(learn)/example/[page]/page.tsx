import type { Metadata } from "next";
import { Suspense } from "react";

import { EXAMPLE_PAGES, ExamplePageView } from "@/modules/example";
import { PageSkeleton } from "@/shared/components/common/page-skeleton";

export function generateStaticParams() {
  return EXAMPLE_PAGES.map((page) => ({ page: page.slug }));
}

export async function generateMetadata({ params }: PageProps<"/example/[page]">): Promise<Metadata> {
  const { page } = await params;
  const found = EXAMPLE_PAGES.find((item) => item.slug === page);
  return found ? { title: `AgroFarm: ${found.title}`, description: found.text } : {};
}

async function Example({ params }: Pick<PageProps<"/example/[page]">, "params">) {
  const { page } = await params;
  return <ExamplePageView slug={page} />;
}

export default function Page({ params }: PageProps<"/example/[page]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Example params={params} />
    </Suspense>
  );
}
