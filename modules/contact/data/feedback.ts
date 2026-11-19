export const FEEDBACK = {
  fields: {
    name: { label: "Name", placeholder: "Your name" },
    email: { label: "Email", placeholder: "you@example.com" },
    topic: { label: "Topic", placeholder: "Choose a topic" },
    message: { label: "Message", placeholder: "What should be improved?" },
  },
  topics: [
    { value: "wrong-command", label: "A command is wrong" },
    { value: "unclear", label: "A step is unclear" },
    { value: "idea", label: "An idea" },
  ],
  submit: "Send feedback",
  sending: "Sending…",
  success: (id: string) => `Thanks! Reference ${id}`,
  failure: "Could not send feedback. Please try again.",
  receivedAt: (when: string) => `Received ${when}`,
  successTitle: "Thank you",
  successText:
    "Your message passed validation. In this demo it is not stored, but a real report would reach the maintainers.",
  reference: "Reference",
  sendAnother: "Send another message",
  counter: (n: number, max: number) => `${n} / ${max} characters`,
  maxMessage: 1000,
} as const;
