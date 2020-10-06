import React from 'react';
import PropTypes from 'prop-types';

const PostItem = ({ post }) => {
  return (
    <div>
      <h6 data-testid='mock'>{post.title}</h6>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostItem;
