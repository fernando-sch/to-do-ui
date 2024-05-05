import { useState } from "react";
import { TaskCard } from "@/tasks/components/card";
import { useFetchTasks } from "@/tasks/hooks/use-fetch-tasks";
import { Modal } from "@/app/components/modal";
import { CreateTaskForm } from "@/tasks/components/create-form";
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
          {data?.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              iscompleted={task.isCompleted.toString()}
            />
          ))}
        </TasksWrapper>
      </MainWrapper>
    </>
  );
};