import { formatDate } from '../../utils/formatDate';
import {
  getBackdropUrl,
  getPosterUrl,
} from '../../utils/imageUrl';

function MovieDetails({
  movie,
  rating,
  cast,
  director,
  writers,
}) {
  return (
    <div className="relative overflow-hidden">
      <div
        className="movie-backdrop absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(${getPosterUrl(movie.backdrop_path)})`,
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
          to right, 
          rgba(31,10,10,1) 0%, 
          rgba(31,10,10,0.84) 50%, 
          rgba(31,10,10,0.84) 100%)`,
        }}
      />
      <div className="relative z-1 max-w-7xl mx-auto px-8 py-10">
        <div className="flex flex-col sm:flex-row gap-5">
          {movie.poster_path && (
            <img
              className="w-55 h-82 rounded-lg object-cover"
              src={getBackdropUrl(
                movie.poster_path,
              )}
              alt={movie.title || movie.name}
            />
          )}

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

            <div className="mt-4">
              <h3 className="mb-2 text-xl font-semibold">
                Top Billed Cast
              </h3>

              <p className="">
                {cast
                  ?.map((actor) => actor.name)
                  .join(', ')}
              </p>

              <div className="flex gap-8 mt-4">
                <div className="">
                  <h4 className="text-white/70">
                    Director:{' '}
                  </h4>
                  <p className="font-semibold">
                    {director?.name}
                  </p>
                </div>

                {writers?.length > 0 && (
                  <div>
                    <h4 className="text-white/70">
                      Writers:
                    </h4>
                    <p className="font-semibold">
                      {writers
                        ?.map((w) => w.name)
                        .join(', ')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
