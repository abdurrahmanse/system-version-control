import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui/table";

type Props = { heads: readonly string[]; rows: readonly (readonly string[])[]; caption: string };

// Plain accessible table used for static comparisons.
export function DataTable({ heads, rows, caption }: Props) {
  return (
    <div
      role="region"
      aria-label={caption}
      tabIndex={0}
      className="overflow-x-auto border-2 border-edge bg-card shadow-[4px_4px_0_0_var(--shadow-hard)]"
    >
      <Table>
        <caption className="sr-only">{caption}</caption>
        <TableHeader>
          <TableRow>
            {heads.map((h) => (
              <TableHead key={h} className="font-label text-xs tracking-wider uppercase">
                {h}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row[0]}>
              {row.map((cell, i) => (
                <TableCell
                  key={i}
                  className={i === 0 ? "font-heading text-base font-bold" : "align-top text-sm whitespace-normal"}
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
