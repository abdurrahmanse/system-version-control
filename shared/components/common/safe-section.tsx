"use client";

import type { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { SectionFallback } from "@/shared/components/common/section-fallback";

// Contains a crash in one widget so the rest of the page keeps working.
export function SafeSection({ children }: { children: ReactNode }) {
  return <ErrorBoundary FallbackComponent={SectionFallback}>{children}</ErrorBoundary>;
}
