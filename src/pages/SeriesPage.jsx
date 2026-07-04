import {
  useLayoutEffect,
} from 'react';
import ReactPaginateModule from 'react-paginate';

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
    loading,
    error,
    totalPages,
    page,
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

  if (loading) return <Loader />;
  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div>
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
          containerClassName="flex flex-wrap justify-center items-center gap-2 my-8"
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
