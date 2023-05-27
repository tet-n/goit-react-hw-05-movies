import PropTypes from 'prop-types';
import { Character, Img, Item, Name } from './Actor.styled';

const Actor = ({ name, character, profile_path }) => {
  const src = profile_path
    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
    : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
  return (
    <Item>
      <Img src={src} alt={name} />
      <Name>{name}</Name>
      <Character>{character}</Character>
    </Item>
  );
};

Actor.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profile_path: PropTypes.string.isRequired,
};

export default Actor;
