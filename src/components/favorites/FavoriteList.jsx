import FavoriteCard from './FavoriteCard';

function FavoriteList({ favorites }) {

  if (!favorites.length) {
    return (
      <p className="text-center mt-10">
        В избранном пока ничего нет
      </p>
    );
  }

  return (
    <div
      className="grid 
        grid-cols-[repeat(auto-fill,minmax(180px,1fr))] 
        gap-6 px-8 pb-8"
    >
      {favorites.map((item) => (
        <FavoriteCard
          key={`${item.mediaType}-${item.id}`}
          item={item}
        />
      ))}
    </div>
  );
}

export default FavoriteList;
