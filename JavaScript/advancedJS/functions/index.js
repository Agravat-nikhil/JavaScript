
const mathOperation = (a, b, operation) => {
  return operation(a, b);
};

const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return b - a;
};

console.log(mathOperation(5, 15, add));
console.log(mathOperation(5, 15, sub));
