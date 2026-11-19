import { http, HttpResponse } from "msw";

// Default network handlers shared by all tests. Individual tests can override them with server.use().
export const handlers = [
  http.post("/api/feedback", () =>
    HttpResponse.json({ id: "test-id-123", receivedAt: "2026-01-01T00:00:00.000Z" }, { status: 201 }),
  ),
  http.get("/api/search", ({ request }) => {
    const q = new URL(request.url).searchParams.get("q") ?? "";
    return HttpResponse.json({
      query: q,
      results: [
        {
          id: "lesson-8",
          group: "lessons",
          title: "L08 Undo anything",
          subtitle: "restore, reset, revert",
          href: "/roadmap/undo",
        },
      ],
    });
  }),
  http.get("/api/lessons", () =>
    HttpResponse.json({
      lessons: [
        { n: 1, code: "L01", slug: "setup", title: "Setup", level: "Beginner", summary: "Teach Git who you are." },
        {
          n: 2,
          code: "L02",
          slug: "mental-model",
          title: "The mental model",
          level: "Beginner",
          summary: "Three areas.",
        },
      ],
    }),
  ),
  http.post("/api/progress/import", async ({ request }) => {
    const body = (await request.json()) as { data: { lessons: object; steps: object; challenges: object } };
    return HttpResponse.json({
      data: body.data,
      summary: {
        lessons: Object.keys(body.data.lessons).length,
        steps: Object.keys(body.data.steps).length,
        challenges: Object.keys(body.data.challenges).length,
      },
    });
  }),
];
