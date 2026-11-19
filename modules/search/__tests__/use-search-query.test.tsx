import { QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import type { ReactNode } from "react";
import { describe, expect, it } from "vitest";

import { useSearchQuery } from "@/modules/search/hooks/use-search-query";
import { createQueryClient } from "@/shared/api/query-client";

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={createQueryClient()}>{children}</QueryClientProvider>
);

describe("useSearchQuery", () => {
  it("does not fetch for an empty term", () => {
    const { result } = renderHook(() => useSearchQuery("  "), { wrapper });
    expect(result.current.fetchStatus).toBe("idle");
  });

  it("fetches and validates results for a term", async () => {
    const { result } = renderHook(() => useSearchQuery("undo"), { wrapper });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data?.results[0]?.href).toBe("/roadmap/undo");
  });
});
