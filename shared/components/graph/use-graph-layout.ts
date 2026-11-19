"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";

import type { Rect } from "@/shared/components/graph/edge-path";

// Measures every node card inside the container, and re-measures when anything resizes.
export function useGraphLayout(nodeIds: readonly string[]) {
  const container = useRef<HTMLDivElement>(null);
  const nodes = useRef(new Map<string, HTMLElement>());
  const [rects, setRects] = useState<Record<string, Rect>>({});
  const [size, setSize] = useState({ w: 0, h: 0 });

  const measure = useCallback(() => {
    const box = container.current;
    if (!box) return;
    const next: Record<string, Rect> = {};
    for (const id of nodeIds) {
      const el = nodes.current.get(id);
      if (el) next[id] = { x: el.offsetLeft, y: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight };
    }
    setRects(next);
    setSize({ w: box.offsetWidth, h: box.offsetHeight });
  }, [nodeIds]);

  useLayoutEffect(() => {
    measure();
    const box = container.current;
    if (!box || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(box);
    nodes.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [measure]);

  const register = (id: string) => (el: HTMLElement | null) => {
    if (el) nodes.current.set(id, el);
    else nodes.current.delete(id);
  };

  return { container, rects, size, register };
}
