import { describe, it, expect } from "vitest";
import { buildTaskDTO, Task } from "@/tasks/dto";

describe("buildTaskDTO", () => {
  it("should return new Task instance", () => {
    const remoteTask = {
      id: "732b4f40-75b1-46b1-beaa-b9d5385260be",
      title: "My Task",
      description: "Good description",
      is_completed: false,
    };

    const task = buildTaskDTO(remoteTask);

    expect(task).toBeInstanceOf(Task);
    expect(task.title).toBe(remoteTask.title);
    expect(task.description).toBe(remoteTask.description);
    expect(task.isCompleted).toBe(remoteTask.is_completed);
  });
});
