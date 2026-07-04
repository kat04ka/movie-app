import { useState } from 'react';

const ITEMS_PER_PAGE = 20;

export default function useFavoritesPagination(
  favorites,
) {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(
    favorites.length / ITEMS_PER_PAGE,
  );

  const currentFavorites = favorites.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE,
  );

  const handlePageChange = ({ selected }) => {
    setPage(selected);
  };

  return {
    favorites: currentFavorites,
    page,
    totalPages,
    handlePageChange,
  };
}