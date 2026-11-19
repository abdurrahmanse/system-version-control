import { CheckListItem } from "@/shared/components/common/check-list-item";

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-1.5 text-sm">
      {items.map((item) => (
        <CheckListItem key={item}>{item}</CheckListItem>
      ))}
    </ul>
  );
}
