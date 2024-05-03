import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 180px;
  width: fit-content;
  padding: 10px;
  background-color: #cec8c8;
  border-radius: 5px;
`;

export const Label = styled.label`
  color: #1c1c1c;
  display: flex;
  flex-direction: column;
  min-height: 75px;
  font-size: 1.2rem;
`;

export const Input = styled.input<{ error?: string }>`
  border: 1px solid
    ${(props) => (props.error == "true" ? "#A72019" : "#1C1C1C")};
  color: #1c1c1c;
  background-color: #fff6f6;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  color: #1c1c1c;
  border: 1px solid #1c1c1c;
  border-radius: 5px;
  background-color: transparent;
  padding: 0 5px;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
  }
`;

export const ErrorSpan = styled.span`
  color: #a72019;
  font-size: 1rem;
`;
