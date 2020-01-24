import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  const arithmeticOperators = ['+', '-', '×', '÷'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const afterDivideByZero = () => {
    if (total === "Can't divide by 0") {
      next = 0;
      operation = 0;
      total = 0;
    }
  };

  if (numbers.includes(buttonName)) {
    afterDivideByZero();
    if (next) {
      if (next === '0' && buttonName === '0') {
        return false;
      }
      next += buttonName;
    } else {
      if (total && !operation) {
        total = null;
        next = buttonName;
      }
      next = buttonName;
    }
  }

  if (arithmeticOperators.includes(buttonName)) {
    afterDivideByZero();
    if (!next) {
      operation = buttonName;
      if (!total) {
        total = '0';
      }
    } else if (total && !operation) {
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

  if (buttonName === '=') {
    afterDivideByZero();
    if (next && total && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (buttonName === '%') {
    afterDivideByZero();
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

  if (buttonName === '.') {
    afterDivideByZero();
    if (next && !next.includes('.')) {
      next += '.';
    } else if (total && !total.includes('.')) {
      next = `${total}.`;
      total = null;
    } else if (!total && !next) {
      next = '0.';
    }
  }

  if (buttonName === '+/-') {
    afterDivideByZero();
    if (next) {
      next = operate(next, -1, '×');
    } else if (total) {
      next = operate(total, -1, '×');
      total = null;
    }
  }


  return { total, next, operation };
};

export default calculate;
