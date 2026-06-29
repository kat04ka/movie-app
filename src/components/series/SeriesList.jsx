import SeriesCard from "./SeriesCard";

function SerieList({ series }) {
  return (
    <div
      className="grid 
        grid-cols-[repeat(auto-fit,minmax(180px,1fr))] 
        m-4 gap-6"
    >
      {series.map((tv) => (
        <SeriesCard key={tv.id} tv={tv} />
      ))}
    </div>
  );
}

export default SerieList;