function Input({ name, value, ...rest }) {
  return (
    <li>
      <input
        type="number"
        value={String(value).padStart(2, "0")}
        name={name}
        id={name}
        {...rest}
      />
      <label htmlFor={name}>{name}</label>
    </li>
  );
}

export default Input;
