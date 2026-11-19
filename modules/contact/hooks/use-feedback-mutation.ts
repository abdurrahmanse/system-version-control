"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { submitFeedback } from "@/modules/contact/api/feedback-api";
import { FEEDBACK } from "@/modules/contact/data/feedback";

// react-query mutation around the feedback API, with toast feedback.
export function useFeedbackMutation(onSuccess?: () => void) {
  return useMutation({
    mutationFn: submitFeedback,
    onSuccess: (data) => {
      toast.success(FEEDBACK.success(data.id));
      onSuccess?.();
    },
    onError: () => toast.error(FEEDBACK.failure),
  });
}
