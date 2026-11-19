import type { ReactNode } from "react";

import { PageMain } from "@/shared/components/common/page-main";
import { PrevNext } from "@/shared/components/common/prev-next";
import { PageIntro } from "@/shared/components/hero/page-intro";
import { Container } from "@/shared/components/layout/container";
import { SubNav, type SubNavItem } from "@/shared/components/layout/sub-nav";
import type { HeroCopy } from "@/shared/types/content";

type Link = { href: string; title: string };
type Props = {
  intro: HeroCopy;
  nav: { items: readonly SubNavItem[]; label: string };
  pager?: { prev?: Link; next?: Link };
  children: ReactNode;
};

// One short page inside a section: intro, tabs to the sibling pages, the content, and previous/next links.
export function TopicPage({ intro, nav, pager, children }: Props) {
  return (
    <PageMain>
      <PageIntro copy={intro} />
      <SubNav items={nav.items} label={nav.label} />
      <Container className="space-y-10 py-12">
        {children}
        {pager ? <PrevNext prev={pager.prev} next={pager.next} /> : null}
      </Container>
    </PageMain>
  );
}

// Previous and next entries of an ordered list of topics, for the pager.
export function pagerFor<T extends { slug: string }>(
  list: readonly T[],
  slug: string,
  hrefOf: (item: T) => string,
  titleOf: (item: T) => string,
) {
  const i = list.findIndex((t) => t.slug === slug);
  const prev = i > 0 ? list[i - 1] : undefined;
  const next = i >= 0 && i < list.length - 1 ? list[i + 1] : undefined;
  return {
    prev: prev ? { href: hrefOf(prev), title: titleOf(prev) } : undefined,
    next: next ? { href: hrefOf(next), title: titleOf(next) } : undefined,
  };
}
