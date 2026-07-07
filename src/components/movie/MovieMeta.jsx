function MovieMeta({
  status,
  budget,
  originalLanguage,
  revenue,
}) {
  const language = new Intl.DisplayNames(
  ['en'],
  { type: 'language' }
).of(originalLanguage);

  return (
    <div className="mt-3">
      <div className="mb-3">
        <h4 className="font-semibold">Status </h4>
        <p>{status}</p>
      </div>
      <div className="mb-3">
        <h4 className="font-semibold">Budget</h4>
        <p>{budget
            ? `$${budget.toLocaleString()}`
            : '-'}</p>
      </div>
      <div className="mb-3">
        <h4 className="font-semibold">Original Language</h4>
        <p>{language}</p>
      </div>
      <div>
        <h4 className="font-semibold">Revenue</h4>
        <p>{revenue
            ? `$${revenue.toLocaleString()}`
            : '-'}</p>
      </div>
    </div>
  );
}

export default MovieMeta;
