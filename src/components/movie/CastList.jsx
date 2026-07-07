import CastCard from './CastCard';

function CastList({ cast }) {
  return (
    <div className="min-w-0 w-full">
      <h3 className="mb-2 text-3xl font-semibold">
        Top Billed Cast
      </h3>

      {!cast?.length ? (
        <p className="text-gray-700">
          We don't have any cast added to this movie.
        </p>
      ) : (
        <div className="w-full overflow-x-auto">
          <div className="flex w-max gap-3 pb-4">
            {cast?.slice(0, 9).map((actor) => (
              <CastCard
                key={actor.id}
                actor={actor}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CastList;
