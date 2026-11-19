import { RELEASES } from "@/modules/info/data/changelog";
import { CheckList } from "@/shared/components/common/check-list";
import { formatDate } from "@/shared/lib/format";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export function ReleaseList() {
  return (
    <div className="max-w-3xl space-y-6">
      {RELEASES.map((r) => (
        <Card key={r.version}>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge>v{r.version}</Badge>
              <CardTitle className="font-heading text-xl">{formatDate(r.date)}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CheckList items={r.notes} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
