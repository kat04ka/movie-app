function Button({
  children,
  type = 'button',
  onClick,
  classname = '',
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`border rounded-lg px-2 py-0.5 bg-blue-500
        hover:bg-blue-600 text-white
        transition ${classname}`}
    >
      {children}
    </button>
  );
}

export default Button;
