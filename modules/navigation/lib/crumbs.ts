import { NAVIGATION } from "@/modules/navigation/data/navigation";
import { groupFor, titleFor } from "@/modules/navigation/lib/titles";

export type Crumb = { label: string; href?: string };

// Breadcrumb trail for a pathname: Home > Group > every ancestor page > this page. The last crumb has no link.
export function crumbsFor(pathname: string): Crumb[] {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return [];
  const crumbs: Crumb[] = [{ label: NAVIGATION.homeLabel, href: "/" }];
  const group = groupFor(pathname);
  if (group) crumbs.push({ label: group });
  parts.forEach((_, i) => {
    const path = `/${parts.slice(0, i + 1).join("/")}`;
    const last = i === parts.length - 1;
    crumbs.push(last ? { label: titleFor(path) } : { label: titleFor(path), href: path });
  });
  return crumbs;
}
