import { useState } from "react";
import { Modal } from "@/app/components/modal";
import {
  Title,
  TaskWrapper,
  Descrition,
  ActionsWrapper,
  DeleteButton,
  EditButton,
} from "@/tasks/components/card/card.styles";
import { useDeleteTask } from "@/tasks/hooks/use-delete-task";
import { UpdateTaskForm } from "@/tasks/components/update-form";

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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { deleteTask } = useDeleteTask();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <UpdateTaskForm id={id} />
        </Modal>
      )}
      <TaskWrapper iscompleted={iscompleted}>
        <Title>{title}</Title>
        <Descrition>
          {description || "Task doesn't have a description."}
        </Descrition>
        <ActionsWrapper>
          <DeleteButton onClick={() => deleteTask(id)}>Delete</DeleteButton>
          <EditButton onClick={handleOpenModal}>Edit</EditButton>
        </ActionsWrapper>
      </TaskWrapper>
    </>
  );
};
