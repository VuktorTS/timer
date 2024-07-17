import { useEffect, useState } from "react";
import Button from "../Button/Button";
import TimeDisplay from "../TimeDisplay/TimeDisplay";
import { TimerSection } from "./Timer.styled";
import { clsx } from "clsx";

function Timer({ startTime, onComplete }) {
  const [remaining, setRemaining] = useState(startTime);
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const tick = () => {
      setRemaining((oldValue) => {
        const value = oldValue - 1;
        if (value <= 0) {
          onComplete();
          return 0;
        }
        return value;
      });
    };

    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [isRunning, onComplete]);

  const play = () => setRunning(true);
  const pause = () => setRunning(false);

  return (
    <TimerSection>
      <TimeDisplay time={remaining} />
      {isRunning ? (
        <Button title="Pause" icon="pause" onClick={pause} />
      ) : (
        <Button title="Play" icon="play" onClick={play} />
      )}
      <Button icon="trash" title="Delete" onClick={onComplete} />
    </TimerSection>
  );
}

export default Timer;
