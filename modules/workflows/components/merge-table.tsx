import { MERGE_TYPES } from "@/modules/curriculum";
import { DataTable } from "@/modules/workflows/components/data-table";
import { WF_MERGES, WF_TABLE_HEADS } from "@/modules/workflows/data/workflows";

export function MergeTable() {
  return (
    <DataTable
      caption={WF_MERGES.title}
      heads={WF_TABLE_HEADS.merge}
      rows={MERGE_TYPES.map((m) => [m.name, m.result, m.goodWhen, m.tradeOff])}
    />
  );
}
