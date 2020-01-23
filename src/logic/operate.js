import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  const bigNumOne = numberOne ? Big(numberOne) : null;
  const bigNumTwo = numberTwo ? Big(numberTwo) : null;
  if (operation === '+') {
    // console.log(Big(numberOne + numberTwo));
    return (bigNumOne.plus(bigNumTwo).toString());
  } if (operation === '-') {
    return (bigNumOne.minus(bigNumTwo).toString());
  } if (operation === '÷') {
    return (bigNumOne.div(bigNumTwo).toString());
  } if (operation === '×') {
    return (bigNumOne.times(bigNumTwo).toString());
  } if (operation === '%') {
    return (bigNumOne.div(100).toString());
  }
  return false;
};

export default operate;
