import { ArrowUpRight, type LucideIcon } from "lucide-react";
import Link from "next/link";

import { IconTile } from "@/shared/components/common/icon-tile";
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

type Props = { icon: LucideIcon; value: string | number; label: string; href?: string };

export function StatCard({ icon, value, label, href }: Props) {
  const card = (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <IconTile icon={icon} />
          {href ? <ArrowUpRight aria-hidden className="size-5 text-signal" /> : null}
        </div>
        <CardTitle className="font-heading text-5xl">{value}</CardTitle>
        <CardDescription className="font-label text-xs tracking-wider uppercase">{label}</CardDescription>
      </CardHeader>
    </Card>
  );
  return href ? (
    <Link href={href} className="block h-full transition-transform hover:-translate-x-px hover:-translate-y-px">
      {card}
    </Link>
  ) : (
    card
  );
}
