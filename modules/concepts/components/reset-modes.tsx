import { Check, Minus, TriangleAlert } from "lucide-react";
import Link from "next/link";

import { RESET_LAYER_NAMES, RESET_MODES, RESET_YES_NO } from "@/modules/concepts/data/concepts";
import { cn } from "@/shared/lib/utils";
import { Stagger, StaggerItem } from "@/shared/motion/stagger";

// The three `git reset` modes as cards. Each card lists the three layers and which ones it changes.
export function ResetModes() {
  return (
    <Stagger as="ul" className="grid gap-4 md:grid-cols-3">
      {RESET_MODES.map((r) => (
        <StaggerItem key={r.mode} as="li">
          <Link
            href={r.href}
            className={cn(
              "block h-full space-y-4 border-2 bg-card p-4 shadow-[3px_3px_0_0_var(--shadow-hard)] transition-transform hover:-translate-x-px hover:-translate-y-px",
              r.danger ? "border-signal" : "border-edge",
            )}
          >
            <p className="flex items-center gap-2 font-code text-sm font-bold">
              {r.danger ? <TriangleAlert className="size-4 text-signal" /> : null}
              {r.mode}
            </p>
            <ul className="space-y-2">
              {RESET_LAYER_NAMES.map((name, i) => {
                const changed = r.layers[i];
                const Icon = changed ? Check : Minus;
                return (
                  <li
                    key={name}
                    className={cn(
                      "flex items-center gap-2 border-2 px-2 py-1 text-sm",
                      changed ? "border-signal bg-signal/10" : "border-edge/40 text-muted-foreground",
                    )}
                  >
                    <Icon aria-hidden className="size-4" />
                    <span className="font-bold">{name}</span>
                    <span className="sr-only">{changed ? RESET_YES_NO.yes : RESET_YES_NO.no}</span>
                  </li>
                );
              })}
            </ul>
            <p className="text-sm text-muted-foreground">{r.use}</p>
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
