// import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Field, Span } from './Form.styled';

const Form = ({ updateParams }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    updateParams(data);
    reset({ query: '' });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field {...register('query', { required: true })} />
      <Button type="submit">Search</Button>
      {errors.query && <Span>This field is required</Span>}
    </form>
  );
};

export default Form;
