import {
  getBackdropUrl,
  getPosterImage,
  getPosterUrl,
} from '../../utils/imageUrl';
import CastList from '../movie/CastList';
import FavoriteButton from '../ui/FavoriteButton';

import CrewInfo from './SeriesCrewInfo';
import SeriesInfo from './SeriesInfo';
import SeriesMeta from './SeriesMeta';

function SeriesDetails({ series, rating, cast }) {
  const {
    id,
    first_air_date,
    backdrop_path,
    poster_path,
    name,
    status,
    created_by,
    original_language,
    type,
    networks,
  } = series;

  return (
    <div>
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-10">
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="relative w-55">
              <img
                className={`w-55 h-82 rounded-lg ${
                  poster_path
                    ? 'object-cover'
                    : 'object-contain bg-gray-200 p-14'
                }`}
                src={getPosterImage(poster_path)}
                alt={name}
              />
              <FavoriteButton
                item={{
                  id,
                  mediaType: 'tv',
                  title: name,
                  poster_path,
                  release_date: first_air_date,
                }}
              />
            </div>

            <div className="flex-1 text-white">
              <SeriesInfo
                series={series}
                ageRating={rating}
              />
              <div>
                <CrewInfo
                  created_by={created_by}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex flex-col sm:flex-row items-start">
          <div className="w-full min-w-0 overflow-hidden pr-0 sm:pr-2">
            <CastList cast={cast} />
          </div>
          <aside className="shrink-0">
            <SeriesMeta
              status={status}
              networks={networks}
              originalLanguage={original_language}
              type={type}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default SeriesDetails;
