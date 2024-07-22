import Button from "../Button/Button";
import TimeDisplay from "../TimeDisplay/TimeDisplay";
import { TimerSection } from "./Timer.styled";
import useTimer from "../hooks/useTimer";
import clsx from "clsx";

function Timer({ startTime, id, onDelete }) {
  const {
    state: { remaining, isRunning, isCompleted },
    dispatch,
  } = useTimer(startTime);

  const handleDelete = () => onDelete(id);

  return (
    <TimerSection
      className={clsx({
        "timer-ringing": isCompleted,
        "timer-ticking": isRunning,
      })}
    >
      <TimeDisplay time={remaining} />
      {isRunning ? (
        <Button
          title="Pause"
          icon="pause"
          onClick={() => dispatch({ type: "PAUSE" })}
        />
      ) : (
        <Button
          title="Play"
          icon="play"
          onClick={() => dispatch({ type: "PLAY" })}
          disabled={isCompleted}
        />
      )}
      <Button
        icon="restart"
        title="Restart"
        onClick={() => dispatch({ type: "RESTART" })}
      />
      <Button icon="trash" title="Delete" onClick={handleDelete} />
    </TimerSection>
  );
}

export default Timer;
