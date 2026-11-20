import { LEVEL_PAGES } from "@/shared/config/site";

// Sub-navigation inside one level: the roadmap plus every separate page of that level.
export const trackNav = (slug: string) =>
  LEVEL_PAGES.map((page) => ({
    href: `/tracks/${slug}${page.path ? `/${page.path}` : ""}`,
    label: page.label,
  }));
