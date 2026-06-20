export function formatDate(date) {
  return new Date(date).toLocaleDateString(
    'ru-Ru',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
  );
}
