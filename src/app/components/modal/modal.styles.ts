import styled from "styled-components";

export const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export const ModalWrapper = styled.div`
  background-color: #cec8c8;
  border-radius: 5px;
  border: 1px solid #1c1c1c;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px;
  width: 280px;
  height: 300px;
  color: #1c1c1c;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.3);
`;

export const CloseButton = styled.button`
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid #1c1c1c;
  font-size: 18px;
  color: #1c1c1c;
  background-color: #fff6f6;
  transition: all 0.25s ease;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
  position: absolute;
  right: 0;
  top: 0;
  align-self: flex-end;
  margin-top: -7px;
  margin-right: -7px;
`;
