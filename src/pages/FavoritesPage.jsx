import { useMemo, useState } from 'react';
import ReactPaginateModule from 'react-paginate';
import FavoriteList from '../components/favorites/FavoriteList';
import { useFavorites } from '../context/FavoritesContext';
import { useSearch } from '../context/SearchContext';

const ITEMS_PER_PAGE = 20;

function FavoritesPage() {
  const { favorites } = useFavorites();
  const { favoriteQuery } = useSearch();

  const [page, setPage] = useState(0);

  const filteredFavorites = useMemo(() => {
    if (!favoriteQuery.trim()) return favorites;

    return favorites.filter((item) =>
      (item.title || item.name)
        .toLowerCase()
        .includes(favoriteQuery.toLowerCase()),
    );
  }, [favorites, favoriteQuery]);

  const pageCount = Math.ceil(
    filteredFavorites.length / ITEMS_PER_PAGE,
  );

  const currentFavorites =
    filteredFavorites.slice(
      page * ITEMS_PER_PAGE,
      (page + 1) * ITEMS_PER_PAGE,
    );

  const handlePageChange = ({ selected }) => {
    setPage(selected);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <FavoriteList
        favorites={currentFavorites}
      />

      {pageCount > 1 && (
        <ReactPaginateModule.default
          pageCount={pageCount}
          forcePage={page}
          onPageChange={handlePageChange}
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

export default FavoritesPage;
