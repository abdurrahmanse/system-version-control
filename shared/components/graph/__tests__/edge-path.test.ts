import { describe, expect, it } from "vitest";

import { edgeGeometry, type Rect } from "@/shared/components/graph/edge-path";

const box = (x: number, y: number): Rect => ({ x, y, w: 100, h: 40 });

describe("edgeGeometry", () => {
  it("leaves the right side and enters the left side for a link to the right", () => {
    const { d } = edgeGeometry(box(0, 0), box(300, 0));
    expect(d.startsWith("M 100 20 C")).toBe(true);
    expect(d.endsWith("300 20")).toBe(true);
  });

  it("leaves the left side for a link going back to the left", () => {
    const { d } = edgeGeometry(box(300, 0), box(0, 0));
    expect(d.startsWith("M 300 20 C")).toBe(true);
    expect(d.endsWith("100 20")).toBe(true);
  });

  it("uses top and bottom for a mostly vertical link", () => {
    const { d } = edgeGeometry(box(0, 0), box(0, 200));
    expect(d.startsWith("M 50 40 C")).toBe(true);
    expect(d.endsWith("50 200")).toBe(true);
  });

  it("puts the midpoint halfway along a straight horizontal link", () => {
    const { mid } = edgeGeometry(box(0, 0), box(300, 0));
    expect(mid.x).toBeCloseTo(200, 0);
    expect(mid.y).toBeCloseTo(20, 0);
  });
});
