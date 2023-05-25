import { Route, Routes } from 'react-router-dom';
import { Home, MovieDetails, Movies } from 'pages';
import { Layout, Cast, Reviews } from 'components';
import { fetchTrendingMovies } from 'services/fetchMovies/movieAPI';

fetchTrendingMovies();
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
