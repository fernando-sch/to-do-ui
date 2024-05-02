import { describe, it, expect } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { TasksPage } from "@/tasks/pages/tasks-page";
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
});
