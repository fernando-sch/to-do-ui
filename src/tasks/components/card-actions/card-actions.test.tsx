import { describe, it, expect } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TaskCardActions } from "@/tasks/components/card-actions";
import {
  startMockServer,
  renderComponentWithQueryProvider,
} from "@/__tests__/helpers";

describe("TaskCardActions", () => {
  let server: ReturnType<typeof startMockServer>;
  const mockId = "5a650672-c388-410f-8119-eed2adc7804e";

  const mocks = vi.hoisted(() => {
    return {
      deleteTaskMock: vi.fn(),
      updateTaskMock: vi.fn(),
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

  vi.mock("@/tasks/hooks/use-update-task", () => {
    return {
      useUpdateTask: vi.fn().mockImplementation(() => {
        return {
          updateTask: mocks.updateTaskMock,
        };
      }),
    };
  });

  beforeEach(() => {
    server = startMockServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  it("should render component", () => {
    renderComponentWithQueryProvider(<TaskCardActions id={mockId} />);

    expect(screen.getByRole("button", { name: /Edit/ })).toBeDefined();
    expect(screen.getByRole("button", { name: /Delete/ })).toBeDefined();
    expect(screen.getByRole("button", { name: /Complete/ })).toBeDefined();
  });

  it("should call delete task on delete task button click", async () => {
    const user = userEvent.setup();

    renderComponentWithQueryProvider(<TaskCardActions id={mockId} />);

    const deleteButton = screen.getByRole("button", { name: /Delete/ });

    user.click(deleteButton);

    await waitFor(() => {
      expect(mocks.deleteTaskMock).toHaveBeenCalledWith(mockId);
    });
  });

  it("should call update task on update task button click", async () => {
    const user = userEvent.setup();

    renderComponentWithQueryProvider(<TaskCardActions id={mockId} />);

    const editButton = screen.getByRole("button", { name: /Edit/ });

    user.click(editButton);

    await waitFor(async () => {
      const titleInput = screen.getByLabelText(/Task Title:/);
      const descriptionInput = screen.getByLabelText(/Task Description:/);
      const submitButton = screen.getByRole("button", { name: /Update/ });

      await user.type(titleInput, "Updated Title");
      await user.type(descriptionInput, "Updated Description");
      user.click(submitButton);

      expect(mocks.updateTaskMock).toHaveBeenCalledWith({
        id: mockId,
        title: "Updated Title",
        description: "Updated Description",
      });
    });
  });

  it("should call update task on complete task button click", async () => {
    const user = userEvent.setup();

    renderComponentWithQueryProvider(<TaskCardActions id={mockId} />);

    const completeButton = screen.getByRole("button", { name: /Complete/ });

    user.click(completeButton);

    await waitFor(() =>
      expect(mocks.updateTaskMock).toHaveBeenCalledWith({
        id: mockId,
        is_completed: true,
      })
    );
  });
});
