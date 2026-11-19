import type { ComponentProps, ElementType } from "react";

import { cn } from "@/shared/lib/utils";

// The ONE page container. Every header, section, footer and page body uses it, so all
// content shares the same width and side gutters. Narrower reading columns go inside it.
const CONTAINER_CLASS = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 2xl:max-w-7xl";

type Props<T extends ElementType> = { as?: T } & Omit<ComponentProps<T>, "as">;

export function Container<T extends ElementType = "div">({ as, className, ...props }: Props<T>) {
  const Tag: ElementType = as ?? "div";
  return <Tag className={cn(CONTAINER_CLASS, className)} {...props} />;
}
