import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, id, color, wide }) => (
  <button 
    type="button" 
    id={ `btn-${id}` }
    className={`${color} ${wide ? "wide" : "not-wide"}`}>
      { name }
  </button>
);

Button.defaultProps = {
  color: "orange"
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool.isRequired
};

export default Button;
