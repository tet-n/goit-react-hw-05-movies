import { Loader } from 'components';
import { useEffect, useState } from 'react';
import { fetchMoviesByName } from 'services/fetchMovies/movieAPI';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const SeekedMouvies = () => {
  const [params] = useSearchParams();
  const query = params.get('query');
  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (!query) return;

    fetchMoviesByName(query)
      .then(setMovies)
      .finally(() => setShowLoader(false));
  }, [query]);

  return (
    <>
      <Loader visible={showLoader} />
      <ul>
        {movies.map(movie => {
          let title = movie?.title || movie?.name;
          let src = movie.poster_path
            ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
            : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
          if (title.length > 25) {
            title = title.substring(0, 20) + '...';
          }

          return (
            <li key={movie.id}>
              <Link to={`${movie.id.toString()}`} state={{ from: location }}>
                <div style={{ objectFit: 'cover' }}>
                  <img src={src} alt={title} />
                </div>
                <h2>{title}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SeekedMouvies;
