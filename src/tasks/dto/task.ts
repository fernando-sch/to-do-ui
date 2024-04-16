type RemoteTask = {
  title: string;
  description: string | null;
  "is_completed?": boolean;
};

class Task {
  title: string;
  description: string | null;
  isCompleted: boolean;

  constructor(private readonly remoteTask: RemoteTask) {
    this.title = this.remoteTask.title;
    this.description = this.remoteTask.description;
    this.isCompleted = this.remoteTask["is_completed?"];
  }
}

export const buildTaskDTO = (remoteTask: RemoteTask) => new Task(remoteTask);
