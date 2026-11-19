import { Bot } from "lucide-react";

import { HOME_TRUST } from "@/modules/home/data/home";
import { IconTile } from "@/shared/components/common/icon-tile";
import { LinkArrow } from "@/shared/components/common/link-arrow";
import { Section } from "@/shared/components/section/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

export function TrustSection() {
  return (
    <Section copy={HOME_TRUST}>
      <Card className="max-w-2xl">
        <CardHeader>
          <IconTile icon={Bot} />
          <CardTitle className="font-heading text-2xl">{HOME_TRUST.cardTitle}</CardTitle>
          <CardDescription>{HOME_TRUST.cardText}</CardDescription>
        </CardHeader>
        <CardContent>
          <LinkArrow href={HOME_TRUST.link.href}>{HOME_TRUST.link.label}</LinkArrow>
        </CardContent>
      </Card>
    </Section>
  );
}
