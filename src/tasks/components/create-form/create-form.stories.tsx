import { Meta, StoryObj } from "@storybook/react";
import { CreateTaskForm } from "@/tasks/components/create-form";

const meta: Meta<typeof CreateTaskForm> = { component: CreateTaskForm };

export default meta;
type Story = StoryObj<typeof CreateTaskForm>;

export const Default: Story = { render: () => <CreateTaskForm /> };
