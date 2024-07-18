import styled from "styled-components";
import { Colon } from "../TimeDisplay/TimeDisplay.styled";

export const TimerSection = styled.section`
  color: white;
  background: rgba(255 255 255 / 0.1);
  border-radius: 16px;
  width: 430px;
  padding: 10px 30px 20px;
  display: flex;
  align-items: center;
  gap: 16px;

  &.timer-ticking ${Colon} {
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%,
    50% {
      opacity: 1;
    }
    51%,
    100% {
      opacity: 0;
    }
  }
  &.timer-ringing {
    animation: ringing 0.5s infinite;
  }
  @keyframes ringing {
    0%,
    50% {
      background: rgba(255 255 255 / 0.2);
    }
    51%,
    100% {
      background: rgba(255 255 255 / 0.1);
    }
  }
`;
