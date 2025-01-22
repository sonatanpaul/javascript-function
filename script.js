// Normal Function
function printMe() {
  console.log("Hello World");
}
// printMe();

// Function as Expression
const printMy = function () {
  console.log("printMe");
  console.log("printed");
};
// printMy();

// function as a parameter and argument
function printThis(param1, param2) {
  console.log("Hello Word", param1, param2);
}
// printThis("Sonatan", "Paul");

// function with return keyword
function sum(a, b) {
  let value = a + b;
  return value;
}
// sum(5, 6);

// function with default parameter
function number(a, b = 10) {
  let result = a + b;
  console.log(result);
  return result;
}
// number(8);

// function with rest parameter
function collectThis(x, ...y) {
  console.log(x);
  console.log(y);
}

collectThis(1, 2, 3, 4, 5, 6, 7, 8);
