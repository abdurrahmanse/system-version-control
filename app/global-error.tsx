"use client";

import "./globals.css";

import { CRITICAL_ERROR } from "@/shared/data/errors";

// Last-resort boundary: replaces the root layout, so it renders its own <html> and <body>.
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-8 text-center text-foreground">
        <h1 className="text-3xl font-semibold">{CRITICAL_ERROR.title}</h1>
        <p className="text-muted-foreground">{CRITICAL_ERROR.text}</p>
        <button type="button" onClick={reset} className="border-2 border-edge px-4 py-2 font-label text-xs uppercase">
          {CRITICAL_ERROR.retry}
        </button>
      </body>
    </html>
  );
}
