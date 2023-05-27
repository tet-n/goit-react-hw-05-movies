import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Img, Item, Title } from './TrendingMovie.styled';

const TrendingMovie = ({ movie, location }) => {
  let title = movie?.title || movie?.name;
  let src = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
    : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
  if (title.length > 25) {
    title = title.substring(0, 22) + '...';
  }
  return (
    <Item tabIndex={1}>
      <Link to={`movies/${movie.id.toString()}`} state={{ from: location }}>
        <div>
          <Img src={src} alt={title} />
        </div>
        <Title>{title}</Title>
      </Link>
    </Item>
  );
};

TrendingMovie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

export default TrendingMovie;
