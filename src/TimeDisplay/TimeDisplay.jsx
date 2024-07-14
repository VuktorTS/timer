import { Colon, Number, Part, Parts, Unit } from "./TimeDisplay.styled";

function TimeDisplay() {
  return (
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
  );
}

export default TimeDisplay;
