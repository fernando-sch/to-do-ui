import { describe, it, expect, vi } from "vitest";
import { waitFor, act } from "@testing-library/react";
import { useCreateTask } from "@/tasks/hooks/use-create-task";
import {
  startMockServer,
  renderHookWithQueryProvider,
} from "@/__tests__/helpers";

describe("useCreateTask", () => {
  let server: ReturnType<typeof startMockServer>;

  beforeEach(() => {
    server = startMockServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  it("should return success", async () => {
    const taskAttrs = { title: "My Task", description: "Good description" };
    const { result } = renderHookWithQueryProvider(useCreateTask);

    await act(() => result.current.createTask(taskAttrs));

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
  });
});
