import { useState } from "react";
import Button from "../Button/Button";

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
    <form>
      <ul>
        <input type="text" />
        <li></li>
        <input type="text" />
      </ul>
      <Button />
    </form>
  );
}

export default AddTimer;
