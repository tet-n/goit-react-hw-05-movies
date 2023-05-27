import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { Button, Field, Span } from './Form.styled';

const Form = () => {
  // eslint-disable-next-line
  const [_, setParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    setParams(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ query: '' });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field {...register('query', { required: true })} />

      <Button type="submit">Search</Button>
      {errors.query && <Span>This field is required</Span>}
    </form>
  );
};

export default Form;
