import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { TaskCard } from "@/tasks/components/card";
import {
  startMockServer,
  renderComponentWithQueryProvider,
} from "@/__tests__/helpers";

describe("TaskCard", () => {
  let server: ReturnType<typeof startMockServer>;
  const taskMock = {
    title: "Task Title",
    description: "Task Description",
  };

  beforeEach(() => {
    server = startMockServer();
  });

  afterEach(() => {
    server.shutdown();
    vi.clearAllMocks();
  });

  it("should render incomplete task", () => {
    renderComponentWithQueryProvider(
      <TaskCard title={taskMock.title} description={taskMock.description} />
    );

    expect(screen.getByText(/Task Title/)).toBeDefined();
    expect(screen.getByText(/Task Description/)).toBeDefined();
  });

  it("should render default task description", () => {
    renderComponentWithQueryProvider(
      <TaskCard title={taskMock.title} description={null} />
    );

    expect(screen.getByText(/Task doesn't have a description./)).toBeDefined();
  });

  it("should render with children", () => {
    const TaskCardChildren = () => {
      return <div>Task Card Children</div>;
    };

    renderComponentWithQueryProvider(
      <TaskCard title={taskMock.title} description={taskMock.description}>
        <TaskCardChildren />
      </TaskCard>
    );

    expect(screen.getByText(/Task Title/)).toBeDefined();
    expect(screen.getByText(/Task Description/)).toBeDefined();
    expect(screen.getByText(/Task Card Children/)).toBeDefined();
  });
});
