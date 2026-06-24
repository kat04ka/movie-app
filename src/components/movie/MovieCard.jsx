import {
  Link,
  useLocation,
} from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';
import { getPosterUrl } from '../../utils/imageUrl';

function MovieCard({ movie }) {
  const location = useLocation();
  return (
    <Link
      to={`/movie/${movie.id}`}
      onClick={() => {
        sessionStorage.setItem(
          'homeScroll',
          window.scrollY,
        );
      }}
      state={{
        from: location,
      }}
    >
      <div className="rounded-lg w-full overflow-hidden bg-black/50 flex flex-col h-full">
        <img
          src={getPosterUrl(movie.poster_path)}
          alt={movie.title || movie.name}
        />
        <div className="w-full text-white pt-2 px-3 pb-3 ">
          <h3 className="semibold">
            {movie.title}
          </h3>
          <p className="text-white/70 text-sm mt-1">
            {formatDate(movie.release_date)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
