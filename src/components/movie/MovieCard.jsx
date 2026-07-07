import {
  Link,
  useLocation,
} from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';
import { getPosterImage } from '../../utils/imageUrl';
import FavoriteButton from '../ui/FavoriteButton';

function MovieCard({ movie }) {
  const {
    id,
    title,
    name,
    poster_path,
    release_date,
  } = movie;

  const location = useLocation();

  return (
    <Link
      className="group relative"
      to={`/movie/${id}`}
      onClick={() => {
        sessionStorage.setItem(
          'movieScroll',
          window.scrollY,
        );
      }}
      state={{
        from: location,
      }}
    >
      <div
        className="flex flex-col h-full rounded-lg w-full 
      overflow-hidden border border-gray-200 shadow-lg"
      >
        <img
          className={`w-full aspect-[2/3] ${
            poster_path
              ? 'object-cover'
              : 'object-contain p-12 bg-gray-200'
          }`}
          src={getPosterImage(poster_path)}
          alt={title || name}
        />
        <div className="w-full pt-2 px-3 pb-3 ">
          <h3 className="font-semibold">
            {title}
          </h3>

          {release_date && (
            <p className="font-light text-sm mt-1">
              {formatDate(release_date)}
            </p>
          )}
        </div>
      </div>

      <FavoriteButton
        item={{
          id: movie.id,
          mediaType: 'movie',
          title: movie.title,
          poster_path: movie.poster_path,
          release_date: movie.release_date,
        }}
      />
    </Link>
  );
}

export default MovieCard;
