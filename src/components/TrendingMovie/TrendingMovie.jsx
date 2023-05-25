import { Img, Item } from './TrendingMovie.styled';

const TrendingMovie = ({ movie }) => {
  let title = movie?.title || movie?.name;
  let src = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
  if (title.length > 30) {
    title = title.substring(0, 25) + '...';
  }
  return (
    <Item>
      <div style={{ objectFit: 'cover' }}>
        <Img src={src} alt={title} />
      </div>
      <h2>{title}</h2>
    </Item>
  );
};

export default TrendingMovie;
