import { TaskCard } from "@/tasks/components/card";
import { useFetchTasks } from "@/tasks/hooks/use-fetch-tasks";
import {
  MainWrapper,
  Title,
  TasksWrapper,
} from "@/tasks/pages/tasks-page/tasks.styles";

export const TasksPage = () => {
  const { data } = useFetchTasks();

  return (
    <MainWrapper>
      <Title>TO DO List</Title>
      <TasksWrapper>
        {data?.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            iscompleted={task.isCompleted.toString()}
          />
        ))}
      </TasksWrapper>
    </MainWrapper>
  );
};
