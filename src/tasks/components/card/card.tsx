import React from "react";
import {
  Title,
  TaskWrapper,
  Descrition,
} from "@/tasks/components/card/card.styles";

type TaskCardProps = {
  title: string;
  description: string | null;
  iscompleted?: string;
  children?: React.ReactNode;
};

export const TaskCard = ({
  title,
  description,
  iscompleted = "false",
  children,
}: TaskCardProps) => {
  return (
    <TaskWrapper iscompleted={iscompleted}>
      <Title>{title}</Title>
      <Descrition>
        {description || "Task doesn't have a description."}
      </Descrition>
      {children}
    </TaskWrapper>
  );
};
