import { formatDate } from '../../utils/formatDate';
import { getBackdropUrl } from '../../utils/imageUrl';

function MovieInfo({ movie, rating }) {
  return (
      <div className="text-white">
        <h1 className="text-4xl gap-2 font-bold mb-2">
          {movie.title}{' '}
          <span className="text-white/70 font-normal">
            (
            {new Date(
              movie.release_date,
            ).getFullYear()}
            )
          </span>
        </h1>

        <div className="flex gap-2 mb-4">
          <span className="flex items-center border text-white/60 px-1">
            {rating}
          </span>
          <span>
            {formatDate(movie.release_date)}
          </span>
          <span>•</span>
          <span>{movie.runtime} min</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {movie.genres?.map((genre) => (
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
          <span>
            {movie.vote_average.toFixed(1)}
          </span>
        </div>

        {movie.tagline && (
          <p className="italic text-white/70 text-xl mt-2">
            {movie.tagline}
          </p>
        )}

        <h2 className="text-2xl font-semibold my-2">
          Overview
        </h2>
        <p className="text-white/70">
          {movie.overview}
        </p>
      </div>
  );
}

export default MovieInfo;
