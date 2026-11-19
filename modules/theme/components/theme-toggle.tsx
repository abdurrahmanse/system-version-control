"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { ThemeMenuItem } from "@/modules/theme/components/theme-menu-item";
import { HEADER } from "@/shared/config/site";
import { UI } from "@/shared/data/ui";
import { Button } from "@/shared/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/shared/ui/dropdown-menu";

const OPTIONS = [
  { value: "light", label: UI.themes.light, icon: Sun },
  { value: "dark", label: UI.themes.dark, icon: Moon },
  { value: "system", label: UI.themes.system, icon: Monitor },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label={HEADER.themeLabel}>
          <Sun className="dark:hidden" />
          <Moon className="hidden dark:block" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {OPTIONS.map((o) => (
          <ThemeMenuItem
            key={o.value}
            label={o.label}
            icon={o.icon}
            active={theme === o.value}
            onSelect={() => setTheme(o.value)}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
