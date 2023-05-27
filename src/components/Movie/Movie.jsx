import PropTypes from 'prop-types';
import {
  Img,
  ImgWrap,
  InsideWrap,
  List,
  MovieTitle,
  OutsideWrap,
  Span,
  SubTitle,
} from './Movie.styled';

const Movie = ({ movieData }) => {
  const src = movieData.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
    : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
  const userScore = Math.ceil(movieData.vote_average * 10);

  const genres = movieData.genres.map(({ id, name }) => (
    <li key={id}>{name}</li>
  ));

  return (
    <>
      <OutsideWrap>
        <ImgWrap>
          <Img src={src} alt={movieData.title} />
        </ImgWrap>
        <InsideWrap>
          <MovieTitle>{movieData.title}</MovieTitle>
          <div>
            <p>
              User score: <Span>{userScore}%</Span>
            </p>
            <SubTitle>Overview</SubTitle>
            <p>{movieData.overview}</p>
            <SubTitle>Genres</SubTitle>
            <List>{genres}</List>
          </div>
        </InsideWrap>
      </OutsideWrap>
    </>
  );
};

Movie.propTypes = {
  movieData: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Movie;
