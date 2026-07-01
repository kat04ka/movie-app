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
          'movieScroll',
          window.scrollY,
        );
      }}
      state={{
        from: location,
      }}
    >
      <div className="flex flex-col h-full rounded-lg w-full 
      overflow-hidden border border-gray-200 shadow-lg">
        <img
          src={getPosterUrl(poster_path)}
          alt={title || name}
        />
        <div className="w-full pt-2 px-3 pb-3 ">
          <h3 className="font-semibold">{title}</h3>
          <p className="font-light text-sm mt-1">
            {formatDate(release_date)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
