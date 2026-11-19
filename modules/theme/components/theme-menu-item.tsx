"use client";

import { Check, type LucideIcon } from "lucide-react";

import { DropdownMenuItem } from "@/shared/ui/dropdown-menu";

type Props = { label: string; icon: LucideIcon; active: boolean; onSelect: () => void };

export function ThemeMenuItem({ label, icon: Icon, active, onSelect }: Props) {
  return (
    <DropdownMenuItem onClick={onSelect}>
      <Icon />
      {label}
      {active ? <Check className="ml-auto" /> : null}
    </DropdownMenuItem>
  );
}
