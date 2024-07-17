import Timer from "../Timer/Timer";
import { Timers } from "./TimerManager.styled";

function TimerManager() {
  return (
    <Timers>
      <Timer startTime={300} />
    </Timers>
  );
}

export default TimerManager;
