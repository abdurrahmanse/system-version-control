import { ArrowUpRight, type LucideIcon } from "lucide-react";
import Link from "next/link";

import { IconTile } from "@/shared/components/common/icon-tile";
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

type Props = { icon: LucideIcon; title: string; text: string; href?: string };

// Icon tile + title + short description. With `href` the whole card becomes a link.
export function InfoCard({ icon, title, text, href }: Props) {
  const card = (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <IconTile icon={icon} />
          {href ? <ArrowUpRight aria-hidden className="size-5 text-signal" /> : null}
        </div>
        <CardTitle className="font-heading text-xl">{title}</CardTitle>
        <CardDescription>{text}</CardDescription>
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
