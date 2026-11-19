"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { type ReactNode, useState } from "react";

import { HistoryTracker } from "@/modules/navigation";
import { ProgressHydrator } from "@/modules/progress";
import { ThemedToaster, ThemeProvider } from "@/modules/theme";
import { createQueryClient } from "@/shared/api/query-client";
import { MotionProvider } from "@/shared/motion/motion-provider";

// All client-side providers in one place, outermost first.
export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(createQueryClient);
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <MotionProvider>
        <QueryClientProvider client={queryClient}>
          <NuqsAdapter>
            {children}
            <ProgressHydrator />
            <HistoryTracker />
            <ThemedToaster />
          </NuqsAdapter>
        </QueryClientProvider>
      </MotionProvider>
    </ThemeProvider>
  );
}
