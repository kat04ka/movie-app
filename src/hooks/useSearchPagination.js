import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useSearchPagination({
  searchFn,
  popularFn,
}) {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [totalPages, setTotalPages] = useState(0);

  const [searchParams, setSearchParams] =
    useSearchParams();

  const page =
    Number(searchParams.get('page')) || 1;

  useEffect(() => {
    setQuery(searchParams.get('query') || '');
  }, [searchParams]);

  useEffect(() => {
    const loadItems = async () => {
      setLoading(true);
      setError('');

      try {
        const searchQuery =
          searchParams.get('query') || '';

        const data = searchQuery.trim()
          ? await searchFn(searchQuery, page)
          : await popularFn(page);

        setItems(data.results);
        setTotalPages(
          Math.min(data.total_pages, 500),
        );
      } catch (err) {
        console.error(err);
        setError('Не удалось загрузить данные');
      } finally {
        setLoading(false);
      }
    };

    loadItems();
  }, [searchParams, page, searchFn, popularFn]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    setSearchParams({ page: 1, query });
  };

  const handlePageChange = ({ selected }) => {
    sessionStorage.removeItem('seriesScroll');

    const params = {
      page: selected + 1,
    };

    if (query.trim()) {
      params.query = query;
    }

    setSearchParams(params);
  };

  return {
    items,
    query,
    setQuery,
    loading,
    error,
    totalPages,
    page,
    handleSubmit,
    handlePageChange,
  };
}
