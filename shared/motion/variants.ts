import { DEFAULT_DIRECTION, type Direction, MOTION, ROUTE_DIRECTIONS } from "@/shared/motion/config";

export const offsetFor = (direction: Direction) => {
  const d = MOTION.distance;
  switch (direction) {
    case "top":
      return { x: 0, y: -d };
    case "bottom":
      return { x: 0, y: d };
    case "left":
      return { x: -d, y: 0 };
    case "right":
      return { x: d, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
};

export const directionFor = (pathname: string): Direction => {
  const segment = `/${pathname.split("/")[1] ?? ""}`;
  return ROUTE_DIRECTIONS[segment] ?? DEFAULT_DIRECTION;
};
