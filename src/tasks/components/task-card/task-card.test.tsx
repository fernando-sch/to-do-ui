import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TaskCard } from "@/tasks/components/task-card";

describe("TaskCard", () => {
  it("should render task information", () => {
    render(<TaskCard title="Task Title" description="Task Description" />);

    expect(screen.getByText(/Task Title/)).toBeDefined();
    expect(screen.getByText(/Task Description/)).toBeDefined();
  });

  it("shouldn't render task description", () => {
    render(<TaskCard title="Task Title" description={null} />);

    expect(screen.getByText(/Task doesn't have a description./)).toBeDefined();
  })

  it("should render completed task", () => {
    render(<TaskCard title="Task Title" description="Task Description" isCompleted={true}/>);

    expect(screen.getByText(/Task is completed./)).toBeDefined();
  })
});
