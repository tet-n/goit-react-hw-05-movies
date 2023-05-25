import { Loader, TrendingMovie } from 'components';
import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/fetchMovies/movieAPI';
import { List } from './TrendingList.styled';

const TrendingList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    fetchTrendingMovies()
      .then(setTrendingMovies)
      .catch(console.log)
      .finally(() => setShowLoader(false));
  }, []);

  return (
    <>
      <Loader visible={showLoader} />
      <List>
        {trendingMovies.map(movie => (
          <TrendingMovie key={movie.id} movie={movie} />
        ))}
      </List>
    </>
  );
};

export default TrendingList;
