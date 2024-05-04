import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UpdateTaskForm } from "@/tasks/components/update-form";
import { renderComponentWithQueryProvider } from "@/__tests__/helpers";

describe("UpdateTaskForm", () => {
  const mocks = vi.hoisted(() => {
    return {
      updateTaskMock: vi.fn(),
    };
  });

  vi.mock("@/tasks/hooks/use-update-task", () => {
    return {
      useUpdateTask: vi.fn().mockImplementation(() => {
        return { updateTask: mocks.updateTaskMock };
      }),
    };
  });

  it("should render component", () => {
    renderComponentWithQueryProvider(
      <UpdateTaskForm id="f910e3e5-a06b-4a69-95d0-8d75ffb7b37c" />
    );

    expect(screen.getByLabelText(/Task Title/)).toBeDefined();
    expect(screen.getByLabelText(/Task Description/)).toBeDefined();
    expect(screen.getByRole("button", { name: /Update/ })).toBeDefined();
  });

  it("should call update task mutation", async () => {
    const user = userEvent.setup();

    renderComponentWithQueryProvider(
      <UpdateTaskForm id="f910e3e5-a06b-4a69-95d0-8d75ffb7b37c" />
    );

    const titleInput = screen.getByLabelText(/Task Title/);
    const descriptionInput = screen.getByLabelText(/Task Description/);
    const submitButton = screen.getByRole("button", { name: /Update/ });

    await user.type(titleInput, "New Title");
    await user.type(descriptionInput, "New Description");

    expect(titleInput).toHaveProperty("value", "New Title");
    expect(descriptionInput).toHaveProperty("value", "New Description");

    user.click(submitButton);

    await waitFor(() =>
      expect(mocks.updateTaskMock).toHaveBeenCalledWith({
        id: "f910e3e5-a06b-4a69-95d0-8d75ffb7b37c",
        title: "New Title",
        description: "New Description",
      })
    );
  });
});
