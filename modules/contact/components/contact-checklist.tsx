import { CONTACT_ASIDE as A } from "@/modules/contact/data/contact";
import { CheckList } from "@/shared/components/common/check-list";
import { IconTile } from "@/shared/components/common/icon-tile";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export function ContactChecklist() {
  return (
    <Card>
      <CardHeader>
        <IconTile icon={A.checklist.icon} />
        <CardTitle className="font-heading text-xl">{A.checklist.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CheckList items={A.checklist.items} />
      </CardContent>
    </Card>
  );
}
