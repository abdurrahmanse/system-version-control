import { TriangleAlert } from "lucide-react";
import Link from "next/link";

import { MENTOR_GUARDED } from "@/modules/mentor/data/mentor";
import { Badge } from "@/shared/ui/badge";

// Each guarded command links to its step in the guide.
export function GuardrailList() {
  return (
    <ul className="flex flex-wrap gap-3">
      {MENTOR_GUARDED.map(({ cmd, href }) => (
        <li key={cmd}>
          <Link href={href}>
            <Badge
              variant="outline"
              className="h-8 gap-2 px-3 font-code normal-case hover:bg-foreground hover:text-background"
            >
              <TriangleAlert />
              {cmd}
            </Badge>
          </Link>
        </li>
      ))}
    </ul>
  );
}
