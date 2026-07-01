import { formatDate } from '../../utils/formatDate';

function SeriesInfo({ series, ageRating }) {
  const {
    name,
    first_air_date,
    runtime,
    genres,
    vote_average,
    tagline,
    overview,
  } = series;

  const voteRating = vote_average.toFixed(1)
  return (
    <div className="text-white">
      <h1 className="text-4xl gap-2 font-bold mb-2">
        {name}{' '}
        <span className="text-white/70 font-normal">
          ({new Date(first_air_date).getFullYear()})
        </span>
      </h1>

      <div className="flex gap-2 mb-4">
        <span className="flex items-center border text-white/60 px-1">
          {ageRating}
        </span>
        <span>{formatDate(first_air_date)}</span>
        <span>•</span>
        <span>{runtime} min</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {genres?.map((genre) => (
          <span
            key={genre.id}
            className="px-3 py-1 rounded-full bg-slate-700 text-white"
          >
            {genre.name}
          </span>
        ))}
      </div>

      <div className="flex gap-2 text-xl font-semibold">
        <h3>Ratings:</h3>
        <span>{voteRating}</span>
      </div>

      {tagline && (
        <p className="italic text-white/70 text-xl mt-2">
          {tagline}
        </p>
      )}

      <h2 className="text-2xl font-semibold my-2">
        Overview
      </h2>
      <p className="text-white/70">{overview}</p>
    </div>
  );
}

export default SeriesInfo;
