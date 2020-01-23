import operate from './operate';

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;

  let newTotal = total;
  let newNext = next;
  let newOperation = operation;

  if (
    (buttonName === '+'
    || buttonName === '-'
    || buttonName === '×'
    || buttonName === '÷')
  ) {
    newOperation = buttonName;
    if (newNext && newTotal) {
      newTotal = operate(newTotal, newNext, newOperation);
      newNext = null;
      newOperation = null;
    }
  } else if (buttonName === '%') {
    if (newNext) {
      newTotal = operate(newNext, '%');
      newNext = null;
      newOperation = null;
    } else if (newTotal) {
      newTotal = operate(newTotal, '%');
      newNext = null;
      newOperation = null;
    }
  } else if (buttonName === '+/-') {
    if (newNext) {
      newTotal = operate(newNext, -1, '×');
    } else if (newTotal) {
      newTotal = operate(newTotal, -1, '×');
    }
    newNext = null;
    newOperation = null;
  } else if (buttonName === 'AC') {
    newTotal = null;
    newNext = null;
    newOperation = null;
  }

  return { total:newTotal, next:newNext, operation:newOperation };
};

export default calculate;
