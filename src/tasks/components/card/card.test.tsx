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
    id: "3bc542c3-5622-4a1d-9202-a5f100acde04",
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
      <TaskCard
        id={taskMock.id}
        title={taskMock.title}
        description={taskMock.description}
      />
    );

    expect(screen.getByText(/Task Title/)).toBeDefined();
    expect(screen.getByText(/Task Description/)).toBeDefined();
    expect(screen.getByRole("button", { name: /Edit/ })).toBeDefined();
    expect(screen.getByRole("button", { name: /Delete/ })).toBeDefined();
    expect(screen.getByRole("button", { name: /Complete/ })).toBeDefined();
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
  });

  it("should render default task description", () => {
    renderComponentWithQueryProvider(
      <TaskCard id={taskMock.id} title={taskMock.title} description={null} />
    );

    expect(screen.getByText(/Task doesn't have a description./)).toBeDefined();
  });
});
