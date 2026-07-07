import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div
      className="grid 
        grid-cols-[repeat(auto-fit,minmax(180px,1fr))] 
        gap-6 px-8"
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
