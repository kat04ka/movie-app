function Input({
  value,
  type = 'text',
  onChange,
  placeholder,
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border text-md rounded-lg px-2 py-0.5"
    />
  );
}

export default Input;
