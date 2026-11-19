import { nanoid } from "nanoid";

export { feedbackSchema } from "@/modules/contact/schemas/feedback";

// Server-only entry point: the receipt the demo endpoint returns. Nothing is stored.
export const createReceipt = () => ({ id: nanoid(10), receivedAt: new Date().toISOString() });
