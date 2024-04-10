
function outerFunction() {
  var outerVariable = "I'm from outer";

  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}

var closureFunction = outerFunction();
console.dir(closureFunction);
// closureFunction();

function multiplier(factor) {
  return function (number) {
    console.log(number, factor);
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5));
