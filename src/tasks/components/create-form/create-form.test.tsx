import { describe, it, expect } from "vitest";
import { screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CreateTaskForm } from "@/tasks/components/create-form";
import {
  startMockServer,
  renderComponentWithQueryProvider,
} from "@/__tests__/helpers";

describe("CreateTaskForm", () => {
  let server: ReturnType<typeof startMockServer>;

  const mocks = vi.hoisted(() => {
    return {
      createTaskMock: vi.fn(),
    };
  });

  vi.mock("@/tasks/hooks/use-create-task", () => {
    return {
      useCreateTask: vi.fn().mockImplementation(() => {
        return {
          createTask: mocks.createTaskMock,
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

  it("should render component", () => {
    renderComponentWithQueryProvider(<CreateTaskForm />);

    expect(screen.getByLabelText(/Task Title:/)).toBeDefined();
    expect(screen.getByLabelText(/Task Description:/)).toBeDefined();
    expect(screen.getByRole("button", { name: /Create/ })).toBeDefined();
  });

  it("should call create task mutation", async () => {
    const user = userEvent.setup();
    renderComponentWithQueryProvider(<CreateTaskForm />);

    const titleInput = screen.getByLabelText(/Task Title:/);
    const descriptionInput = screen.getByLabelText(/Task Description:/);
    const submitButton = screen.getByRole("button", { name: /Create/ });

    await user.type(titleInput, "Super Task Title");
    await user.type(descriptionInput, "Super Task Description");

    expect(titleInput).toHaveProperty("value", "Super Task Title");
    expect(descriptionInput).toHaveProperty("value", "Super Task Description");

    user.click(submitButton);

    await waitFor(() =>
      expect(mocks.createTaskMock).toHaveBeenCalledWith({
        title: "Super Task Title",
        description: "Super Task Description",
      })
    );
  });

  it("should validate title input requirement", async () => {
    const user = userEvent.setup();
    renderComponentWithQueryProvider(<CreateTaskForm />);

    const descriptionInput = screen.getByLabelText(/Task Description:/);
    const submitButton = screen.getByRole("button", { name: /Create/ });

    await user.type(descriptionInput, "Super Task Description");
    user.click(submitButton);

    await waitFor(() =>
      expect(screen.getByText(/Title is required./)).toBeDefined()
    );
  });
});
