import { STRATEGIES } from "@/modules/curriculum";
import { DataTable } from "@/modules/workflows/components/data-table";
import { WF_STRATEGIES, WF_TABLE_HEADS } from "@/modules/workflows/data/workflows";

export function StrategyTable() {
  return (
    <DataTable
      caption={WF_STRATEGIES.title}
      heads={WF_TABLE_HEADS.strategy}
      rows={STRATEGIES.map((s) => [s.name, s.how, s.bestFor, s.watchOut])}
    />
  );
}
