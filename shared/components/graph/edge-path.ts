export type Rect = { x: number; y: number; w: number; h: number };
export type Point = { x: number; y: number };
export type EdgeGeometry = { d: string; mid: Point };

const center = (r: Rect): Point => ({ x: r.x + r.w / 2, y: r.y + r.h / 2 });

// Pure geometry: a smooth cubic curve from the edge of card `a` to the edge of card `b`.
// Mostly horizontal links leave from the side, mostly vertical links from the top or bottom.
export function edgeGeometry(a: Rect, b: Rect): EdgeGeometry {
  const ca = center(a);
  const cb = center(b);
  const horizontal = Math.abs(cb.x - ca.x) >= Math.abs(cb.y - ca.y);

  let p0: Point;
  let p3: Point;
  let p1: Point;
  let p2: Point;
  if (horizontal) {
    const rightwards = cb.x >= ca.x;
    p0 = { x: rightwards ? a.x + a.w : a.x, y: ca.y };
    p3 = { x: rightwards ? b.x : b.x + b.w, y: cb.y };
    const k = Math.max(32, Math.abs(p3.x - p0.x) / 2) * (rightwards ? 1 : -1);
    p1 = { x: p0.x + k, y: p0.y };
    p2 = { x: p3.x - k, y: p3.y };
  } else {
    const downwards = cb.y >= ca.y;
    p0 = { x: ca.x, y: downwards ? a.y + a.h : a.y };
    p3 = { x: cb.x, y: downwards ? b.y : b.y + b.h };
    const k = Math.max(24, Math.abs(p3.y - p0.y) / 2) * (downwards ? 1 : -1);
    p1 = { x: p0.x, y: p0.y + k };
    p2 = { x: p3.x, y: p3.y - k };
  }

  const round = (n: number) => Math.round(n * 10) / 10;
  const d = `M ${round(p0.x)} ${round(p0.y)} C ${round(p1.x)} ${round(p1.y)}, ${round(p2.x)} ${round(p2.y)}, ${round(p3.x)} ${round(p3.y)}`;
  // Point at t = 0.5 of the cubic curve: (P0 + 3 P1 + 3 P2 + P3) / 8
  const mid = { x: (p0.x + 3 * p1.x + 3 * p2.x + p3.x) / 8, y: (p0.y + 3 * p1.y + 3 * p2.y + p3.y) / 8 };
  return { d, mid };
}
