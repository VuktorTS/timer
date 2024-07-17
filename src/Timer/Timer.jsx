import { useEffect, useState } from "react";
import Button from "../Button/Button";
import TimeDisplay from "../TimeDisplay/TimeDisplay";
import { TimerSection } from "./Timer.styled";
import useTimer from "../hooks/useTimer";

function Timer({ startTime, id, onDelete }) {
  const {
    state: { remaining, isRunning, isCompleted },
    dispatch,
  } = useTimer(startTime);

  const timerClass = [
    isCompleted ? "timer-ringing" : "",
    isRunning ? "timer-ticking" : "",
  ].join(" ");

  return (
    <TimerSection className={timerClass}>
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
        label="Restart"
        onClick={() => dispatch({ type: "RESTART" })}
      />
      <Button icon="trash" title="Delete" onClick={() => onDelete(id)} />
    </TimerSection>
  );
}

export default Timer;
