import { buildTaskDTO, Task } from "@/tasks/dto";

describe("buildTaskDTO", () => {
  it("should return new Task instance", () => {
    const remoteTask = {
      title: "My Task",
      description: "Good description",
      "is_completed?": false,
    };

    const task = buildTaskDTO(remoteTask);

    expect(task).toBeInstanceOf(Task);
    expect(task.title).toBe(remoteTask.title);
    expect(task.description).toBe(remoteTask.description);
    expect(task.isCompleted).toBe(remoteTask["is_completed?"]);
  });
});
