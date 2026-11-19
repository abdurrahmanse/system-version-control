import { beforeEach, describe, expect, it } from "vitest";

import { useHistoryStore } from "@/modules/navigation/store/history-store";

describe("history store", () => {
  beforeEach(() => useHistoryStore.getState().clear());

  it("records visits newest first", () => {
    const { visit } = useHistoryStore.getState();
    visit({ href: "/", title: "Home" });
    visit({ href: "/roadmap", title: "Roadmap" });
    expect(useHistoryStore.getState().entries.map((e) => e.href)).toEqual(["/roadmap", "/"]);
  });

  it("does not duplicate a reload of the same page", () => {
    const { visit } = useHistoryStore.getState();
    visit({ href: "/guide", title: "Guide" });
    visit({ href: "/guide", title: "Guide" });
    expect(useHistoryStore.getState().entries).toHaveLength(1);
  });

  it("keeps only the latest 10 pages", () => {
    const { visit } = useHistoryStore.getState();
    for (let i = 0; i < 15; i++) visit({ href: `/p${i}`, title: `P${i}` });
    const { entries } = useHistoryStore.getState();
    expect(entries).toHaveLength(10);
    expect(entries[0]?.href).toBe("/p14");
  });

  it("clears the trail", () => {
    useHistoryStore.getState().visit({ href: "/a", title: "A" });
    useHistoryStore.getState().clear();
    expect(useHistoryStore.getState().entries).toEqual([]);
  });
});
