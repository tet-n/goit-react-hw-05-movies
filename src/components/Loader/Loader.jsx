import { TailSpin } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Loader = ({ visible }) => {
  return (
    <TailSpin
      height="60"
      width="60"
      color="#23aa6b"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{ margin: '0 auto' }}
      visible={visible}
    />
  );
};

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Loader;
