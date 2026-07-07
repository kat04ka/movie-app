function Button({
  children,
  type = 'button',
  onClick,
  className = '',
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`border rounded-lg px-2 py-0.5 bg-blue-500
        hover:bg-blue-600 text-white
        transition ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
