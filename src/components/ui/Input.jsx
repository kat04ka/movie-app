function Input({
  value,
  type = 'text',
  onChange,
  placeholder,
}) {
  return (
    <input
      id="input"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border text-md rounded-lg w-[220px] px-2 py-0.5"
    />
  );
}

export default Input;
