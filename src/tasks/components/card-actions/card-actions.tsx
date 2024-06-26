import { useState } from "react";
import {
  ActionsWrapper,
  ActionButton,
} from "@/tasks/components/card-actions/card-actions.styles";
import { useDeleteTask } from "@/tasks/hooks/use-delete-task";
import { useUpdateTask } from "@/tasks/hooks/use-update-task";
import { Modal } from "@/app/components/modal";
import { UpdateTaskForm } from "@/tasks/components/update-form";

type TaskCardActionsProps = {
  id: string;
};

export const TaskCardActions = ({ id }: TaskCardActionsProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { deleteTask } = useDeleteTask();
  const { updateTask } = useUpdateTask();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleCompleteTask = () => updateTask({ is_completed: true, id });
  const handleDeleteTask = () => deleteTask(id);

  return (
    <>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <UpdateTaskForm id={id} />
        </Modal>
      )}
      <ActionsWrapper>
        <ActionButton color="primary" onClick={handleOpenModal}>
          Edit
        </ActionButton>
        <ActionButton color="delete" onClick={handleDeleteTask}>
          Delete
        </ActionButton>
        <ActionButton color="complete" onClick={handleCompleteTask}>
          Complete
        </ActionButton>
      </ActionsWrapper>
    </>
  );
};
