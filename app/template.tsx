import type { ReactNode } from "react";

import { PageTransition } from "@/shared/motion/page-transition";

// A template re-mounts on every navigation, which is what replays the slide-in.
export default function Template({ children }: { children: ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
