import {
  useEffect,
  useLayoutEffect,
} from 'react';
import { Link } from 'react-router-dom';
import ReactPaginateModule from 'react-paginate';

import SearchBar from '../components/movie/SearchBar';
import SeriesList from '../components/series/SeriesList';
import Loader from '../components/ui/Loader';
import {
  getPopularSeries,
  searchSeries,
} from '../api/seriesApi';
import ErrorMessage from '../components/ui/ErrorMessage';
import useSearchPagination from '../hooks/useSearchPagination';

function SeriesPage() {
  const {
    items: series,
    query,
    setQuery,
    loading,
    error,
    totalPages,
    page,
    handleSubmit,
    handlePageChange,
  } = useSearchPagination({
    searchFn: searchSeries,
    popularFn: getPopularSeries,
  });

  useLayoutEffect(() => {
    const scrollY = sessionStorage.getItem(
      'seriesScroll',
    );

    if (scrollY) {
      window.scrollTo(0, Number(scrollY));
    }
  }, [series]);

  useEffect(() => {
    console.log('SeriesPage mounted');
  }, []);

  if (loading) return <Loader />;
  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div>
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
      <SeriesList series={series} />
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

export default SeriesPage;
