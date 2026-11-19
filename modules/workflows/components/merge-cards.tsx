import { MERGE_TYPES } from "@/modules/curriculum";
import { LabelledText } from "@/modules/workflows/components/labelled-text";
import { WF_MERGE_LABELS } from "@/modules/workflows/data/workflows";
import { CardGrid } from "@/shared/components/cards/card-grid";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

// The three ways to merge a pull request, one card each.
export function MergeCards() {
  return (
    <CardGrid>
      {MERGE_TYPES.map((m) => (
        <Card key={m.name} className="h-full">
          <CardHeader>
            <CardTitle className="font-heading text-2xl">{m.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <LabelledText label={WF_MERGE_LABELS.result}>{m.result}</LabelledText>
            <LabelledText label={WF_MERGE_LABELS.goodWhen}>{m.goodWhen}</LabelledText>
            <LabelledText label={WF_MERGE_LABELS.tradeOff}>{m.tradeOff}</LabelledText>
          </CardContent>
        </Card>
      ))}
    </CardGrid>
  );
}
