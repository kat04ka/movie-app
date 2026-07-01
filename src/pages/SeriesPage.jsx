import { useEffect, useState } from 'react';
import {
  Link,
  useSearchParams,
} from 'react-router-dom';
import ReactPaginateModule from 'react-paginate';

import SearchBar from '../components/movie/SearchBar';
import SeriesList from '../components/series/SeriesList';
import Loader from '../components/ui/Loader';
import {
  getPopularSeries,
  searchSeries,
} from '../api/seriesApi';
import ErrorMessage from '../components/ui/ErrorMessage';

function SeriesPage() {
  const [series, setSeries] = useState([]);
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] =
    useSearchParams();

  const page =
    Number(searchParams.get('page')) || 1;

  useEffect(() => {
    const loadSeries = async () => {
      setLoading(true);
      setError('');

      try {
        let data;

        if (searchQuery.trim()) {
          data = await searchSeries(searchQuery, page);
        } else {
          data = await getPopularSeries(page);
        }

        setSeries(data.results);
        setTotalPages(
          Math.min(data.total_pages, 500),
        );
      } catch (err) {
        console.error(err);
        setError('Не удалось загрузить сериалы');
      } finally {
        setLoading(false);
      }
    };

    loadSeries();
  }, [searchQuery, page]);

  useEffect(() => {
    const scrollY =
      sessionStorage.getItem('homeScroll');

    if (scrollY) {
      window.scrollTo(0, Number(scrollY));
      sessionStorage.removeItem('homeScroll');
    }
  }, [series]);

  useEffect(() => {
  setQuery(searchParams.get('query') || '');
}, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    setSearchQuery(query);
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
