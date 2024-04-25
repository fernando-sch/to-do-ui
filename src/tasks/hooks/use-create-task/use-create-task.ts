import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/config";

export const useCreateTask = () => {
  const createTask = async () => {
    return axiosInstance.post("/task")
  };

  return useQuery({ queryKey: ["createTask"], queryFn: createTask });
};
