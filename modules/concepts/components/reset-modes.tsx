import { Check, X } from "lucide-react";
import Link from "next/link";

import { RESET_HEADS, RESET_MODES, RESET_YES_NO } from "@/modules/concepts/data/concepts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui/table";

function Mark({ on }: { on: boolean }) {
  const Icon = on ? Check : X;
  return (
    <span className="inline-flex items-center gap-1.5">
      <Icon aria-hidden className={on ? "size-4 text-signal" : "size-4 text-muted-foreground"} />
      <span className="sr-only">{on ? RESET_YES_NO.yes : RESET_YES_NO.no}</span>
    </span>
  );
}

// Which parts each `git reset` mode touches, as a table with check and cross marks.
export function ResetModes() {
  return (
    <div
      role="region"
      aria-label={RESET_HEADS[0]}
      tabIndex={0}
      className="overflow-x-auto border-2 border-edge bg-card shadow-[4px_4px_0_0_var(--shadow-hard)]"
    >
      <Table>
        <TableHeader>
          <TableRow>
            {RESET_HEADS.map((h) => (
              <TableHead key={h} className="font-label text-xs tracking-wider uppercase">
                {h}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {RESET_MODES.map((r) => (
            <TableRow key={r.mode}>
              <TableCell>
                <Link
                  href={r.href}
                  className="font-code text-sm underline decoration-signal decoration-2 underline-offset-4 hover:text-signal"
                >
                  {r.mode}
                </Link>
              </TableCell>
              <TableCell>
                <Mark on={r.moves} />
              </TableCell>
              <TableCell>
                <Mark on={r.staging} />
              </TableCell>
              <TableCell>
                <Mark on={r.files} />
              </TableCell>
              <TableCell className="text-sm whitespace-normal">{r.use}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
