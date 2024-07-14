import Button from "../Button/Button";
import { Colon, Number, Part, Parts, TimerSection, Unit } from "./Timer.styled";

function Timer() {
  return (
    <TimerSection>
      <Parts>
        <Part>
          <Number>05</Number>
          <Unit>minutes</Unit>
        </Part>
        <Colon>:</Colon>
        <Part>
          <Number>00</Number>
          <Unit>seconds</Unit>
        </Part>
      </Parts>
      <Button title="Play" icon="play" />
    </TimerSection>
  );
}

export default Timer;
