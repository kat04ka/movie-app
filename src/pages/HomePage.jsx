import {
  Link,
} from 'react-router-dom';
import { useEffect } from 'react';
import {
  searchMovies,
  getPopularMovies,
} from '../api/movieApi';
import MovieList from '../components/movie/MovieList';
import SearchBar from '../components/movie/SearchBar';
import useSearchPagination from '../hooks/useSearchPagination';
import ReactPaginateModule from 'react-paginate';
import Loader from '../components/ui/Loader';
import ErrorMessage from '../components/ui/ErrorMessage';

function HomePage() {
  const {
    items: movies,
    query,
    setQuery,
    loading,
    error,
    totalPages,
    page,
    handleSubmit,
    handlePageChange,
  } = useSearchPagination({
    searchFn: searchMovies,
    popularFn: getPopularMovies,
  });

  useEffect(() => {
    if (!movies.length) return;

    const scrollY =
      sessionStorage.getItem('movieScroll');

    if (scrollY) {
      window.scrollTo(0, Number(scrollY));
      sessionStorage.removeItem('movieScroll');
    }
  }, [movies]);
  
  useEffect(() => {
  console.log('HomePage mounted');
}, []);

  if (loading) return <Loader />;
  if (error)
    return <ErrorMessage message={error} />;

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
