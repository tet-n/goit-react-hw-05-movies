import React from 'react';
import PropTypes from 'prop-types';

const ReviewItem = ({ author, content }) => {
  return (
    <li>
      <h3>{author}</h3>
      <p>{content}</p>
    </li>
  );
};

ReviewItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ReviewItem;
