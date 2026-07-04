import Button from '../ui/Button';
import Input from '../ui/Input';

function SearchBar({
  query,
  setQuery,
  onSubmit,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex gap-2"
    >
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movie"
      />
      {onSubmit && (
        <Button type="submit">Search</Button>
      )}
    </form>
  );
}

export default SearchBar;
