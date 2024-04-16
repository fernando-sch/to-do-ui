import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/config";
import { buildTaskDTO } from "@/tasks/dto";

export const useFetchTasks = () => {
  const fetchTasks = async () => {
    return axiosInstance
      .get("/tasks")
      .then((response) => response.data.data.map(buildTaskDTO));
  };

  return useQuery({ queryKey: ["fetchTasks"], queryFn: fetchTasks });
};
