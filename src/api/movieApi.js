import { tmdb } from './tmdb';

export const getPopularMovies = async (
  page = 1,
) => {
  const { data } = await tmdb.get(
    '/movie/popular',
    {
      params: { page },
    },
  );

  return data;
};

export const searchMovies = async (
  query,
  page = 1,
) => {
  const { data } = await tmdb.get(
    '/search/movie',
    {
      params: {
        query,
        page,
      },
    },
  );

  return data;
};

export const getMovie = async (id) => {
  const { data } = await tmdb.get(`/movie/${id}`);

  return data;
};

export const getMovieReleaseDates = async (
  id,
) => {
  const { data } = await tmdb.get(
    `/movie/${id}/release_dates`,
  );

  return data;
};

export const getCredits = async (type, id) => {
  const { data } = await tmdb.get(
    `/${type}/${id}/credits`,
  );

  return data;
};