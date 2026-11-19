import { STRATEGIES } from "@/modules/curriculum";
import { FitMeter } from "@/modules/workflows/components/fit-meter";
import { LabelledText } from "@/modules/workflows/components/labelled-text";
import { WF_FIT, WF_FIT_LABELS, WF_STRATEGY_LABELS } from "@/modules/workflows/data/workflows";
import { Card, CardContent } from "@/shared/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";

// Radix builds element ids from the tab value, so it must not contain spaces.
const valueOf = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

// Pick a strategy to compare. Replaces a comparison table with one focused card per strategy and fit meters.
export function StrategyPicker() {
  return (
    <Tabs defaultValue={valueOf(STRATEGIES[0]?.name ?? "")} aria-label={WF_STRATEGY_LABELS.pickLabel}>
      <TabsList>
        {STRATEGIES.map((s) => (
          <TabsTrigger key={s.name} value={valueOf(s.name)}>
            {s.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {STRATEGIES.map((s) => {
        const fit = WF_FIT[s.name as keyof typeof WF_FIT];
        return (
          <TabsContent key={s.name} value={valueOf(s.name)} className="mt-4">
            <Card>
              <CardContent className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <LabelledText label={WF_STRATEGY_LABELS.how}>{s.how}</LabelledText>
                  <LabelledText label={WF_STRATEGY_LABELS.bestFor}>{s.bestFor}</LabelledText>
                  <LabelledText label={WF_STRATEGY_LABELS.watchOut}>{s.watchOut}</LabelledText>
                </div>
                <div className="space-y-4">
                  <FitMeter label={WF_FIT_LABELS.team} value={fit.team as 1 | 2 | 3} />
                  <FitMeter label={WF_FIT_LABELS.cadence} value={fit.cadence as 1 | 2 | 3} />
                  <FitMeter label={WF_FIT_LABELS.testing} value={fit.testing as 1 | 2 | 3} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
