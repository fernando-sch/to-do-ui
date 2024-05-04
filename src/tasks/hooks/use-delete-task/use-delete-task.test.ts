import { describe, it, expect } from "vitest";
import { useDeleteTask } from "@/tasks/hooks/use-delete-task";
import { waitFor, act } from "@testing-library/react";
import {
  startMockServer,
  renderHookWithQueryProvider,
} from "@/__tests__/helpers";

describe("useDeleteTask", () => {
  let server: ReturnType<typeof startMockServer>;

  beforeEach(() => {
    server = startMockServer();
  });

  afterEach(() => {
    server.shutdown();
    vi.resetAllMocks();
  });

  it("should return success", async () => {
    const { result } = renderHookWithQueryProvider(useDeleteTask);

    await act(() => result.current.deleteTask("task_id"));

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });
});
