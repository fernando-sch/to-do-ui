import { describe, it, expect } from "vitest";
import { waitFor, act } from "@testing-library/react";
import { useUpdateTask } from "@/tasks/hooks/use-update-task";
import {
  startMockServer,
  renderHookWithQueryProvider,
} from "@/__tests__/helpers";

describe("useUpdateTask", () => {
  let server: ReturnType<typeof startMockServer>;

  beforeEach(() => {
    server = startMockServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  it("should return success", async () => {
    const { result } = renderHookWithQueryProvider(useUpdateTask);

    await act(() =>
      result.current.updateTask({
        id: "77314255-5f2e-4c88-9acf-53e27d6f92ac",
        title: "New Title",
        description: "New Description",
        is_completed: true,
      })
    );

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });
});
