import styled from "styled-components";

const handleColorType = (color: string = "any") => {
  switch (color) {
    case "primary":
      return "#1c1c1c";
    case "delete":
      return "#a72019";
    case "complete":
      return "#67A858";
    default:
      return "#1c1c1c";
  }
};

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;

  @media (max-width: 640px) {
    font-size: 0.8rem;
    width: 60px;
    flex-direction: column;
  }
`;

export const ActionButton = styled.button<{ color?: string }>`
  color: ${(props) => handleColorType(props.color)};
  border: 1px solid ${(props) => handleColorType(props.color)};
  border-radius: 5px;
  background-color: transparent;
  padding: 0 5px;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }
`;