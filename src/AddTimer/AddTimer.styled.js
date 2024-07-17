import styled from "styled-components";
import { TimerSection } from "../Timer/Timer.styled";
import { Parts } from "../TimeDisplay/TimeDisplay.styled";

export const FormAddTime = styled(TimerSection)`
  align-self: stretch;
  & ${Parts} {
    gap: 5px;
    margin: -2px -5px;
  }
`;
