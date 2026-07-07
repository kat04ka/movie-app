function ErrorMessage({ message }) {
  return (
    <div className="rounded-lg bg-red-500/10 p-4 text-center text-red-400">
      {message}
    </div>
  );
}

export default ErrorMessage;
