import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useUpdateTask } from "@/tasks/hooks/use-update-task";
import {
  Form,
  Label,
  Input,
  SubmitButton,
} from "@/tasks/components/update-form/update-form.styles";

type UpdateTaskFormProps = {
  id: string;
};

const updateTaskSchema = z.object({
  title: z.string().transform((value) => value || null),
  description: z.string().transform((value) => value || null),
});

type UpdateTaskSchema = z.infer<typeof updateTaskSchema>;

export const UpdateTaskForm = ({ id }: UpdateTaskFormProps) => {
  const { register, handleSubmit } = useForm<UpdateTaskSchema>({
    resolver: zodResolver(updateTaskSchema),
  });
  const { updateTask } = useUpdateTask();

  const removeNullValues = (obj: object) =>
    Object.fromEntries(Object.entries(obj).filter(([, v]) => v != null));

  const onSubmit: SubmitHandler<UpdateTaskSchema> = async (data) => {
    await updateTask({ ...removeNullValues(data), id });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Task Title:
        <Input {...register("title")} />
      </Label>

      <Label>
        Task Description:
        <Input {...register("description")} />
      </Label>

      <SubmitButton>Update</SubmitButton>
    </Form>
  );
};
