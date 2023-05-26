import { Loader } from 'components';
import { useEffect, useState } from 'react';
import { fetchMoviesByName } from 'services/fetchMovies/movieAPI';
import { Link, useSearchParams } from 'react-router-dom';

const SeekedMouvies = () => {
  const [params] = useSearchParams();
  const query = params.get('query');
  console.log(query);

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
          return (
            <Link to={`${movie.id.toString()}`}>
              <div style={{ objectFit: 'cover' }}>
                <img src="{src}" alt={movie.title} />
              </div>
              <h2>{movie.title}</h2>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default SeekedMouvies;
