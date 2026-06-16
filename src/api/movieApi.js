import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie`,
    {
      params: {
        api_key: API_KEY,
        query,
      },
    },
  );

  return response.data.results;
};

export const getPopularMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/movie/popular`,
    {
      params: {
        api_key: API_KEY,
      },
    },
  );

  return response.data.results;
};
