import {
  startMockServer,
  renderHookWithQueryProvider,
} from "@/__tests__/helpers";
import { useFetchTasks } from "@/tasks/hooks/use-fetch-tasks";
import { waitFor } from "@testing-library/react";

describe("useFetchTasks", () => {
  let server: ReturnType<typeof startMockServer>;

  beforeEach(() => {
    server = startMockServer();
  });

  afterEach(() => {
    server.shutdown;
  });

  it("should return tasks list data", async () => {
    const { result } = renderHookWithQueryProvider(useFetchTasks);

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
      expect(result.current.data).toHaveLength(2);
    });
  });
});
