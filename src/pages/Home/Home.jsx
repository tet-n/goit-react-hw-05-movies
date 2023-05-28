import React from 'react';
import { Link } from 'react-router-dom';
import { Loader } from 'components';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/movieAPI/movieAPI';
import { List, Img, Item, Title } from './Home.styled';

const Home = () => {
  const location = useLocation();
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
    <section>
      <Loader visible={showLoader} />
      <List>
        {trendingMovies.map(({ id, titleName, src }) => {
          return (
            <Item tabIndex={1} key={id}>
              <Link to={`movies/${id.toString()}`} state={{ from: location }}>
                <Img src={src} alt={titleName} />
                <Title>{titleName}</Title>
              </Link>
            </Item>
          );
        })}
      </List>
    </section>
  );
};

export default Home;
