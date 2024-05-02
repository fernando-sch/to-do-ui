import { Meta, StoryObj } from "@storybook/react";
import { TasksPage } from "@/tasks/pages/tasks-page";

const meta: Meta<typeof TasksPage> = { component: TasksPage };

export default meta;
type Story = StoryObj<typeof TasksPage>;

export const Default: Story = {
  args: {},
};
