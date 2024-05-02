import {
  Title,
  TaskWrapper,
  Descrition,
} from "@/tasks/components/card/card.styles";

type TaskCardProps = {
  title: string;
  description: string | null;
  isCompleted?: boolean;
};

export const TaskCard = ({
  title,
  description,
  isCompleted = false,
}: TaskCardProps) => {
  return (
    <TaskWrapper isCompleted={isCompleted}>
      <Title>{title}</Title>
      {description ? (
        <Descrition>{description}</Descrition>
      ) : (
        <Descrition>Task doesn't have a description.</Descrition>
      )}
    </TaskWrapper>
  );
};
