import { Compass, TriangleAlert } from "lucide-react";

export const NOT_FOUND = {
  icon: Compass,
  code: "404",
  title: "This page does not exist",
  text: "The link may be old, or the lesson may have moved. Try the roadmap.",
  primary: { label: "Go home", href: "/" },
  secondary: { label: "Open the roadmap", href: "/roadmap" },
} as const;

export const ERROR_PAGE = {
  icon: TriangleAlert,
  title: "Something went wrong",
  text: "An unexpected error occurred. You can try again.",
  retry: "Try again",
  home: "Go home",
} as const;

export const CRITICAL_ERROR = {
  title: "Something went wrong",
  text: "A critical error occurred. Please try again.",
  retry: "Try again",
} as const;

export const SECTION_ERROR = { title: "This section failed to load", retry: "Retry" } as const;
