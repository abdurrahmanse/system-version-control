"use client";

import {
  createColumnHelper,
  createSortedRowModel,
  rowSortingFeature,
  sortFn_alphanumeric,
  sortFn_text,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

import { lessonHref } from "@/modules/curriculum";
import { PROGRESS_UI as T } from "@/modules/progress/data/progress";
import { useLessonsQuery } from "@/modules/progress/hooks/use-lessons-query";
import { useProgress } from "@/modules/progress/hooks/use-progress";
import { UI } from "@/shared/data/ui";
import { Badge } from "@/shared/ui/badge";
import { Skeleton } from "@/shared/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui/table";

type Row = { n: number; code: string; title: string; level: string; done: boolean };

// Declared once, outside the component, as recommended by TanStack Table v9.
const features = tableFeatures({
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  sortFns: { text: sortFn_text, alphanumeric: sortFn_alphanumeric },
});

const columnHelper = createColumnHelper<typeof features, Row>();

const columns = columnHelper.columns([
  columnHelper.accessor("code", {
    id: "code",
    header: T.columns.lesson,
    sortFn: "alphanumeric",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("title", {
    id: "title",
    header: T.columns.title,
    sortFn: "text",
    cell: (info) => (
      <Link
        className="underline decoration-signal decoration-2 underline-offset-4 hover:text-signal"
        href={lessonHref(info.row.original.n)}
      >
        {info.getValue()}
      </Link>
    ),
  }),
  columnHelper.accessor("level", {
    id: "level",
    header: T.columns.level,
    sortFn: "text",
    cell: (info) => <Badge variant="outline">{info.getValue()}</Badge>,
  }),
  columnHelper.accessor("done", {
    id: "done",
    header: T.columns.status,
    sortFn: "alphanumeric",
    cell: (info) => (info.getValue() ? <Badge>{UI.done}</Badge> : <Badge variant="secondary">{UI.todo}</Badge>),
  }),
]);

export function LessonsTable() {
  const { hydrated, persisted } = useProgress();
  const lessons = useLessonsQuery();
  const data = useMemo<Row[]>(
    () =>
      (lessons.data?.lessons ?? []).map((l) => ({
        n: l.n,
        code: l.code,
        title: l.title,
        level: l.level,
        done: hydrated && Boolean(persisted.lessons[String(l.n)]),
      })),
    [lessons.data, hydrated, persisted.lessons],
  );

  const table = useTable({ features, columns, data });

  if (lessons.isPending)
    return (
      <div role="status" aria-label={T.lessonsLoading}>
        <Skeleton className="h-64 w-full" />
      </div>
    );
  if (lessons.isError)
    return (
      <p role="alert" className="text-destructive">
        {T.lessonsError}
      </p>
    );

  return (
    <div className="overflow-x-auto border-2 border-edge bg-card shadow-[4px_4px_0_0_var(--shadow-hard)]">
      <Table>
        <caption className="sr-only">{T.tableTitle}</caption>
        <TableHeader>
          {table.getHeaderGroups().map((group) => (
            <TableRow key={group.id}>
              {group.headers.map((header) => {
                const sorted = header.column.getIsSorted();
                const Icon = sorted === "asc" ? ArrowUp : sorted === "desc" ? ArrowDown : ArrowUpDown;
                return (
                  <TableHead
                    key={header.id}
                    aria-sort={sorted === "asc" ? "ascending" : sorted === "desc" ? "descending" : "none"}
                  >
                    <button
                      type="button"
                      onClick={header.column.getToggleSortingHandler()}
                      className="flex items-center gap-1.5 font-label text-xs tracking-wider uppercase hover:text-signal"
                    >
                      <table.FlexRender header={header} />
                      <Icon className="size-3.5" />
                    </button>
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getAllCells().map((cell) => (
                <TableCell key={cell.id}>
                  <table.FlexRender cell={cell} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
