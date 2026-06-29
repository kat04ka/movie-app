import {
  Link,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import {
  getPopularSeries,
  searchSeries,
} from '../api/movieApi';
import SearchBar from '../components/movie/SearchBar';
import { useEffect, useState } from 'react';
import SeriesList from '../components/series/SeriesList';

function SeriesPage() {
  const { id } = useParams();
  const [query, setQuery] = useState('');
  const [series, setSeries] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] =
    useSearchParams();

  const page =
    Number(searchParams.get('page')) || 1;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    setSearchParams({ page: 1, query });
  };

  useEffect(() => {
    const loadSeries = async () => {
      if (query.trim()) {
        const data = await searchSeries(
          query,
          page,
        );

        setSeries(data.results);
        setTotalPages(data.total_pages);
      } else {
        const data = await getPopularSeries(page);

        setSeries(data.results);
        setTotalPages(data.total_pages);
      }
    };

    loadSeries();
  }, [query, page]);

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
      <h2>Serials</h2>
    </div>
  );
}

export default SeriesPage;
