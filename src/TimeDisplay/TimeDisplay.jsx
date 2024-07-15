import Number from "../Number/Number";
import { Colon, Parts } from "./TimeDisplay.styled";

function TimeDisplay({ time }) {
  const minutes = Math.floor(time / 60);
  const second = time % 60;

  return (
    <Parts>
      <Number value={minutes} label="minutes" />
      <Colon>:</Colon>
      <Number value={second} label="second" />
    </Parts>
  );
}

export default TimeDisplay;
