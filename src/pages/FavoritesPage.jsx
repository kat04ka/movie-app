import { Link } from 'react-router-dom';
import SearchBar from '../components/movie/SearchBar';

function FavoritesPage({
  handleSubmit,
  query,
  setQuery,
}) {
  return (
    <>
      <h1 className="header text-2xl text-white text-center p-6">
        Movie app
      </h1>
      <div className="flex gap-4 py-1 text-white items-center justify-center bg-[#11233c]">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/">Serials</Link>
        <SearchBar
          query={query}
          setQuery={setQuery}
          onSubmit={handleSubmit}
        />
      </div>
      <h1>FavoritesPage</h1>
    </>
  );
}

export default FavoritesPage;
