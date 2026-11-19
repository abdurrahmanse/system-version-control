import { Package } from "lucide-react";
import { notFound } from "next/navigation";

import { PackageRow } from "@/modules/toolbox/components/package-row";
import { PACKAGE_GROUPS } from "@/modules/toolbox/data/packages";
import { PACKAGES_NAV } from "@/modules/toolbox/data/toolbox";
import { groupSlug } from "@/modules/toolbox/lib/package-graph";
import { PACKAGES_SUBNAV } from "@/modules/toolbox/views/toolbox-view";
import { pagerFor, TopicPage } from "@/shared/components/layout/topic-page";

const groups = PACKAGE_GROUPS.map((g) => ({ ...g, slug: groupSlug(g.title) }));

export function PackageGroupView({ slug }: { slug: string }) {
  const group = groups.find((g) => g.slug === slug);
  if (!group) notFound();
  return (
    <TopicPage
      intro={{
        badge: PACKAGES_NAV.overview,
        icon: Package,
        title: { top: `${group.title}:`, accent: group.text },
        description: "Each package has one job and one place in the code.",
        primary: { label: "All categories", href: "/packages" },
      }}
      nav={{ items: PACKAGES_SUBNAV, label: PACKAGES_NAV.label }}
      pager={pagerFor(
        groups,
        group.slug,
        (g) => `/packages/${g.slug}`,
        (g) => g.title,
      )}
    >
      <ul className="max-w-3xl space-y-6 border-2 border-edge bg-card p-6 shadow-[4px_4px_0_0_var(--shadow-hard)]">
        {group.items.map((p) => (
          <PackageRow key={p.name} pkg={p} />
        ))}
      </ul>
    </TopicPage>
  );
}
