import { NumberTime, Part, Unit } from "./Number.styled";

function Number({ value, label }) {
  return (
    <Part>
      <NumberTime>{String(value).padStart(2, "0")}</NumberTime>
      <Unit>{label}</Unit>
    </Part>
  );
}

export default Number;
