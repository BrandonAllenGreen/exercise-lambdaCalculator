/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiply(num1, num2) {
  return num1 * num2;
}
/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function add(num1, num2) {
  return num1 + num2;
}
/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtract(num1, num2) {
  return num1 - num2;
}
/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divide(num1, num2) {
  return num1 / num2;
}
/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
function calculate(num1, num2, func) {
  return func(num1, num2);
}

 // even listeners for buttons
document.getElementById("butAdd").addEventListener("click", function() {
  let result = calculate(+mathInput1.value, +mathInput2.value, add);
  printToDOM(result);
});

document.getElementById("butSub").addEventListener("click", function() {
  let result = calculate(+mathInput1.value, +mathInput2.value, subtract);
  printToDOM(result);
});

document.getElementById("butDiv").addEventListener("click", function() {
  let result = calculate(+mathInput1.value, +mathInput2.value, divide);
  printToDOM(result);
});

document.getElementById("butMult").addEventListener("click", function() {
  let result = calculate(+mathInput1.value, +mathInput2.value, multiply);
  printToDOM(result);
});

// target input fields
let mathInput1 = document.getElementById("mathInput1");
let mathInput2 = document.getElementById("mathInput2");

// function to print solved math to DOM
function printToDOM(value) {
  document.getElementById("output").innerHTML = value;
}