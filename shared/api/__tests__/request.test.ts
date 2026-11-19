import { http, HttpResponse } from "msw";
import { describe, expect, it } from "vitest";
import { z } from "zod";

import { isApiError } from "@/shared/api/api-error";
import { createQueryKeys } from "@/shared/api/query-keys";
import { getJson, postJson } from "@/shared/api/request";
import { buildUrl } from "@/shared/api/url";
import { server } from "@/tests/mocks/server";

const schema = z.object({ ok: z.boolean() });

describe("buildUrl", () => {
  it("builds absolute urls and drops empty query values", () => {
    expect(buildUrl("/api/x", { a: 1, b: "", c: undefined, d: null, e: "y" }, "http://localhost:3000")).toBe(
      "http://localhost:3000/api/x?a=1&e=y",
    );
  });
});

describe("getJson / postJson", () => {
  it("returns validated data", async () => {
    server.use(http.get("/api/ping", () => HttpResponse.json({ ok: true })));
    await expect(getJson("/api/ping", schema)).resolves.toEqual({ ok: true });
  });

  it("sends query parameters and JSON bodies", async () => {
    server.use(
      http.get("/api/echo", ({ request }) =>
        HttpResponse.json({ ok: new URL(request.url).searchParams.get("q") === "git" }),
      ),
      http.post("/api/echo", async ({ request }) =>
        HttpResponse.json({ ok: ((await request.json()) as { n: number }).n === 2 }),
      ),
    );
    await expect(getJson("/api/echo", schema, { q: "git" })).resolves.toEqual({ ok: true });
    await expect(postJson("/api/echo", { n: 2 }, schema)).resolves.toEqual({ ok: true });
  });

  it("turns HTTP errors into ApiError with status and details", async () => {
    server.use(http.get("/api/fail", () => HttpResponse.json({ errors: ["bad"] }, { status: 400 })));
    const error = await getJson("/api/fail", schema).catch((e: unknown) => e);
    expect(isApiError(error)).toBe(true);
    expect(error).toMatchObject({ status: 400, details: { errors: ["bad"] } });
    expect((error as { isClientError: boolean }).isClientError).toBe(true);
  });

  it("rejects responses that do not match the schema", async () => {
    server.use(http.get("/api/wrong", () => HttpResponse.json({ ok: "yes" })));
    await expect(getJson("/api/wrong", schema)).rejects.toMatchObject({ name: "ApiError", status: 0 });
  });
});

describe("createQueryKeys", () => {
  it("creates stable, scoped keys", () => {
    const keys = createQueryKeys("lessons");
    expect(keys.all).toEqual(["lessons"]);
    expect(keys.list({ level: "Beginner" })).toEqual(["lessons", "list", { level: "Beginner" }]);
    expect(keys.detail(3)).toEqual(["lessons", "detail", 3]);
  });
});
