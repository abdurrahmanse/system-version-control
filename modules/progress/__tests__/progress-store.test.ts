import { beforeEach, describe, expect, it } from "vitest";

import { useProgressStore } from "@/modules/progress";

describe("progress store", () => {
  beforeEach(() => useProgressStore.getState().reset());

  it("toggles lessons and steps and records activity", () => {
    const s = useProgressStore.getState();
    s.toggleLesson(3);
    expect(useProgressStore.getState().lessons["3"]).toBeTruthy();
    expect(useProgressStore.getState().lastActivity).not.toBeNull();
    useProgressStore.getState().toggleLesson(3);
    expect(useProgressStore.getState().lessons["3"]).toBeUndefined();
    s.toggleStep(7);
    expect(useProgressStore.getState().steps["7"]).toBeTruthy();
  });

  it("stores and clears a goal date", () => {
    useProgressStore.getState().setGoal("2026-12-31");
    expect(useProgressStore.getState().goalDate).toBe("2026-12-31");
    useProgressStore.getState().clearGoal();
    expect(useProgressStore.getState().goalDate).toBeNull();
  });

  it("ignores corrupt persisted data when rehydrating", async () => {
    localStorage.setItem(
      "git-field-guide:progress",
      JSON.stringify({ state: { lessons: "not-an-object" }, version: 1 }),
    );
    await useProgressStore.persist.rehydrate();
    expect(useProgressStore.getState().lessons).toEqual({});
    expect(useProgressStore.getState().hydrated).toBe(true);
  });

  it("restores valid persisted data", async () => {
    localStorage.setItem(
      "git-field-guide:progress",
      JSON.stringify({
        state: { lessons: { "5": 123 }, steps: {}, challenges: {}, goalDate: null, lastActivity: 123 },
        version: 1,
      }),
    );
    await useProgressStore.persist.rehydrate();
    expect(useProgressStore.getState().lessons["5"]).toBe(123);
  });
});
