import {
  Link,
  useSearchParams,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  searchMovies,
  getPopularMovies,
} from '../api/movieApi';
import MovieList from '../components/movie/MovieList';
import SearchBar from '../components/movie/SearchBar';
import ReactPaginateModule from 'react-paginate';

function HomePage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] =
    useSearchParams();

  const page =
    Number(searchParams.get('page')) || 1;

  useEffect(() => {
    const loadMovies = async () => {
      const searchQuery =
        searchParams.get('query') || '';

      if (searchQuery.trim()) {
        const data = await searchMovies(
          searchQuery,
          page,
        );

        setMovies(data.results);
        setTotalPages(
          Math.min(data.total_pages, 500),
        );
      } else {
        const data = await getPopularMovies(page);

        setMovies(data.results);
        setTotalPages(
          Math.min(data.total_pages, 500),
        );
      }
    };

    loadMovies();
  }, [searchParams]);

  useEffect(() => {
    if (!movies.length) return;

    const scrollY =
      sessionStorage.getItem('homeScroll');

    if (scrollY) {
      window.scrollTo(0, Number(scrollY));
      sessionStorage.removeItem('homeScroll');
    }
  }, [movies]);

  useEffect(() => {
    setQuery(searchParams.get('query') || '');
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    setSearchParams({ page: 1, query });
  };

  const handlePageChange = ({ selected }) => {
    const params = {
      page: selected + 1,
    };

    if (query.trim()) {
      params.query = query;
    }

    setSearchParams(params);
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-white">
      <h1 className="header text-2xl text-white text-center p-6">
        Movie app
      </h1>

      <div className="flex gap-4 py-1 text-white items-center justify-center bg-[#11233c]">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/series">Series</Link>
        <SearchBar
          query={query}
          setQuery={setQuery}
          onSubmit={handleSubmit}
        />
      </div>

      <MovieList movies={movies} />
      {totalPages > 0 && (
        <ReactPaginateModule.default
          pageCount={totalPages}
          onPageChange={handlePageChange}
          forcePage={page - 1}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          previousLabel="<"
          nextLabel=">"
          breakLabel="..."
          containerClassName="flex justify-center gap-2 my-8"
          pageClassName="border rounded"
          pageLinkClassName="block px-4 py-2 cursor-pointer"
          activeClassName="bg-blue-500 text-white"
          previousClassName="border rounded"
          previousLinkClassName="block px-4 py-2 cursor-pointer"
          nextClassName="border rounded"
          nextLinkClassName="block px-4 py-2 cursor-pointer"
        />
      )}
    </div>
  );
}

export default HomePage;
