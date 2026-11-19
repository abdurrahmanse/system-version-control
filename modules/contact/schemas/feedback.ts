import { z } from "zod";

const FEEDBACK_TOPICS = ["wrong-command", "unclear", "idea"] as const;

export const feedbackSchema = z.object({
  name: z.string().trim().min(2, "Please enter at least 2 characters").max(60, "Keep it under 60 characters"),
  email: z.email("Enter a valid email address"),
  topic: z.enum(FEEDBACK_TOPICS, { error: "Choose a topic" }),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(1000, "Keep it under 1000 characters"),
});

export type FeedbackInput = z.infer<typeof feedbackSchema>;

export const feedbackResponseSchema = z.object({ id: z.string(), receivedAt: z.string() });
export type FeedbackResponse = z.infer<typeof feedbackResponseSchema>;
