import { BtnToggle } from "./Button.styled";

function Button({ title, icon, ...rest }) {
  return (
    <BtnToggle title={title}>
      <img src={`icons/${icon}.svg`} alt={title} {...rest} />
    </BtnToggle>
  );
}

export default Button;
