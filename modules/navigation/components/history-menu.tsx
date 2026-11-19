"use client";

import { History, Trash2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

import { NAVIGATION } from "@/modules/navigation/data/navigation";
import { useHistory } from "@/modules/navigation/hooks/use-history";
import { useHistoryStore } from "@/modules/navigation/store/history-store";
import { formatRelative } from "@/shared/lib/format";
import { Button } from "@/shared/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";

// Header button listing the pages you opened in this tab, newest first.
export function HistoryMenu() {
  const { entries, hydrated, pathname } = useHistory();
  const clear = useHistoryStore((s) => s.clear);
  const list = hydrated ? entries : [];
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" aria-label={NAVIGATION.historyLabel}>
          <History />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 p-0">
        <p className="border-b-2 border-edge px-3 py-2 font-label text-xs tracking-[0.2em] text-muted-foreground uppercase">
          {NAVIGATION.historyTitle}
        </p>
        {list.length === 0 ? (
          <p className="p-3 text-sm text-muted-foreground">{NAVIGATION.historyEmpty}</p>
        ) : (
          <ol className="max-h-72 overflow-y-auto">
            {list.map((e) => (
              <li key={`${e.href}-${e.at}`}>
                <Link
                  href={e.href}
                  aria-current={e.href === pathname ? "page" : undefined}
                  className="flex items-baseline justify-between gap-3 px-3 py-2 text-sm hover:bg-secondary"
                >
                  <span className="font-bold">{e.title}</span>
                  <span className="shrink-0 font-label text-xs text-muted-foreground">{formatRelative(e.at)}</span>
                </Link>
              </li>
            ))}
          </ol>
        )}
        {list.length > 0 ? (
          <div className="border-t-2 border-edge p-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                clear();
                toast(NAVIGATION.historyCleared);
              }}
            >
              <Trash2 data-icon="inline-start" />
              {NAVIGATION.historyClear}
            </Button>
          </div>
        ) : null}
      </PopoverContent>
    </Popover>
  );
}
