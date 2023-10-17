import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home').then((module) => ({ default: module.Home })));
const Movies = lazy(() => import('../pages/Movies/Movies').then((module) => ({ default: module.Movies })));
const Layout = lazy(() => import('../pages/Layout/Layout').then((module) => ({ default: module.Layout })));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails').then((module) => ({ default: module.MovieDetails })));
const Cast = lazy(() => import('./Cast/Cast').then((module) => ({ default: module.Cast })));
const Reviews = lazy(() => import('./Reviews/Reviews').then((module) => ({ default: module.Reviews })));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:moviesId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
