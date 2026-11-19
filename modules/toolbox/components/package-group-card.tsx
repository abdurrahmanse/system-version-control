import { Database, FlaskConical, FormInput, type LucideIcon, Network, Palette, Tag, Wrench } from "lucide-react";

import { PackageRow } from "@/modules/toolbox/components/package-row";
import type { PackageGroup } from "@/modules/toolbox/data/packages";
import { IconTile } from "@/shared/components/common/icon-tile";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

const ICONS: Record<PackageGroup["icon"], LucideIcon> = {
  form: FormInput,
  data: Database,
  ui: Palette,
  util: Wrench,
  test: FlaskConical,
  quality: Tag,
  arch: Network,
};

export function PackageGroupCard({ group }: { group: PackageGroup }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <IconTile icon={ICONS[group.icon]} />
        <CardTitle className="font-heading text-xl">{group.title}</CardTitle>
        <CardDescription>{group.text}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {group.items.map((p) => (
            <PackageRow key={p.name} pkg={p} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
