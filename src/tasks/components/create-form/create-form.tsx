import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateTask } from "@/tasks/hooks/use-create-task";
import {
  Form,
  Label,
  Input,
  SubmitButton,
  ErrorSpan,
} from "@/tasks/components/create-form/create-form.styles";

const createTaskSchema = z.object({
  title: z.string().min(1, "Title is required."),
  description: z.string().transform((val) => val || null),
});

type CreateTaskSchema = z.infer<typeof createTaskSchema>;

export const CreateTaskForm = () => {
  const { createTask } = useCreateTask();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTaskSchema>({
    resolver: zodResolver(createTaskSchema),
  });
  const hasTitleFieldError = errors.title ? true : false;

  const onSubmit: SubmitHandler<CreateTaskSchema> = async (data) => {
    await createTask(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Task Title:
        <Input
          error={hasTitleFieldError.toString()}
          {...register("title", { required: true })}
        />
        <ErrorSpan>{hasTitleFieldError && "Title is required."}</ErrorSpan>
      </Label>

      <Label>
        Task Description:
        <Input {...register("description")} />
      </Label>

      <SubmitButton>Create</SubmitButton>
    </Form>
  );
};
