import { Meta, StoryObj } from "@storybook/react";
import { TaskCard } from "@/tasks/components/card";

const meta: Meta<typeof TaskCard> = { component: TaskCard };

export default meta;
type Story = StoryObj<typeof TaskCard>;

export const Default: Story = {
  args: {
    title: "Task Title",
    description: "Task Description",
    isCompleted: false,
  },
};
