import CastCard from './CastCard';

function CastList({ cast }) {
  return (
    <div className="min-w-0 w-full">
      <h3 className="mb-2 text-3xl font-semibold">
        Top Billed Cast
      </h3>

      <div className="w-full overflow-x-auto">
        <div className="flex w-max gap-3 pb-4">
          {cast?.slice(0, 10).map((actor) => (
            <CastCard
              key={actor.id}
              actor={actor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CastList;
