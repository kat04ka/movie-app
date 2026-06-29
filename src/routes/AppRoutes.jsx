import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviePage from '../pages/MoviePage';
import FavoritesPage from '../pages/FavoritesPage';
import SeriesPage from '../pages/SeriesPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/movie/:id"
        element={<MoviePage />}
      />
      <Route
        path="/favorites"
        element={<FavoritesPage />}
      />
      <Route
        path="/series"
        element={<SeriesPage />}
      />
    </Routes>
  );
}

export default AppRoutes;
