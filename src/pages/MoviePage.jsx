import { useEffect, useState } from 'react';
import {
  useLocation,
  useParams,
} from 'react-router-dom';
import Loader from '../components/ui/Loader';
import {
  getMovie,
  getMovieCredits,
  getMovieReleaseDates,
} from '../api/movieApi';
import ErrorMessage from '../components/ui/ErrorMessage';
import MovieDetails from '../components/movie/MovieDetails';

function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState('');
  const [error, setError] = useState('');
  const [credits, setCredits] = useState(null);

  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const director = credits?.crew?.find(
    (person) => person.job === 'Director',
  );
  const writers = credits?.crew?.filter(
    (person) =>
      person.job === 'Screenplay' ||
      person.job === 'Writer',
  );
  const cast = credits?.cast?.slice(0, 9);

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

        const creditsData =
          await getMovieCredits(id);
        setCredits(creditsData);
      } catch (err) {
        setError('Не удалось загрузить фильм');
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [id]);

  if (loading) return <Loader />;
  if (error)
    return <ErrorMessage message={error} />;

  return (
    <MovieDetails
      movie={movie}
      cast={cast}
      rating={rating}
      director={director}
      writers={writers}
    />
  );
}

export default MoviePage;
