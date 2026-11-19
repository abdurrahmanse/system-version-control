import { describe, expect, it } from "vitest";

import { feedbackSchema } from "@/modules/contact";

const valid = {
  name: "Ada",
  email: "ada@example.com",
  topic: "idea",
  message: "Please add a lesson on sparse checkout.",
};

describe("feedbackSchema", () => {
  it("accepts valid input and trims strings", () => {
    const r = feedbackSchema.safeParse({ ...valid, name: "  Ada  " });
    expect(r.success).toBe(true);
    if (r.success) expect(r.data.name).toBe("Ada");
  });

  it.each([
    ["short name", { name: "A" }],
    ["bad email", { email: "nope" }],
    ["unknown topic", { topic: "spam" }],
    ["short message", { message: "too short" }],
    ["huge message", { message: "x".repeat(1001) }],
  ])("rejects %s", (_label, patch) => {
    expect(feedbackSchema.safeParse({ ...valid, ...patch }).success).toBe(false);
  });
});
