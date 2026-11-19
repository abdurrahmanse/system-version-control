import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { CopyButton } from "@/modules/guide/components/copy-button";
import { UI } from "@/shared/data/ui";

vi.mock("sonner", () => ({ toast: { success: vi.fn(), error: vi.fn() } }));

describe("CopyButton", () => {
  it("copies the command to the clipboard", async () => {
    const user = userEvent.setup();
    render(<CopyButton text="git status" />);
    await user.click(screen.getByRole("button", { name: UI.copy }));
    expect(await navigator.clipboard.readText()).toBe("git status");
  });
});
