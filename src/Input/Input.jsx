import { Part } from "../Number/Number.styled";
import { InputNumber } from "./Input.styled";

function Input({ name, value, ...rest }) {
  return (
    <Part>
      <InputNumber
        type="number"
        as="input"
        value={String(value).padStart(2, "0")}
        name={name}
        id={name}
        {...rest}
      />
      <Unit htmlFor={name}>{name}</Unit>
    </Part>
  );
}

export default Input;
