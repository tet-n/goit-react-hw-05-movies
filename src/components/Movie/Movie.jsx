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
      <div style={{ display: 'flex', gap: 30 }}>
        <div>
          <img src={src} alt={movieData.title} />
        </div>
        <div>
          <h2>{movieData.title}</h2>
          <p>User score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{movieData.overview}</p>
          <h3>Genres</h3>
          <ul>{genres}</ul>
        </div>
      </div>
    </>
  );
};

export default Movie;
