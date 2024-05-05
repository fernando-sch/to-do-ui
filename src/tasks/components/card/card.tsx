import {
  Title,
  TaskWrapper,
  Descrition,
} from "@/tasks/components/card/card.styles";
import { TaskCardActions } from "../card-actions";

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
  const isNotCompleted = iscompleted === "false";

  return (
    <>
      <TaskWrapper iscompleted={iscompleted}>
        <Title>{title}</Title>
        <Descrition>
          {description || "Task doesn't have a description."}
        </Descrition>
        {isNotCompleted && <TaskCardActions id={id} />}
      </TaskWrapper>
    </>
  );
};
