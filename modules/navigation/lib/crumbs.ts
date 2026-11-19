import { NAVIGATION } from "@/modules/navigation/data/navigation";
import { groupFor, titleFor } from "@/modules/navigation/lib/titles";

export type Crumb = { label: string; href?: string };

const segments = (pathname: string) => pathname.split("/").filter(Boolean);

// Breadcrumb trail for a pathname: Home > Group > Section > Detail. The last crumb has no link.
export function crumbsFor(pathname: string): Crumb[] {
  const parts = segments(pathname);
  if (parts.length === 0) return [];
  const crumbs: Crumb[] = [{ label: NAVIGATION.homeLabel, href: "/" }];
  const group = groupFor(pathname);
  if (group) crumbs.push({ label: group });
  const sectionHref = `/${parts[0]}`;
  if (parts.length === 1) {
    crumbs.push({ label: titleFor(sectionHref) });
  } else {
    crumbs.push({ label: titleFor(sectionHref), href: sectionHref });
    crumbs.push({ label: titleFor(pathname) });
  }
  return crumbs;
}
