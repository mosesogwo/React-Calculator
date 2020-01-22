import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, color, wide,
}) => (
  <button
    type="button"
    className={`${color} ${wide ? 'wide' : 'not-wide'}`}
  >
    { name }
  </button>
);

Button.defaultProps = {
  color: 'orange',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool.isRequired,
};

export default Button;
