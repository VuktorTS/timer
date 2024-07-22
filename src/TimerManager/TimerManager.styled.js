import styled from "styled-components";
import { TimerSection } from "../Timer/Timer.styled";

export const Timers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const AddButton = styled(TimerSection)`
  cursor: pointer;
  font-size: 80px;
  padding: 11px 0;
  color: rgba(255 255 255 / 0.5);
  border: 0;
  align-items: center;
  justify-content: center;
  align-self: stretch;

  &:hover {
    color: white;
    background: rgba(255 255 255 / 0.2);
  }
`;
