import {
  Link,
  useLocation,
} from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';
import { getPosterUrl } from '../../utils/imageUrl';

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
      to={`/movie/${id}`}
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
          src={getPosterUrl(poster_path)}
          alt={title || name}
        />
        <div className="w-full text-white pt-2 px-3 pb-3 ">
          <h3 className="semibold">{title}</h3>
          <p className="text-white/70 text-sm mt-1">
            {formatDate(release_date)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
