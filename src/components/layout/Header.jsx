import {
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import SearchBar from '../movie/SearchBar';
import { useSearch } from '../../context/SearchContext';

function Header({ showHeader }) {
  const {
    query,
    setQuery,
    favoriteQuery,
    setFavoriteQuery,
  } = useSearch();

  const navigate = useNavigate();
  const location = useLocation();

  const isFavorites =
    location.pathname === '/favorites';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFavorites) return;

    if (!query.trim()) return;

    if (location.pathname.startsWith('/series')) {
      navigate(
        `/series?page=1&query=${encodeURIComponent(
          query,
        )}`,
      );
    } else {
      navigate(
        `/?page=1&query=${encodeURIComponent(
          query,
        )}`,
      );
    }
  };

  return (
    <header
      className={`fixed left-0 top-0 right-0 z-50 transition-transform duration-300 ${
        showHeader
          ? 'translate-y-0'
          : '-translate-y-full'
      }`}
    >
      <div className='text-white py-4 bg-[#11233c]'>
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-center ">
        <nav className="flex gap-4 items-center justify-center ">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/series">Series</Link>
        </nav>

        <SearchBar
          query={
            isFavorites
              ? favoriteQuery
              : query
          }
          setQuery={
            isFavorites
              ? setFavoriteQuery
              : setQuery
          }
          onSubmit={isFavorites ? undefined : handleSubmit}
        />
      </div>
      </div>
    </header>
  );
}

export default Header;