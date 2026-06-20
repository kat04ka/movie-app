import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/ui/Loader';
import {
  getMovie,
  getMovieReleaseDates,
} from '../api/movieApi';
import { getBackdropUrl, getPosterUrl } from '../utils/imageUrl';
import { formatDate } from '../utils/formatDate';

function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState('');

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const movieData = await getMovie(id);
        setMovie(movieData);

        const releaseData =
          await getMovieReleaseDates(id);

        const usRelease =
          releaseData.results.find(
            (contry) =>
              contry.iso_3166_1 === 'ES',
          );

        const certification =
          usRelease?.release_dates?.[0]
            ?.certification;
        setRating(certification || 'NR');
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [id]);

  if (loading) return <Loader />;
  if (!movie) return <h2>Movie not found </h2>;

  return (
    <div className="relative overflow-hidden">
      <div
        className="movie-backdrop absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(${getPosterUrl(movie.backdrop_path)})`,
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
          to right, 
          rgba(31,10,10,1) 0%, 
          rgba(31,10,10,0.84) 50%, 
          rgba(31,10,10,0.84) 100%)`,
        }}
      />
      <div className="relative z-1 max-w-7xl mx-auto px-8 py-10">
        <div className="flex flex-col sm:flex-row gap-5">
          {movie.poster_path && (
            <img
              className="w-55 h-82 rounded-lg object-cover"
              src={getBackdropUrl(movie.poster_path)}
              alt={movie.title || movie.name}
            />
          )}

          <div className="text-white">
            <h1 className="text-4xl font-bold mb-2">
              {movie.title}
              <span className="text-white/70 font-normal pl-2">
                (
                {new Date(
                  movie.release_date,
                ).getFullYear()}
                )
              </span>
            </h1>
            <div className="flex gap-2 mb-4">
              <span className="flex items-center border text-white/60 px-1">
                {rating}
              </span>
              <span>{formatDate(movie.release_date)}</span>
              <span>•</span>
              <span>{movie.runtime} min</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {movie.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="px-3 py-1 rounded-full bg-slate-700 text-white"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <div className="w-16 h-16 rounded-full border-4 border-green-400 flex items-center justify-center text-xl font-bold">
              {Math.round(
                movie.vote_average * 10,
              )}
              %
            </div>

            {movie.tagline && (
              <p className="italic text-white/70 text-xl mt-6">
                {movie.tagline}
              </p>
            )}

            <h2 className="text-2xl font-semibold my-2">
              Обзор
            </h2>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
