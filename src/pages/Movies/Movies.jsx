import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Form from 'components/Form/Form';
import { Loader } from 'components';
import { fetchMoviesByName } from 'services/movieAPI/movieAPI';
import { Img, Item, List, Title } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (!query) return;

    fetchMoviesByName(query)
      .then(setMovies)
      .finally(() => setShowLoader(false));
  }, [query]);

  const updateParams = params => {
    setSearchParams(params);
  };

  return (
    <section>
      <Form updateParams={updateParams} />
      <Loader visible={showLoader} />
      <List>
        {movies.map(({ titleName, id, src }) => (
          <Item tabIndex={1} key={id}>
            <Link to={`${id.toString()}`} state={{ from: location }}>
              <Img src={src} alt={titleName} />
              <Title>{titleName}</Title>
            </Link>
          </Item>
        ))}
      </List>
    </section>
  );
};

export default Movies;
