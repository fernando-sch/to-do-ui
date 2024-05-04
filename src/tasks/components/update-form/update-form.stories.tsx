import { Meta, StoryObj } from "@storybook/react";
import { UpdateTaskForm } from "@/tasks/components/update-form";

const meta: Meta<typeof UpdateTaskForm> = { component: UpdateTaskForm };

export default meta;
type Story = StoryObj<typeof UpdateTaskForm>;

export const Default: Story = {
  args: { id: "f910e3e5-a06b-4a69-95d0-8d75ffb7b37c" },
};
