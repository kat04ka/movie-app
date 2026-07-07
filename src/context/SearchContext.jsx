import {
  createContext,
  useContext,
  useState,
} from 'react';

const SearchContext = createContext(null);

export function SearchProvider({
  children,
}) {
  const [query, setQuery] = useState('');
  const [favoriteQuery, setFavoriteQuery] =
    useState('');

  const [onSubmit, setOnSubmit] =
    useState(null);

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,

        favoriteQuery,
        setFavoriteQuery,

        onSubmit,
        setOnSubmit,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}