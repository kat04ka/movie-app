import { tmdb } from './tmdb';

export const getPopularSeries = async (
  page = 1,
) => {
  const { data } = await tmdb.get('/tv/popular', {
    params: { page },
  });

  return data;
};

export const getSeries = async (id) => {
  const { data } = await tmdb.get(`/tv/${id}`);

  return data;
};

export const getSeriesContentRatings = async (id) => {
  const { data } = await tmdb.get(
    `/tv/${id}/content_ratings`
  );

  return data;
};

export const searchSeries = async (
  query,
  page = 1,
) => {
  const { data } = await tmdb.get('/search/tv', {
    params: {
      query,
      page,
    },
  });

  return data;
};

export const getAggregateCredits = async (id) => {
  const { data } = await tmdb.get(
    `/tv/${id}/aggregate_credits`
  );

  return data;
};