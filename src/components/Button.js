import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, color, wide, handleClick,
}) => (
  <button
    type="button"
    className={`${color} ${wide ? 'wide' : 'not-wide'}`}
    onClick={() => handleClick(name)}
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
  handleClick: PropTypes.func.isRequired,
};

export default Button;
