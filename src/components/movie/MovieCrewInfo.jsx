function CrewInfo({ director, writers }) {
  return (
    <div className="flex gap-8 mt-4">
      <div>
        <h4 className="text-white/70">
          Director:{' '}
        </h4>
        <p className="font-semibold">
          {director?.name}
        </p>
      </div>

      {writers?.length > 0 && (
        <div>
          <h4 className="text-white/70">
            Writers:
          </h4>
          <p className="font-semibold">
            {writers
              ?.map((w) => w.name)
              .join(', ')}
          </p>
        </div>
      )}
    </div>
  );
}

export default CrewInfo;
