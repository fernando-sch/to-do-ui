import { describe, it, expect } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TasksPage } from "@/tasks/pages/tasks";
import {
  startMockServer,
  renderComponentWithQueryProvider,
} from "@/__tests__/helpers";

describe("TasksPage", () => {
  let server: ReturnType<typeof startMockServer>;

  beforeEach(() => {
    server = startMockServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  it("should render page", async () => {
    renderComponentWithQueryProvider(<TasksPage />);

    await waitFor(() => {
      expect(screen.getByText(/TO DO List/)).toBeDefined();
      expect(screen.getByText(/My Task/)).toBeDefined();
      expect(screen.getByText(/My Second Task/)).toBeDefined();
      expect(screen.getByText(/Good description/)).toBeDefined();
      expect(
        screen.getByText(/Task doesn't have a description./)
      ).toBeDefined();
    });
  });

  it("should open create task modal on new task click", async () => {
    const user = userEvent.setup();

    renderComponentWithQueryProvider(<TasksPage />);

    const newTaskButton = screen.getByRole("button", { name: /New Task/ });

    user.click(newTaskButton);

    await waitFor(() => {
      expect(screen.getByLabelText(/Task Title:/)).toBeDefined();
      expect(screen.getByLabelText(/Task Description:/)).toBeDefined();
      expect(screen.getByRole("button", { name: /Create/ })).toBeDefined();
    });
  });
});
