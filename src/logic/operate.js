import Big from 'big.js';

const operate = (numberOne, numberTwo=null, operation) => {
  const bigNumOne = Big(numberOne);
  const bigNumTwo = Big(numberTwo);
  if (operation === "+") {
    return (bigNumOne.plus(bigNumTwo));
  } else if (operation === "-") {
    return (bigNumOne.minus(bigNumTwo))
  } else if (operation === "÷") {
    return (bigNumOne.div(bigNumTwo))
  } else if (operation === "×") {
    return (bigNumOne.times(bigNumTwo))
  } else if (operation === "%") {
    return (bigNumOne.div(100))
  } 
}

export default operate;