function CrewInfo({ created_by = [] }) {
  if (!created_by.length) return null;

  return (
    <div className=" mt-4">
      <h4 className="text-white/70">Creator:</h4>
      <p className="font-semibold">
        {created_by
          .map((creator) => creator.name)
          .join(', ')}
      </p>
    </div>
  );
}

export default CrewInfo;
