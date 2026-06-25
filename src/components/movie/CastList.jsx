function CastList({
  cast,
}) {
  return (
    <div className="">
      <h3 className="mb-2 text-xl font-semibold">
        Top Billed Cast
      </h3>

      <p className="">
        {cast
          ?.map((actor) => actor.name)
          .join(', ')}
      </p>
    </div>
  );
}

export default CastList;
