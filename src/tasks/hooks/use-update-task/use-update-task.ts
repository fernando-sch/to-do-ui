import { axiosInstance } from "@/config";
import { useQueryClient, useMutation } from "@tanstack/react-query";

type TaskAttrs = {
  id: string;
  title?: string;
  description?: string | null;
  is_completed?: boolean;
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  const updateTaskMutation = useMutation({
    mutationKey: ["updateTask"],
    mutationFn: async (taskAttrs: TaskAttrs) => {
      return await axiosInstance.patch(`/tasks/${taskAttrs.id}`, taskAttrs);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetchTasks"] });
    },
  });

  return { ...updateTaskMutation, updateTask: updateTaskMutation.mutate };
};
