import { useState } from "react";
import { Modal } from "@/app/components/modal";
import { TaskCard } from "@/tasks/components/card";
import { useFetchTasks } from "@/tasks/hooks/use-fetch-tasks";
import { CreateTaskForm } from "@/tasks/components/create-form";
import { TaskCardActions } from "@/tasks/components/card-actions";
import {
  MainWrapper,
  HeaderWrapper,
  Title,
  TasksWrapper,
  NewTaskButton,
} from "@/tasks/pages/tasks/tasks.styles";

export const TasksPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data } = useFetchTasks();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <CreateTaskForm />
        </Modal>
      )}
      <MainWrapper>
        <HeaderWrapper>
          <Title>TO DO List</Title>
          <NewTaskButton onClick={handleOpenModal}>New Task</NewTaskButton>
        </HeaderWrapper>
        <TasksWrapper>
          {data?.map((task) => {
            const isNotCompleted = !task.isCompleted;

            return (
              <TaskCard
                key={task.id}
                title={task.title}
                description={task.description}
                iscompleted={task.isCompleted.toString()}
              >
                {isNotCompleted && <TaskCardActions id={task.id} />}
              </TaskCard>
            );
          })}
        </TasksWrapper>
      </MainWrapper>
    </>
  );
};
