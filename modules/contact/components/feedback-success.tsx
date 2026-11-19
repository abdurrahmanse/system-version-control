import { CircleCheck } from "lucide-react";

import { FEEDBACK as T } from "@/modules/contact/data/feedback";
import type { FeedbackResponse } from "@/modules/contact/schemas/feedback";
import { formatDate } from "@/shared/lib/format";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";

type Props = { receipt: FeedbackResponse; onAnother: () => void };

// Confirmation screen shown instead of the form after a successful submit.
export function FeedbackSuccess({ receipt, onAnother }: Props) {
  return (
    <Card role="status" className="h-full">
      <CardContent className="flex h-full flex-col items-start gap-4 py-6">
        <span className="flex size-12 items-center justify-center border-2 border-edge bg-signal text-primary-foreground">
          <CircleCheck className="size-6" />
        </span>
        <h3 className="font-heading text-3xl font-bold">{T.successTitle}</h3>
        <p className="text-muted-foreground">{T.successText}</p>
        <dl className="grid gap-1 font-label text-sm tracking-wider uppercase">
          <div className="flex gap-2">
            <dt className="text-muted-foreground">{T.reference}:</dt>
            <dd>{receipt.id}</dd>
          </div>
          <div>{T.receivedAt(formatDate(receipt.receivedAt))}</div>
        </dl>
        <Button variant="outline" onClick={onAnother}>
          {T.sendAnother}
        </Button>
      </CardContent>
    </Card>
  );
}
