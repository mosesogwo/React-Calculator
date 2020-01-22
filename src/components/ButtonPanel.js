import React from 'react';
import sha256 from 'crypto-js/sha256';
import Button from './Button';

const ButtonPanel = () => {
  const buttonGroups = [
    ['AC', '+/-', '%', '/'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const buttons = buttonGroups.map((buttonGroup, idx) => (
    <div className={`group-${idx}`} key={sha256(buttonGroup.join())}>
      { buttonGroup.map((buttonName) => (<Button name={buttonName} key={sha256(buttonName) } />)) }
    </div>
  ));

  return (
    <div className="buttonPanel">
      {buttons}
    </div>
  );
};

export default ButtonPanel;
