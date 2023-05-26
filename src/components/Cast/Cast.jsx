import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/fetchMovies/movieAPI';
import { Actor } from 'components';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(movieId).then(setCast).catch(console.log);
  }, [movieId]);

  return (
    <>
      {cast.length && (
        <ul>
          {cast.map(actorInfo => (
            <Actor key={actorInfo.id} {...actorInfo} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
