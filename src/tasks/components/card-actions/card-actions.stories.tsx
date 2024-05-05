import { Meta, StoryObj } from "@storybook/react";
import { TaskCardActions } from "@/tasks/components/card-actions";

const meta: Meta<typeof TaskCardActions> = { component: TaskCardActions };

export default meta;
type Story = StoryObj<typeof TaskCardActions>;

export const Default: Story = {
  args: {
    id: "5a650672-c388-410f-8119-eed2adc7804e",
  },
};
