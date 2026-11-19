"use client";

import Link from "next/link";

import { Container } from "@/shared/components/layout/container";
import { ERROR_PAGE } from "@/shared/data/errors";
import { Button } from "@/shared/ui/button";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const Icon = ERROR_PAGE.icon;
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <Container className="py-32">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <Icon className="size-10 text-signal" />
          <h1 className="font-heading text-4xl font-bold">{ERROR_PAGE.title}</h1>
          <p className="text-muted-foreground">{ERROR_PAGE.text}</p>
          <div className="flex gap-4">
            <Button onClick={reset}>{ERROR_PAGE.retry}</Button>
            <Button asChild variant="outline">
              <Link href="/">{ERROR_PAGE.home}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
