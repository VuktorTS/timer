import Button from "../Button/Button";
import TimeDisplay from "../TimeDisplay/TimeDisplay";
import { TimerSection } from "./Timer.styled";

function Timer() {
  return (
    <TimerSection>
      <TimeDisplay />
      <Button title="Play" icon="play" />
    </TimerSection>
  );
}

export default Timer;
