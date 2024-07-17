import styled from "styled-components";
import { NumberTime } from "../Number/Number.styled";

export const InputNumber = styled(NumberTime)`
  border: 3px solid rgba(255 255 255 / 0.3);
  color: white;
  background: transparent;
  width: 83px;
  padding: 0 4px;
  padding-bottom: 8px;
  margin: 0 -4px -10px;
  border-radius: 8px;
  text-align: center;

  &:focus {
    outline: none;
    border-color: white;
  }
`;

export const Unit = styled.label`
  margin: -1.2em 0 0;
  text-transform: uppercase;
  font-size: 10px;
  text-align: center;
  user-select: none;
`;
