import { Badge } from "@/shared/ui/badge";

export function LevelBadge({ level }: { level: string }) {
  return <Badge variant="outline">{level}</Badge>;
}
