import { useState } from "react";
import Timer from "../Timer/Timer";
import { Timers } from "./TimerManager.styled";
import AddTimer from "../AddTimer/AddTimer";

function TimerManager() {
  const [startTime, setStartTime] = useState(0);

  return (
    <Timers>
      {startTime > 0 ? (
        <Timer startTime={startTime} onComplete={() => setStartTime(0)} />
      ) : (
        <AddTimer onAdd={setStartTime} />
      )}
    </Timers>
  );
}

export default TimerManager;
