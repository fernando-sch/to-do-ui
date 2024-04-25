import { describe, it, expect, vi } from "vitest";
import { useCreateTask } from "@/tasks/hooks/use-create-task";
import { waitFor } from "@testing-library/react";
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
    server.shutdown;
  });

  it("should return success", async () => {
    const { result } = renderHookWithQueryProvider(useCreateTask);

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
  });
});
