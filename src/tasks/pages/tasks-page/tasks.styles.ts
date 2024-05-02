import styled from "styled-components";

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #b3b3b3;
  width: 100%;
  height: 100vh;
`;

export const Title = styled.h1`
  color: #1c1c1c;
  font-size: 3rem;
`;

export const TasksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: fit-content;
  padding: 5px;
  border: 1px solid #1c1c1c;
  border-radius: 5px;
`;
