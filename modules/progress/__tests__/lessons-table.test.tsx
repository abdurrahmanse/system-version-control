import { QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { LessonsTable } from "@/modules/progress/components/lessons-table";
import { createQueryClient } from "@/shared/api/query-client";

describe("LessonsTable", () => {
  it("renders lessons fetched from the API", async () => {
    render(
      <QueryClientProvider client={createQueryClient()}>
        <LessonsTable />
      </QueryClientProvider>,
    );
    expect(await screen.findByRole("link", { name: "Setup" })).toHaveAttribute("href", "/roadmap/setup");
    expect(screen.getByRole("link", { name: "The mental model" })).toBeInTheDocument();
  });
});
