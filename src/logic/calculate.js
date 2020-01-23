import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  const arithmeticOperators = ["+", "-", "×", "÷"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // AC, +/-, %, =

  if (numbers.includes(buttonName)) {
    if (next) {
      next = next + buttonName;
    } else {
      next = buttonName;
    }
  }

  if (arithmeticOperators.includes(buttonName)) {
    if (!next) {
      operation = buttonName;
      if (!total) {
        // next = null;
        total = "0";
      }
    } else {
      if (total && !operation) {
        operation = buttonName;
        total = operate(total, next, operation);
        next = null;
      } else if (total && operation) {
        total = operate(total, next, operation);
        operation = buttonName;
        next = null;
      } else if (!total) {
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

  if (buttonName === "%") {
    if (total) {
      if (next) {
        next = operate(next, null, buttonName);
      } else {
        total = operate(total, null, buttonName);
      }
    } else if (next) {
      next = operate(next, null, buttonName);
    }
  }

  if (buttonName === ".") {
    if(next && !next.includes(".")) {
      next = next + ".";
    } 
    else if (total && !total.includes(".")) {
        next = total + ".";
        total = null;
    } else if (!total && !next) {
      next = "0."
    }
  }

  if (buttonName === "+/-") {
    if (next) {
      next = operate(next, -1, "×");
    } else if (total) {
      next = operate(total, -1, "×");
      total = null;
    }
  }


  return { total: total, next: next, operation: operation };
};

export default calculate;
