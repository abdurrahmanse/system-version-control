import type { ZodType } from "zod";

import { httpClient } from "@/shared/api/http-client";
import { toApiError } from "@/shared/api/to-api-error";
import { buildUrl, type Query } from "@/shared/api/url";

// Typed requests: every response is validated with a zod schema before it reaches the UI.
export async function getJson<T>(path: string, schema: ZodType<T>, query?: Query, signal?: AbortSignal): Promise<T> {
  try {
    return schema.parse(await httpClient.get(buildUrl(path, query), { signal }).json());
  } catch (error) {
    throw toApiError(error);
  }
}

export async function postJson<T>(path: string, body: unknown, schema: ZodType<T>, signal?: AbortSignal): Promise<T> {
  try {
    return schema.parse(await httpClient.post(buildUrl(path), { json: body, signal }).json());
  } catch (error) {
    throw toApiError(error);
  }
}
