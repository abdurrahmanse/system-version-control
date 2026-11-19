import { MENTOR_EXAMPLE as E } from "@/modules/mentor/data/mentor";
import { CodeChip } from "@/shared/components/common/code-chip";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export function ExampleAnswer() {
  return (
    <Card className="max-w-3xl">
      <CardHeader>
        <CardTitle className="font-heading text-xl">{E.question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <p>
          <Badge className="mr-2">{E.verified.label}</Badge>
          <CodeChip>{E.verified.code1}</CodeChip>
          {E.verified.mid}
          <CodeChip>{E.verified.code2}</CodeChip>
          {E.verified.after}
        </p>
        <p>
          <Badge variant="outline" className="mr-2">
            {E.docs.label}
          </Badge>
          {E.docs.text}
        </p>
        <p>
          <Badge variant="secondary" className="mr-2">
            {E.unverified.label}
          </Badge>
          {E.unverified.text}
        </p>
      </CardContent>
    </Card>
  );
}
