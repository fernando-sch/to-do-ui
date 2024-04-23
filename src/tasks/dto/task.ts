type RemoteTask = {
  id: string;
  title: string;
  description: string | null;
  is_completed: boolean;
};

export class Task {
  id: string;
  title: string;
  description: string | null;
  isCompleted: boolean;

  constructor(private readonly remoteTask: RemoteTask) {
    this.id = this.remoteTask.id;
    this.title = this.remoteTask.title;
    this.description = this.remoteTask.description;
    this.isCompleted = this.remoteTask.is_completed;
  }
}

export const buildTaskDTO = (remoteTask: RemoteTask) => new Task(remoteTask);
