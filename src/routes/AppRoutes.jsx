import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviePage from '../pages/MoviePage';
import FavoritesPage from '../pages/FavoritesPage';
import SeriesPage from '../pages/SeriesPage';
import SeriesDetailsPage from '../pages/SeriesDetailsPage';
import MainLayout from '../layouts/MainLayout';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
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
        <Route
          path="/tv/:id"
          element={<SeriesDetailsPage />}
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
