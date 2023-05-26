import Form from 'components/Form/Form';
import { Outlet } from 'react-router-dom';
import SeekedMouvies from 'components/SeekedMouvies/SeekedMouvies';

const Movies = () => {
  return (
    <>
      <Form />
      <SeekedMouvies />
      <Outlet />
    </>
  );
};

export default Movies;
