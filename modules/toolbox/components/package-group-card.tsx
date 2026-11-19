import { Database, FlaskConical, FormInput, type LucideIcon, Network, Palette, Tag, Wrench } from "lucide-react";

import type { PackageGroup } from "@/modules/toolbox/data/packages";
import { PACKAGES_GROUP_UI } from "@/modules/toolbox/data/toolbox";
import { InfoCard } from "@/shared/components/cards/info-card";

const ICONS: Record<PackageGroup["icon"], LucideIcon> = {
  form: FormInput,
  data: Database,
  ui: Palette,
  util: Wrench,
  test: FlaskConical,
  quality: Tag,
  arch: Network,
};

// A category as a link card. The packages themselves are listed on the category page.
export function PackageGroupCard({ group, href }: { group: PackageGroup; href: string }) {
  return (
    <InfoCard
      icon={ICONS[group.icon]}
      title={group.title}
      text={`${group.text} ${PACKAGES_GROUP_UI.count(group.items.length)}.`}
      href={href}
    />
  );
}
