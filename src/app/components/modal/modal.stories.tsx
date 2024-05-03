import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "@/app/components/modal";

const meta: Meta<typeof Modal> = { component: Modal };

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalContent = () => {
  return (
    <div>
      <h3>Modal Content</h3>
      <p>Lorem Ipsum</p>
    </div>
  );
};

const onCloseMock = () => console.log("onClose was called");

export const Default: Story = {
  render: () => (
    <Modal onClose={onCloseMock}>
      <ModalContent />
    </Modal>
  ),
};
