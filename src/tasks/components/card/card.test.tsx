import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TaskCard } from "@/tasks/components/card";
import {
  startMockServer,
  renderComponentWithQueryProvider,
} from "@/__tests__/helpers";

describe("TaskCard", () => {
  let server: ReturnType<typeof startMockServer>;
  const taskMock = {
    id: "3bc542c3-5622-4a1d-9202-a5f100acde04",
    title: "Task Title",
    description: "Task Description",
  };

  const mocks = vi.hoisted(() => {
    return {
      deleteTaskMock: vi.fn(),
    };
  });

  vi.mock("@/tasks/hooks/use-delete-task", () => {
    return {
      useDeleteTask: vi.fn().mockImplementation(() => {
        return {
          deleteTask: mocks.deleteTaskMock,
        };
      }),
    };
  });

  beforeEach(() => {
    server = startMockServer();
  });

  afterEach(() => {
    server.shutdown();
    vi.clearAllMocks();
  });

  it("should render incomplete task", () => {
    renderComponentWithQueryProvider(
      <TaskCard
        id={taskMock.id}
        title={taskMock.title}
        description={taskMock.description}
      />
    );

    expect(screen.getByText(/Task Title/)).toBeDefined();
    expect(screen.getByText(/Task Description/)).toBeDefined();
  });

  it("should render completed task", () => {
    renderComponentWithQueryProvider(
      <TaskCard
        id={taskMock.id}
        title={taskMock.title}
        description={taskMock.description}
        iscompleted="true"
      />
    );

    expect(screen.getByText(/Task Title/)).toBeDefined();
    expect(screen.getByText(/Task Description/)).toBeDefined();
    expect(screen.getByRole("button", { name: /Delete/ })).toBeDefined();
  });

  it("shouldn't render task description", () => {
    renderComponentWithQueryProvider(
      <TaskCard id={taskMock.id} title={taskMock.title} description={null} />
    );

    expect(screen.getByText(/Task doesn't have a description./)).toBeDefined();
  });

  it("should call delete task on delete task button click", async () => {
    const user = userEvent.setup();

    renderComponentWithQueryProvider(
      <TaskCard
        id={taskMock.id}
        title={taskMock.title}
        description={taskMock.description}
        iscompleted="true"
      />
    );

    const deleteButton = screen.getByRole("button", { name: /Delete/ });

    user.click(deleteButton);

    await waitFor(() => {
      expect(mocks.deleteTaskMock).toHaveBeenCalledWith(taskMock.id);
    });
  });
});
