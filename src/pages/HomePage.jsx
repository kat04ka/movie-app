import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useEffect, useState } from 'react';
import {
  searchMovies,
  getPopularMovies,
} from '../api/movieApi';
import MovieList from '../components/movie/MovieList';

function HomePage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    const results = await searchMovies(query);
    setMovies(results);
  };

  useEffect(() => {
    const loadMovies = async () => {
      const popularMovies =
        await getPopularMovies();

      setMovies(popularMovies);
    };

    loadMovies();
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">
      <h1 className="header text-2xl text-white text-center p-6">
        Movie app
      </h1>

      <div className="flex gap-4 py-1 text-white items-center justify-center bg-[#11233c]">
        <Link to="/">Home</Link>
        <Link to="/movie/1">Movie</Link>
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

      <div>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default HomePage;
