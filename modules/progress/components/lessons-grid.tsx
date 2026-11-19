"use client";

import {
  columnFilteringFeature,
  columnVisibilityFeature,
  createColumnHelper,
  createFilteredRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  filterFn_equalsString,
  filterFn_includesString,
  globalFilteringFeature,
  rowPaginationFeature,
  rowSortingFeature,
  sortFn_alphanumeric,
  sortFn_text,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown, ChevronLeft, ChevronRight, Columns3 } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

import { lessonHref, LEVELS } from "@/modules/curriculum";
import { PROGRESS_UI as T } from "@/modules/progress/data/progress";
import { useLessonsQuery } from "@/modules/progress/hooks/use-lessons-query";
import { useProgress } from "@/modules/progress/hooks/use-progress";
import { FilterBar } from "@/shared/components/filters/filter-bar";
import { FilterChips } from "@/shared/components/filters/filter-chips";
import { FilterSearch } from "@/shared/components/filters/filter-search";
import { FilterSummary } from "@/shared/components/filters/filter-summary";
import { UI } from "@/shared/data/ui";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Skeleton } from "@/shared/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui/table";

type Row = { n: number; code: string; title: string; level: string; status: "done" | "todo"; summary: string };

// Declared once, outside the component, as TanStack Table v9 recommends.
const features = tableFeatures({
  rowSortingFeature,
  columnFilteringFeature,
  globalFilteringFeature,
  rowPaginationFeature,
  columnVisibilityFeature,
  sortedRowModel: createSortedRowModel(),
  filteredRowModel: createFilteredRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  sortFns: { text: sortFn_text, alphanumeric: sortFn_alphanumeric },
  filterFns: { includesString: filterFn_includesString, equalsString: filterFn_equalsString },
});

const columnHelper = createColumnHelper<typeof features, Row>();

const columns = columnHelper.columns([
  columnHelper.accessor("code", {
    id: "code",
    header: T.columns.lesson,
    sortFn: "alphanumeric",
    enableGlobalFilter: false,
  }),
  columnHelper.accessor("title", {
    id: "title",
    header: T.columns.title,
    sortFn: "text",
    filterFn: "includesString",
    cell: (info) => (
      <Link
        className="font-bold underline decoration-signal decoration-2 underline-offset-4 hover:text-signal"
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
    filterFn: "equalsString",
    cell: (info) => <Badge variant="outline">{info.getValue()}</Badge>,
  }),
  columnHelper.accessor("summary", {
    id: "summary",
    header: T.columns.summary,
    enableSorting: false,
    filterFn: "includesString",
  }),
  columnHelper.accessor("status", {
    id: "status",
    header: T.columns.status,
    sortFn: "text",
    filterFn: "equalsString",
    enableGlobalFilter: false,
    cell: (info) =>
      info.getValue() === "done" ? <Badge>{UI.done}</Badge> : <Badge variant="secondary">{UI.todo}</Badge>,
  }),
]);

const PAGE_SIZES = [5, 8, 15] as const;
const ALL = "all";

// Feature-rich data grid: global search, level and status filters, sorting, column visibility and pagination.
export function LessonsGrid() {
  const { hydrated, persisted } = useProgress();
  const lessons = useLessonsQuery();
  const data = useMemo<Row[]>(
    () =>
      (lessons.data?.lessons ?? []).map((l) => ({
        n: l.n,
        code: l.code,
        title: l.title,
        level: l.level,
        summary: l.summary,
        status: hydrated && persisted.lessons[String(l.n)] ? "done" : "todo",
      })),
    [lessons.data, hydrated, persisted.lessons],
  );

  const table = useTable({ features, columns, data, initialState: { pagination: { pageIndex: 0, pageSize: 8 } } });

  if (lessons.isPending) {
    return (
      <div role="status" aria-label={T.lessonsLoading}>
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }
  if (lessons.isError) {
    return (
      <p role="alert" className="text-destructive">
        {T.lessonsError}
      </p>
    );
  }

  const level = String(table.getColumn("level")?.getFilterValue() ?? ALL);
  const status = String(table.getColumn("status")?.getFilterValue() ?? ALL);
  const query = String(table.state.globalFilter ?? "");
  const total = table.getFilteredRowModel().rows.length;
  const { pageIndex, pageSize } = table.state.pagination;
  const canClear = Boolean(query) || level !== ALL || status !== ALL;

  const setFilter = (id: "level" | "status", value: string) => {
    table.getColumn(id)?.setFilterValue(value === ALL ? undefined : value);
    table.setPageIndex(0);
  };

  return (
    <div className="space-y-4">
      <FilterBar
        summary={
          <FilterSummary
            count={UI.resultsCount(total)}
            clearLabel={UI.filterClear}
            canClear={canClear}
            onClear={() => {
              table.resetGlobalFilter();
              table.resetColumnFilters();
              table.setPageIndex(0);
            }}
          />
        }
      >
        <FilterSearch
          value={query}
          onChange={(v) => {
            table.setGlobalFilter(v);
            table.setPageIndex(0);
          }}
          label={T.gridSearch}
          placeholder={T.gridSearch}
        />
        <FilterChips
          label={T.columns.level}
          value={level}
          onChange={(v) => setFilter("level", v)}
          options={[{ value: ALL, label: UI.filterAll }, ...LEVELS.map((l) => ({ value: l.name, label: l.name }))]}
        />
        <FilterChips
          label={T.columns.status}
          value={status}
          onChange={(v) => setFilter("status", v)}
          options={[
            { value: ALL, label: UI.filterAll },
            { value: "done", label: UI.done },
            { value: "todo", label: UI.todo },
          ]}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Columns3 data-icon="inline-start" />
              {T.columnsMenu}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table.getAllLeafColumns().map((column) => (
              <DropdownMenuCheckboxItem
                key={column.id}
                checked={column.getIsVisible()}
                onCheckedChange={(v) => column.toggleVisibility(Boolean(v))}
              >
                {String(column.columnDef.header)}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </FilterBar>

      <div
        role="region"
        aria-label={T.tableTitle}
        tabIndex={0}
        className="overflow-x-auto border-2 border-edge bg-card shadow-[4px_4px_0_0_var(--shadow-hard)]"
      >
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
                      {header.column.getCanSort() ? (
                        <button
                          type="button"
                          onClick={header.column.getToggleSortingHandler()}
                          className="flex items-center gap-1.5 font-label text-xs tracking-wider uppercase hover:text-signal"
                        >
                          <table.FlexRender header={header} />
                          <Icon className="size-3.5" />
                        </button>
                      ) : (
                        <span className="font-label text-xs tracking-wider uppercase">
                          <table.FlexRender header={header} />
                        </span>
                      )}
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
                  <TableCell key={cell.id} className="whitespace-normal">
                    <table.FlexRender cell={cell} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
            {total === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={table.getVisibleLeafColumns().length}
                  className="py-8 text-center text-muted-foreground"
                >
                  {UI.filterNoResults}
                </TableCell>
              </TableRow>
            ) : null}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <label className="flex items-center gap-2 font-label text-xs tracking-wider uppercase">
          {T.rowsPerPage}
          <select
            value={pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="border-2 border-edge bg-card px-2 py-1"
          >
            {PAGE_SIZES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
        <div className="flex items-center gap-3">
          <span aria-live="polite" className="font-label text-xs tracking-wider text-muted-foreground uppercase">
            {T.pageOf(pageIndex + 1, Math.max(1, table.getPageCount()))}
          </span>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            aria-label={UI.previous}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            aria-label={UI.next}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
