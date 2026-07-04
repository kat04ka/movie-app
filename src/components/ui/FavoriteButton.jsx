import { Heart } from 'lucide-react';
import { useFavorites } from '../../context/FavoritesContext';


function FavoriteButton({ item }) {
  const {
    isFavorite,
    toggleFavorite,
  } = useFavorites();

  const favorite = isFavorite(
    item.id,
    item.mediaType,
  );

  return (
    <button
    type='button'
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(item)
      }}
      className="absolute cursor-pointer top-2 z-10 
      right-2 p-2 rounded-full bg-black/40
      hover:bg-black/60 transition"
    >
      <Heart
        size={20}
        className={
          favorite
            ? 'text-red-500 fill-red-500'
              : 'text-white'
        }
      />
    </button>
  );
}

export default FavoriteButton;