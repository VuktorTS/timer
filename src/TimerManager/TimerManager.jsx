import { useState } from "react";
import Timer from "../Timer/Timer";
import { AddButton, Timers } from "./TimerManager.styled";
import AddTimer from "../AddTimer/AddTimer";
import { nanoid } from "nanoid";

function TimerManager() {
  const [timers, setTimers] = useState([{ id: nanoid(), startTime: 300 }]);
  const [isAdding, setAdding] = useState(false);

  const onAdd = (startTime) => {
    const id = nanoid();

    setTimers((oldTimers) => [...oldTimers, { id, startTime }]);
    setAdding(false);
  };

  const onDelete = (idToDelete) =>
    setTimers((oldTimers) => oldTimers.filter(({ id }) => id !== idToDelete));

  return (
    <Timers>
      {timers.map(({ id, startTime }) => (
        <Timer key={id} startTime={startTime} id={id} onDelete={onDelete} />
      ))}
      {isAdding ? (
        <AddTimer onAdd={onAdd} />
      ) : (
        <AddButton as="button" onClick={() => setAdding(true)}>
          +
        </AddButton>
      )}
    </Timers>
  );
}

export default TimerManager;
