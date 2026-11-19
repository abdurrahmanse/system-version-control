export type Direction = "top" | "bottom" | "left" | "right" | "fade";

// Which side a page slides in from, by first URL segment.
export const ROUTE_DIRECTIONS: Record<string, Direction> = {
  "/": "bottom",
  "/roadmap": "right",
  "/guide": "bottom",
  "/concepts": "left",
  "/workflows": "left",
  "/glossary": "right",
  "/practice": "top",
  "/progress": "top",
  "/packages": "bottom",
  "/mentor": "top",
};

export const DEFAULT_DIRECTION: Direction = "fade";

export const MOTION = { distance: 40, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const, stagger: 0.07 } as const;
