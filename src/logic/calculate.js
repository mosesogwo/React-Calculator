import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  // let newTotal = total;
  // let newNext = next;
  // let newOperation = operation;

  const arithmeticOperators = ["+", "-", "×", "÷"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // AC, +/-, %, =

  if (numbers.includes(buttonName)) {
    if(next) {
      next = next + buttonName;
    } else {
      next = buttonName;
    }
  }

  if (arithmeticOperators.includes(buttonName)) {
    if (!next) {
      operation = buttonName;
      total = total ? (operate(total, 0, operation)) : 0;
    } else { 
      if(total && !operation) {
        operation = buttonName;
        total = operate(total, next, operation);
        next = null;
      } else if (total && operation) {
        total = operate(total, next, operation);
        operation = buttonName;
        next = null;
      } else if(!total) {
        operation = buttonName;
        total = next;
        next = null;
      }
    }
  }

  if (buttonName === "=") {
    if (next && total && operation) {
      total = operate(total, next, operation);
      next = null
      operation = null;
    }
  }

  if (buttonName === "AC") {
    total = null;
    next = null;
    operation = null;
  }


  return { total: total, next: next, operation: operation };
};

export default calculate;
