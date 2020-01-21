import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const buttonGroups = [
    ["AC", "+/-", "%", "/"],
    ["7", "8", "9", "X"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="]
  ];

  const buttons = buttonGroups.map((buttonGroup, idx) => {
  return (
    <div className={"group-"+ idx }>
      { buttonGroup.map((buttonName) => {
        return (<Button name={buttonName}/>)
        }) }
    </div>)
  })

  return (
    <div className="buttonPanel">
      {buttons}
    </div>
  )
};

export default ButtonPanel;
