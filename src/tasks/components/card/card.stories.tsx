import { Meta, StoryObj } from "@storybook/react";
import { TaskCard } from "@/tasks/components/card";

const meta: Meta<typeof TaskCard> = { component: TaskCard };

export default meta;
type Story = StoryObj<typeof TaskCard>;

export const Default: Story = {
  args: {
    id: "f910e3e5-a06b-4a69-95d0-8d75ffb7b37c",
    title: "Task Title",
    description: "Task Description",
    iscompleted: "false",
  },
};
