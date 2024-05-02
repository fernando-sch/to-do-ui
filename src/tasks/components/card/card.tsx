import {
  Title,
  TaskWrapper,
  Descrition,
} from "@/tasks/components/card/card.styles";

type TaskCardProps = {
  title: string;
  description: string | null;
  iscompleted?: string;
};

export const TaskCard = ({
  title,
  description,
  iscompleted = "false",
}: TaskCardProps) => {
  return (
    <TaskWrapper iscompleted={iscompleted}>
      <Title>{title}</Title>
      {description ? (
        <Descrition>{description}</Descrition>
      ) : (
        <Descrition>Task doesn't have a description.</Descrition>
      )}
    </TaskWrapper>
  );
};
