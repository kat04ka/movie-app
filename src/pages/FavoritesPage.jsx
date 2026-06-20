import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

function FavoritesPage({ handleSubmit, query }) {
  return (
    <>
      <h1 className="header text-2xl text-white text-center p-6">
        Movie app
      </h1>
      <div className="flex gap-4 py-1 text-white items-center justify-center bg-[#11233c]">
        <Link to="/">Home</Link>
        <Link to="/movie/157336">Movie</Link>
        <Link to="/favorites">Favorites</Link>
        <form
          onSubmit={handleSubmit}
          className="flex gap-2"
        >
          <Input
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            placeholder="Search movie"
          />
          <Button type="submit">Search</Button>
        </form>
      </div>
      <h1>FavoritesPage</h1>
    </>
  );
}

export default FavoritesPage;
