import {
  createContext,
  useContext,
} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const FavoritesContext =
  createContext(null);

export function FavoritesProvider({
  children,
}) {
  const [favorites, setFavorites] =
    useLocalStorage('favorites', []);

  const isFavorite = (id, mediaType) =>
    favorites.some(
      (item) =>
        item.id === id &&
        item.mediaType === mediaType,
    );

  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const exists = prev.some(
        (fav) =>
          fav.id === item.id &&
          fav.mediaType === item.mediaType,
      );

      if (exists) {
        return prev.filter(
          (fav) =>
            !(
              fav.id === item.id &&
              fav.mediaType === item.mediaType
            ),
        );
      }

      return [...prev, item];
    });
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}