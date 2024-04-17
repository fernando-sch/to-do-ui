import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/config";
import { buildTaskDTO, Task } from "@/tasks/dto";

export const useFetchTasks = () => {
  const fetchTasks = async () => {
    return axiosInstance
      .get("/tasks")
      .then((response) => response.data.data.map(buildTaskDTO));
  };

  return useQuery<Task[]>({ queryKey: ["fetchTasks"], queryFn: fetchTasks });
};
