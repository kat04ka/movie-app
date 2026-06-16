export function formatDate(date) {
  return new Date(date).toLocaleDateString(
    'ru-Ru',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    },
  );
}
