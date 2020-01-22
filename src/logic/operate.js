import Big from 'big.js';

const operate = (numberOne, numberTwo = null, operation) => {
  const bigNumOne = Big(numberOne);
  const bigNumTwo = Big(numberTwo);
  if (operation === '+') {
    return (bigNumOne.plus(bigNumTwo));
  } if (operation === '-') {
    return (bigNumOne.minus(bigNumTwo));
  } if (operation === '÷') {
    return (bigNumOne.div(bigNumTwo));
  } if (operation === '×') {
    return (bigNumOne.times(bigNumTwo));
  } if (operation === '%') {
    return (bigNumOne.div(100));
  }
  return false;
};

export default operate;
