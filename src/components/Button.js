import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, id }) => (
  <button type="button" id={ `btn-${id}` }>{ name }</button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
