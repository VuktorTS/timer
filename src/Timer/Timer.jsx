import {
  BtnToggle,
  Colon,
  Number,
  Part,
  Parts,
  TimerSection,
  Unit,
} from "./Timer.styled";

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
      <BtnToggle title="Play">
        <img src="icons/play.svg" alt="Play" />
      </BtnToggle>
    </TimerSection>
  );
}

export default Timer;
