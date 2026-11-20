import { EXAMPLE_COPY, EXAMPLE_PAGES } from "@/modules/example/data/example";

// Sub-navigation: the overview plus the ten pages in order.
export const exampleNav = () => [
  { href: "/example", label: EXAMPLE_COPY.overview },
  ...EXAMPLE_PAGES.map((page, index) => ({ href: `/example/${page.slug}`, label: `${index + 1}. ${page.title}` })),
];
