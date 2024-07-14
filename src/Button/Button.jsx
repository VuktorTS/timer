import { BtnToggle } from "./Button.styled";

function Button({ title, icon }) {
  return (
    <BtnToggle title={title}>
      <img src={`icons/${icon}.svg`} alt={title} />
    </BtnToggle>
  );
}

export default Button;
