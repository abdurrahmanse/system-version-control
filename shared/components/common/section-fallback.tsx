"use client";

import { TriangleAlert } from "lucide-react";
import type { FallbackProps } from "react-error-boundary";

import { SECTION_ERROR } from "@/shared/data/errors";
import { Button } from "@/shared/ui/button";

export function SectionFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert" className="flex items-center justify-between gap-4 border-2 border-signal bg-signal/10 p-4">
      <p className="flex items-center gap-2 text-sm">
        <TriangleAlert className="size-4 text-signal" />
        {SECTION_ERROR.title}
      </p>
      <Button size="sm" variant="outline" onClick={resetErrorBoundary}>
        {SECTION_ERROR.retry}
      </Button>
    </div>
  );
}
