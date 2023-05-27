import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Img, Item } from './TrendingMovie.styled';

const TrendingMovie = ({ movie, location }) => {
  let title = movie?.title || movie?.name;
  let src = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
  if (title.length > 30) {
    title = title.substring(0, 25) + '...';
  }
  return (
    <Item>
      <Link to={`movies/${movie.id.toString()}`} state={{ from: location }}>
        <div style={{ objectFit: 'cover' }}>
          <Img src={src} alt={title} />
        </div>
        <h2>{title}</h2>
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
