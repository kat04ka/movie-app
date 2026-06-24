import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (
  query,
  page = 1,
) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie`,
    {
      params: {
        api_key: API_KEY,
        query,
        page,
      },
    },
  );

  return response.data;
};

export const getPopularMovies = async (
  page = 1,
) => {
  const response = await axios.get(
    `${BASE_URL}/movie/popular`,
    {
      params: {
        api_key: API_KEY,
        page,
      },
    },
  );

  return response.data;
};

export const getMovie = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}`,
    {
      params: {
        api_key: API_KEY,
      },
    },
  );

  return response.data;
};

export const getMovieReleaseDates = async (
  movieId,
) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/release_dates`,
    {
      params: {
        api_key: API_KEY,
      },
    },
  );

  return response.data;
};

export const getMovieCredits = async (
  movieId,
) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits`,
    {
      params: {
        api_key: API_KEY,
      },
    },
  );
  
  return response.data;
};