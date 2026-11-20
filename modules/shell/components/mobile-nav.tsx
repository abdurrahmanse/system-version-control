"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { Fragment, useState } from "react";

import { HEADER, HOME_NAV, NAV_GROUPS, PRIMARY_LINKS } from "@/shared/config/site";
import { UI } from "@/shared/data/ui";
import { Button } from "@/shared/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/shared/ui/sheet";

const linkClass =
  "flex items-center gap-3 px-3 py-2 font-label text-sm uppercase tracking-wider hover:bg-foreground hover:text-background";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden" aria-label={UI.openMenu}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{HEADER.menuTitle}</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 p-4" aria-label={HEADER.menuAria}>
          <Link href={HOME_NAV.href} onClick={close} className={linkClass}>
            <HOME_NAV.icon className="size-4" />
            {HOME_NAV.label}
          </Link>
          {PRIMARY_LINKS.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} onClick={close} className={linkClass}>
              <Icon className="size-4" />
              {label}
            </Link>
          ))}
          {NAV_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="px-3 pb-1 font-label text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {group.label}
              </p>
              {group.items.map(({ href, label, icon: Icon, section }, index) => (
                <Fragment key={href}>
                  {section && section !== group.items[index - 1]?.section ? (
                    <p className="px-3 pt-3 font-label text-xs tracking-[0.2em] text-signal uppercase">{section}</p>
                  ) : null}
                  <Link href={href} onClick={close} className={linkClass}>
                    <Icon className="size-4" />
                    {label}
                  </Link>
                </Fragment>
              ))}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
