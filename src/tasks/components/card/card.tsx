import {
  Title,
  TaskWrapper,
  Descrition,
  DeleteButton,
} from "@/tasks/components/card/card.styles";
import { useDeleteTask } from "@/tasks/hooks/use-delete-task";

type TaskCardProps = {
  id: string;
  title: string;
  description: string | null;
  iscompleted?: string;
};

export const TaskCard = ({
  id,
  title,
  description,
  iscompleted = "false",
}: TaskCardProps) => {
  const { deleteTask } = useDeleteTask();

  return (
    <TaskWrapper iscompleted={iscompleted}>
      <Title>{title}</Title>
      <Descrition>
        {description || "Task doesn't have a description."}
      </Descrition>
      <DeleteButton onClick={() => deleteTask(id)}>Delete</DeleteButton>
    </TaskWrapper>
  );
};
