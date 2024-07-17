import { BtnToggle } from "./Button.styled";

function Button({ title, icon, ...rest }) {
  return (
    <BtnToggle title={title} {...rest}>
      <img src={`icons/${icon}.svg`} alt={title} />
    </BtnToggle>
  );
}

export default Button;
