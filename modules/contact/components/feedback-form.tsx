"use client";

import { Send } from "lucide-react";
import { Controller } from "react-hook-form";

import { FeedbackField } from "@/modules/contact/components/feedback-field";
import { FeedbackSuccess } from "@/modules/contact/components/feedback-success";
import { MessageCounter } from "@/modules/contact/components/message-counter";
import { FEEDBACK as T } from "@/modules/contact/data/feedback";
import { useFeedbackForm } from "@/modules/contact/hooks/use-feedback-form";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";
import { Textarea } from "@/shared/ui/textarea";

export function FeedbackForm() {
  const { form, mutation, message, onSubmit } = useFeedbackForm();
  const {
    register,
    control,
    formState: { errors },
  } = form;

  if (mutation.isSuccess) return <FeedbackSuccess receipt={mutation.data} onAnother={() => mutation.reset()} />;

  return (
    <Card>
      <CardContent>
        <form noValidate onSubmit={onSubmit} className="space-y-5">
          <FeedbackField id="name" label={T.fields.name.label} error={errors.name?.message}>
            <Input
              id="name"
              autoComplete="name"
              placeholder={T.fields.name.placeholder}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
            />
          </FeedbackField>
          <FeedbackField id="email" label={T.fields.email.label} error={errors.email?.message}>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder={T.fields.email.placeholder}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
          </FeedbackField>
          <FeedbackField id="topic" label={T.fields.topic.label} error={errors.topic?.message}>
            <Controller
              control={control}
              name="topic"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger id="topic" className="w-full" aria-invalid={Boolean(errors.topic)}>
                    <SelectValue placeholder={T.fields.topic.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {T.topics.map((t) => (
                      <SelectItem key={t.value} value={t.value}>
                        {t.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </FeedbackField>
          <FeedbackField id="message" label={T.fields.message.label} error={errors.message?.message}>
            <Textarea
              id="message"
              rows={5}
              placeholder={T.fields.message.placeholder}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              {...register("message")}
            />
            <MessageCounter length={message.length} />
          </FeedbackField>
          <Button type="submit" disabled={mutation.isPending}>
            <Send data-icon="inline-start" />
            {mutation.isPending ? T.sending : T.submit}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
