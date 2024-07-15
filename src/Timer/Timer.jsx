import { useEffect, useState } from "react";
import Button from "../Button/Button";
import TimeDisplay from "../TimeDisplay/TimeDisplay";
import { TimerSection } from "./Timer.styled";
import { clsx } from "clsx";

function Timer({ startTime }) {
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
          setRemaining(false);
          return startTime;
        }
        return value;
      });
    };

    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [isRunning, startTime]);

  const play = () => setRunning(true);
  const pause = () => setRunning(false);

  return (
    <TimerSection className={clsx({ "timer-ticking": isRunning })}>
      <TimeDisplay time={remaining} />
      {isRunning ? (
        <Button title="Pause" icon="pause" onClick={pause} />
      ) : (
        <Button title="Play" icon="play" onClick={play} />
      )}
    </TimerSection>
  );
}

export default Timer;
