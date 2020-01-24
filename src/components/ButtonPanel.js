import React from 'react';
import PropTypes from 'prop-types';
import sha256 from 'crypto-js/sha256';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const buttonGroups = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];


  const buttons = buttonGroups.map((buttonGroup, idx) => (
    <div className={`group-${idx}`} key={sha256(buttonGroup.join())}>
      { buttonGroup.map((buttonName, idx2) => (
        <Button
          name={buttonName}
          key={sha256(buttonName)}
          color={idx2 === buttonGroup.length - 1 ? 'btn-color' : 'btn-gray'}
          wide={buttonName === '0'}
          handleClick={(buttonName) => clickHandler(buttonName)}
        />
      )) }
    </div>
  ));

  return (
    <div className="buttonPanel">
      {buttons}
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
