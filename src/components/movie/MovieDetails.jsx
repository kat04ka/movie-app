import { formatDate } from '../../utils/formatDate';
import {
  getBackdropUrl,
  getPosterUrl,
} from '../../utils/imageUrl';
import CastList from './CastList';
import MovieInfo from './MovieInfo';

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
          backgroundImage: `url(${getBackdropUrl(movie.backdrop_path)})`,
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
              src={getPosterUrl(
                movie.poster_path,
              )}
              alt={movie.title || movie.name}
            />
          )}
          <div className="flex-1 text-white">
            <MovieInfo
              movie={movie}
              rating={rating}
            />
            <div className="mt-4">
              <CastList cast={cast} />

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
