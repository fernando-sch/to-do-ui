import styled from "styled-components";

export const TaskWrapper = styled.li<{ iscompleted: string }>`
  background: ${(props) => (props.iscompleted == "true" ? "#B1FADB" : "#CEC8C8")};
  color: #1c1c1c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  padding: 10px;
  border-radius: 5px;

  @media (max-width: 640px) {
    width: 350px;
  }
`;

export const Title = styled.h4`
  font-size: 1.5rem;

  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;

export const Descrition = styled.p`
  @media (max-width: 640px) {
    font-size: 0.8rem;
  }
`;
