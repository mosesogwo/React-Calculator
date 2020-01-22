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
      { buttonGroup.map((buttonName, idx2) => (
      <Button 
        name={buttonName} 
        key={sha256(buttonName)}
        id={ `${idx}${idx2}` }
        color={idx2 === buttonGroup.length - 1 ? 'btn-color' : 'btn-gray' }
        wide={buttonName === "0" ? true : false }
      />)) }
    </div>
  ));

  return (
    <div className="buttonPanel">
      {buttons}
    </div>
  );
};

export default ButtonPanel;
