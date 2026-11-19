import { FEEDBACK } from "@/modules/contact/data/feedback";

export function MessageCounter({ length }: { length: number }) {
  const over = length > FEEDBACK.maxMessage;
  return (
    <p
      aria-live="polite"
      className={`text-right font-label text-xs tracking-wider uppercase ${over ? "text-destructive" : "text-muted-foreground"}`}
    >
      {FEEDBACK.counter(length, FEEDBACK.maxMessage)}
    </p>
  );
}
