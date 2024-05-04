import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/config";

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const deleteTaskMutation = useMutation({
    mutationKey: ["deleteTask"],
    mutationFn: async (taskId: string) => {
      return await axiosInstance.delete(`/tasks/${taskId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetchTasks"] });
    },
  });

  return { ...deleteTaskMutation, deleteTask: deleteTaskMutation.mutateAsync };
};
