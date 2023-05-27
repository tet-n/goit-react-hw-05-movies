import PropTypes from 'prop-types';

const Actor = ({ name, character, profile_path }) => {
  const src = profile_path
    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
    : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
  return (
    <li>
      <div>
        <img src={src} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{character}</p>
    </li>
  );
};

Actor.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profile_path: PropTypes.string.isRequired,
};

export default Actor;
