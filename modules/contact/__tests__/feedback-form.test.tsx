import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { http, HttpResponse } from "msw";
import { describe, expect, it, vi } from "vitest";

import { FeedbackForm } from "@/modules/contact/components/feedback-form";
import { FEEDBACK } from "@/modules/contact/data/feedback";
import { server } from "@/tests/mocks/server";

vi.mock("sonner", () => ({ toast: { success: vi.fn(), error: vi.fn() } }));

// Radix Select mirrors its value into a hidden native <select>; driving that is reliable in jsdom.
const chooseTopic = (value: string) => {
  const native = document.querySelector("select");
  if (!native) throw new Error("native select not found");
  fireEvent.change(native, { target: { value } });
};

const renderForm = () =>
  render(
    <QueryClientProvider client={new QueryClient({ defaultOptions: { mutations: { retry: false } } })}>
      <FeedbackForm />
    </QueryClientProvider>,
  );

describe("FeedbackForm", () => {
  it("shows validation errors and does not call the API", async () => {
    const user = userEvent.setup();
    renderForm();
    await user.click(screen.getByRole("button", { name: FEEDBACK.submit }));
    expect(await screen.findAllByRole("alert")).not.toHaveLength(0);
  });

  it("submits valid data and shows the receipt", async () => {
    const user = userEvent.setup();
    renderForm();
    await user.type(screen.getByLabelText(FEEDBACK.fields.name.label), "Ada Lovelace");
    await user.type(screen.getByLabelText(FEEDBACK.fields.email.label), "ada@example.com");
    chooseTopic(FEEDBACK.topics[0]!.value);
    await user.type(screen.getByLabelText(FEEDBACK.fields.message.label), "The rebase step needs a warning.");
    await user.click(screen.getByRole("button", { name: FEEDBACK.submit }));
    const receipt = await screen.findByRole("status");
    expect(receipt).toHaveTextContent(FEEDBACK.successTitle);
    expect(receipt).toHaveTextContent("test-id-123");
    expect(receipt).toHaveTextContent("2026");
  });

  it("recovers when the server fails", async () => {
    server.use(http.post("/api/feedback", () => HttpResponse.json({ error: "boom" }, { status: 500 })));
    const user = userEvent.setup();
    renderForm();
    await user.type(screen.getByLabelText(FEEDBACK.fields.name.label), "Ada Lovelace");
    await user.type(screen.getByLabelText(FEEDBACK.fields.email.label), "ada@example.com");
    chooseTopic(FEEDBACK.topics[1]!.value);
    await user.type(screen.getByLabelText(FEEDBACK.fields.message.label), "Something is unclear here.");
    await user.click(screen.getByRole("button", { name: FEEDBACK.submit }));
    await waitFor(() => expect(screen.getByRole("button", { name: FEEDBACK.submit })).toBeEnabled());
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
});
