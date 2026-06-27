import {
  Link,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  searchMovies,
  getPopularMovies,
} from '../api/movieApi';
import MovieList from '../components/movie/MovieList';
import ReactPaginateModule from 'react-paginate';
import SearchBar from '../components/movie/SearchBar';

function HomePage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] =
    useSearchParams();

  const page =
    Number(searchParams.get('page')) || 1;
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    setSearchParams({ page: 1, query });
  };

  useEffect(() => {
    const loadMovies = async () => {
      if (query.trim()) {
        const data = await searchMovies(
          query,
          page,
        );

        setMovies(data.results);
        setTotalPages(data.total_pages);
      } else {
        const data = await getPopularMovies(page);

        setMovies(data.results);
        setTotalPages(data.total_pages);
      }
    };

    loadMovies();
  }, [query, page]);

  useEffect(() => {
    if (!movies.length) return;

    const scrollY =
      sessionStorage.getItem('homeScroll');

    if (scrollY) {
      window.scrollTo(0, Number(scrollY));
      sessionStorage.removeItem('homeScroll');
    }
  }, [movies]);

  const handlePageChange = ({ selected }) => {
    setSearchParams({ page: selected + 1 });
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-white">
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
