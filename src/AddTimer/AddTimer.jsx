import { useState } from "react";
import Button from "../Button/Button";
import { Colon, Parts } from "../TimeDisplay/TimeDisplay.styled";
import Input from "../Input/Input";
import { FormAddTime } from "./AddTimer.styled";

const EMPTY = { minutes: 0, seconds: 0 };

function AddTimer({ onAdd }) {
  const [data, setData] = useState(EMPTY);

  const onChange = (evt) => {
    setData((oldData) => ({
      ...oldData,
      [evt.target.name]: evt.target.valueAsNumber,
    }));
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    onAdd(data.minutes * 60 + data.seconds);
    setData(EMPTY);
  };
  return (
    <FormAddTime as="form" onSubmit={onSubmit}>
      <Parts>
        <Input name="minutes" value={data.minutes} onChange={onChange} />
        <Colon>:</Colon>
        <Input name="seconds" value={data.seconds} onChange={onChange} />
      </Parts>
      <Button icon="play" label="Start" />
    </FormAddTime>
  );
}

export default AddTimer;
