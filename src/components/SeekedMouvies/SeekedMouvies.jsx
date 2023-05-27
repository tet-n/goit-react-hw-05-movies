import { Loader } from 'components';
import { useEffect, useState } from 'react';
import { fetchMoviesByName } from 'services/fetchMovies/movieAPI';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Img, ImgThumb, Item, List, Title } from './SeekedMouvies.styled';

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
      <List>
        {movies.map(movie => {
          let title = movie?.title || movie?.name;
          let src = movie.poster_path
            ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
            : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
          if (title.length > 25) {
            title = title.substring(0, 20) + '...';
          }

          return (
            <Item key={movie.id}>
              <Link to={`${movie.id.toString()}`} state={{ from: location }}>
                <ImgThumb>
                  <Img src={src} alt={title} />
                </ImgThumb>
                <Title>{title}</Title>
              </Link>
            </Item>
          );
        })}
      </List>
    </>
  );
};

export default SeekedMouvies;
