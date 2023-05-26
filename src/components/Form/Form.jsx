import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

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
      <input {...register('query', { required: true })} />
      {errors.query && <span>This field is required</span>}
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
