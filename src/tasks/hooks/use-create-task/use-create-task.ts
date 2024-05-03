import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/config";

type TaskAttrs = {
  title: string;
  description: string | null;
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  const createTaskMutation = useMutation({
    mutationKey: ["createTask"],
    mutationFn: async (taskAttrs: TaskAttrs) => {
      return await axiosInstance.post("/tasks", taskAttrs);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetchTasks"] });
    },
  });

  return { ...createTaskMutation, createTask: createTaskMutation.mutateAsync };
};
