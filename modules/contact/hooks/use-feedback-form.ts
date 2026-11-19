"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";

import { useFeedbackMutation } from "@/modules/contact/hooks/use-feedback-mutation";
import { type FeedbackInput, feedbackSchema } from "@/modules/contact/schemas/feedback";

// All form logic in one hook: validation (zod), submission (mutation) and the message length.
export function useFeedbackForm() {
  const form = useForm<FeedbackInput>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: { name: "", email: "", message: "" },
  });
  const mutation = useFeedbackMutation(() => form.reset());
  const message = useWatch({ control: form.control, name: "message" }) ?? "";
  const onSubmit = form.handleSubmit((values) => mutation.mutate(values));
  return { form, mutation, message, onSubmit };
}
