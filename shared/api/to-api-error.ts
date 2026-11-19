import { HTTPError } from "ky";
import { ZodError } from "zod";

import { ApiError } from "@/shared/api/api-error";

// Normalises anything thrown by ky or zod into an ApiError.
// ky v2 already parsed the error body into `error.data`.
export function toApiError(error: unknown): ApiError {
  if (error instanceof ApiError) return error;
  if (error instanceof HTTPError) return new ApiError(error.message, error.response.status, error.data);
  if (error instanceof ZodError)
    return new ApiError("The server returned data in an unexpected shape.", 0, error.issues);
  return new ApiError(error instanceof Error ? error.message : "Network error", 0);
}
