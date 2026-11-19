import { type FeedbackInput, type FeedbackResponse, feedbackResponseSchema } from "@/modules/contact/schemas/feedback";
import { postJson } from "@/shared/api/request";

// POST /api/feedback. The response is validated by zod inside postJson.
export const submitFeedback = (input: FeedbackInput): Promise<FeedbackResponse> =>
  postJson("/api/feedback", input, feedbackResponseSchema);
