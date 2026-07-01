import { useEffect, useState } from 'react';
import {
  useParams,
} from 'react-router-dom';
import Loader from '../components/ui/Loader';
import ErrorMessage from '../components/ui/ErrorMessage';
import SeriesDetails from '../components/series/SeriesDetails';
import {
  getAggregateCredits,
  getSeries,
  getSeriesContentRatings,
} from '../api/seriesApi';

function SeriesDetailsPage() {
  const { id } = useParams();
  const [series, setSeries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState('');
  const [error, setError] = useState('');
  const [credits, setCredits] = useState(null);

  const networks = credits?.crew?.find(
    (person) => person.job === 'Creator',
  );
  const cast = credits?.cast
    ?.slice(0, 9)
    .map((actor) => ({
      ...actor,
      character:
        actor.roles?.[0]?.character ?? '',
      episode_count: actor.roles?.reduce(
        (sum, role) => sum + role.episode_count,
        0,
      ),
    }));

  useEffect(() => {
    const loadSeries = async () => {
      try {
        const seriesData = await getSeries(id);
        setSeries(seriesData);

        const ratingsData =
          await getSeriesContentRatings(id);

        const usRating = ratingsData.results.find(
          (contry) => contry.iso_3166_1 === 'US',
        );

        setRating(usRating?.rating || 'NR');

        const creditsData =
          await getAggregateCredits(id);
        setCredits(creditsData);
      } catch (err) {
        setError('Не удалось загрузить фильм');
      } finally {
        setLoading(false);
      }
    };

    loadSeries();
  }, [id]);

  if (loading) return <Loader />;
  if (error)
    return <ErrorMessage message={error} />;

  return (
    <SeriesDetails
      series={series}
      cast={cast}
      rating={rating}
      networks={networks}
    />
  );
}

export default SeriesDetailsPage;
