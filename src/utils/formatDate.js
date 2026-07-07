export function formatDate(date) {
  return new Date(date).toLocaleDateString(
    'en-En',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
  );
}
