"use client";

import { usePathname } from "next/navigation";

import { BackLink } from "@/modules/navigation/components/back-link";
import { crumbsFor } from "@/modules/navigation/lib/crumbs";
import { Breadcrumbs } from "@/shared/components/common/breadcrumbs";
import { Container } from "@/shared/components/layout/container";

// Trail under the header on every page except Home: where you are, how you got here, and a way back.
export function SiteBreadcrumbs() {
  const pathname = usePathname();
  const crumbs = crumbsFor(pathname);
  if (crumbs.length === 0) return null;
  return (
    <div className="border-b border-edge/30 bg-secondary/40">
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-2">
        <Breadcrumbs items={crumbs} className="mb-0" />
        <BackLink />
      </Container>
    </div>
  );
}
