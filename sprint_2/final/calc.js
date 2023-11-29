class Stack {
  constructor() {
    this._data = [];
  }

  push(item) {
    this._data.push(item);
  }

  pop() {
    return this._data.pop();
  }

  peek() {
    return this._data[this._data.length - 1];
  }

  size() {
    return this._data.length;
  }
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return Math.floor(x / y);
}

const operatorsMap = new Map([
  ["+", add],
  ["-", subtract],
  ["*", multiply],
  ["/", divide],
]);

function calc(line) {
  const stack = new Stack();
  const elements = line.split(" ");

  try {
    elements.forEach((el) => {
      if (operatorsMap.has(el)) {
        const secondOperand = stack.pop();
        const firstOperand = stack.pop();
        const operator = operatorsMap.get(el);

        if (firstOperand === undefined || secondOperand === undefined) {
          throw new Error("One of operand is null");
        }

        const result = operator(firstOperand, secondOperand);

        if (!isFinite(result)) {
          throw new Error("Division by zero");
        }

        stack.push(result);

        return;
      }

      if (isNaN(el)) {
        throw new Error("Elements is not a number");
      }

      stack.push(Number(el));
    });
  } catch (e) {
    console.error(e.message);
  }

  return stack.pop();
}
