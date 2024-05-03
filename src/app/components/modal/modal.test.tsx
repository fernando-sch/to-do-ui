import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal } from "@/app/components/modal";

describe("ModalWrapper", () => {
  const onCloseMock = vi.fn();

  const renderModalWithContent = () => {
    const ModalContent = () => {
      return (
        <div>
          <h3>Modal Content</h3>
          <p>Lorem Ipsum</p>
        </div>
      );
    };

    render(
      <Modal onClose={onCloseMock}>
        <ModalContent />
      </Modal>
    );
  };

  it("should render component", () => {
    renderModalWithContent();

    expect(screen.getByText(/Modal Content/)).toBeDefined();
    expect(screen.getByText(/Lorem Ipsum/)).toBeDefined();
  });

  it("should call onClose on close icon click", async () => {
    const user = userEvent.setup();

    renderModalWithContent();

    const closeIcon = screen.getByTitle(/Close Icon/);

    user.click(closeIcon);

    await waitFor(() => expect(onCloseMock).toHaveBeenCalledOnce());
  });
});
