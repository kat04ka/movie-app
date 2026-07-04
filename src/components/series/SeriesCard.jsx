import {
  Link,
  useLocation,
} from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';
import { getPosterUrl } from '../../utils/imageUrl';
import FavoriteButton from '../ui/FavoriteButton';

function SeriesCard({ tv }) {
  const {
    id,
    name,
    poster_path,
    first_air_date,
  } = tv;

  const location = useLocation();
  return (
    <Link
      className="group relative"
      to={`/tv/${id}`}
      onClick={() => {
        sessionStorage.setItem(
          'seriesScroll',
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
          src={getPosterUrl(poster_path)}
          alt={name}
        />
        <div className="w-full pt-2 px-3 pb-3 ">
          <h3 className="font-semibold">
            {name}
          </h3>
          <p className="font-light text-sm mt-1">
            {formatDate(first_air_date)}
          </p>
        </div>
      </div>

      <FavoriteButton
        item={{
          id,
          mediaType: 'tv',
          title: name,
          poster_path,
          release_date: first_air_date,
        }}
      />
    </Link>
  );
}

export default SeriesCard;
