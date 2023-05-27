import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Form from 'components/Form/Form';
import SeekedMouvies from 'components/SeekedMouvies/SeekedMouvies';

const Movies = () => {
  return (
    <section>
      <Form />
      <SeekedMouvies />
      <Suspense fallback={<div>Please wait. We are in a process...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default Movies;