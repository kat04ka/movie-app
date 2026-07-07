import noPosterPlaceholder from '../assets/images/no-poster.svg';

const IMAGE_BASE_URL =
  'https://image.tmdb.org/t/p';

export const getBackdropUrl = (
  path,
  size = 'original',
) => {
  if (!path) return null;

  return `${IMAGE_BASE_URL}/${size}${path}`;
};

export const getPosterUrl = (
  path,
  size = 'w500',
) => {
  if (!path) return null;

  return `${IMAGE_BASE_URL}/${size}${path}`;
};

export const getLogoUrl = (path) =>
  path
    ? `https://image.tmdb.org/t/p/h30${path}`
    : '';

export const getProfileUrl = (
  path,
  size = 'w185',
) => {
  if (!path) return null;

  return `${IMAGE_BASE_URL}/${size}${path}`;
};

export const getPosterImage = (
  path,
  size = 'w500',
) => {
  return path
    ? `${IMAGE_BASE_URL}/${size}${path}`
    : noPosterPlaceholder;
};