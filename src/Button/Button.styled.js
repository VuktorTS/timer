import styled from "styled-components";

export const BtnToggle = styled.button`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 50%;
  box-shadow: 3px 3px 3px rgba(0 0 0 / 0.3);
  padding: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  &:hover {
    background-color: rgba(255 255 255 / 0.3);
  }
`;
