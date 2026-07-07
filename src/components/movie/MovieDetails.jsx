import {
  getBackdropUrl,
  getPosterImage,
} from '../../utils/imageUrl';
import FavoriteButton from '../ui/FavoriteButton';
import CastList from './CastList';
import CrewInfo from './MovieCrewInfo';
import MovieInfo from './MovieInfo';
import MovieMeta from './MovieMeta';

function MovieDetails({
  movie,
  rating,
  cast,
  director,
  writers,
}) {
  const {
    id,
    release_date,
    backdrop_path,
    poster_path,
    title,
    name,
    status,
    budget,
    original_language,
    revenue,
  } = movie;

  return (
    <div className="group relative">
      <div className="relative overflow-hidden">
        <div
          className="movie-backdrop absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${getBackdropUrl(backdrop_path)})`,
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
        <div className="relative max-w-7xl mx-auto px-8 py-8">
          <div className="flex flex-col sm:flex-row gap-5 ">
            <div className="relative w-55">
              <img
                className={`w-55 h-82 rounded-lg ${
                  poster_path
                    ? 'object-cover'
                    : 'object-contain bg-gray-200 p-14'
                }`}
                src={getPosterImage(poster_path)}
                alt={title || name}
              />

              <FavoriteButton
                item={{
                  id,
                  mediaType: 'movie',
                  title,
                  poster_path,
                  release_date,
                }}
              />
            </div>

            <div className="flex-1 text-white">
              <MovieInfo
                movie={movie}
                ageRating={rating}
              />
              <div>
                <CrewInfo
                  director={director}
                  writers={writers}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="movie max-w-7xl mx-auto px-8 py-8">
        <div className="flex flex-col sm:flex-row items-start">
          <div className="w-full min-w-0 overflow-hidden pr-0 sm:pr-2">
            <CastList cast={cast} />
          </div>
          <aside className="shrink-0">
            <MovieMeta
              status={status}
              budget={budget}
              originalLanguage={original_language}
              revenue={revenue}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
