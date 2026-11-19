"use client";

import { useQuery } from "@tanstack/react-query";

import { fetchLessons } from "@/modules/progress/api/lessons-api";
import { lessonKeys } from "@/modules/progress/api/lessons-keys";

// react-query: the lesson list from the repository-backed API, cached for the session.
export function useLessonsQuery() {
  return useQuery({
    queryKey: lessonKeys.list(),
    queryFn: ({ signal }) => fetchLessons(undefined, signal),
    staleTime: Infinity,
  });
}
