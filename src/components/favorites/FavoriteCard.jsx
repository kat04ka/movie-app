import { Link } from 'react-router-dom';
import { getPosterUrl } from '../../utils/imageUrl';
import { formatDate } from '../../utils/formatDate';
import FavoriteButton from '../ui/FavoriteButton';

function FavoriteCard({ item }) {
  return (
    <Link
      className="group relative"
      to={
        item.mediaType === 'movie'
          ? `/movie/${item.id}`
          : `/tv/${item.id}`
      }
    >
      <div
        className="flex flex-col h-full rounded-lg
        overflow-hidden border border-gray-200 shadow-lg"
      >
        <img
          src={getPosterUrl(item.poster_path)}
          alt={item.title}
        />

        <div className="w-full pt-2 px-3 pb-3">
          <h3 className="font-semibold">
            {item.title || item.name}
          </h3>

          <p className="font-light text-sm mt-1">
            {formatDate(item.release_date)}
          </p>
        </div>
      </div>

      <FavoriteButton item={item} />
    </Link>
  );
}

export default FavoriteCard;
