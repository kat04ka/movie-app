import SeriesCard from "./SeriesCard";

function SerieList({ series }) {
  return (
    <div
      className="grid 
        grid-cols-[repeat(auto-fit,minmax(180px,1fr))] 
        gap-6 px-8"
    >
      {series.map((tv) => (
        <SeriesCard key={tv.id} tv={tv} />
      ))}
    </div>
  );
}

export default SerieList;