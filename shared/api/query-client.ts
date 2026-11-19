import { QueryClient } from "@tanstack/react-query";

import { isApiError } from "@/shared/api/api-error";

// One factory for the app and for tests. Client errors (4xx) are never retried.
export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60_000,
        refetchOnWindowFocus: false,
        retry: (failureCount, error) => !(isApiError(error) && error.isClientError) && failureCount < 1,
      },
      mutations: { retry: 0 },
    },
  });
}
