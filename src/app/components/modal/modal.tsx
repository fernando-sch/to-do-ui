import { IoMdClose } from "react-icons/io";
import {
  ModalBackground,
  ModalWrapper,
  CloseButton,
} from "@/app/components/modal/modal.styles";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <>
      <ModalBackground data-testId="modal-background" onClick={onClose} />
      <ModalWrapper>
        <CloseButton onClick={onClose}>
          <IoMdClose title="Close Icon" />
        </CloseButton>
        {children}
      </ModalWrapper>
    </>
  );
};
