/* A function that adds two numbers and returns the result
A function that multiplies two numbers and returns the result
A function that divides two numbers and returns the result
A function that subtracts two numbers and returns the result
Each function will have 2 parameters, num1, num2
On the console the prompt will print to the user:
Please enter your first number (store that number)
Please enter your second number (store that number)
Please enter the operation to perform: add, sub, mul, div (then store the operation)
Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
You will then print to the console: The result is: [the result] */

const readlineSync = require("readline-sync");

let num1 = readlineSync.question("Please enter your first number ")
num1 = parseInt(num1)


let num2 = readlineSync.question("Please enter your second number ")
num2 = parseInt(num2)

let op = readlineSync.question("Please enter the operation to perform: +, -, *, / ")
console.log(op)

function calculator(num1, num2) {
  if (op === "+") {
    let result = num1 + num2;
    console.log("The result of adding is", result)
    // return result
  } else if (op === "-") {
    let result = num1 - num2;
    console.log("The result of subtracting is", result)
    // return result
  } else if (op === "*") {
    let result = num1 * num2;
    console.log("The result of multiplying is", result)
    // return result
  } else if (op === "/") {
    let result = num1 / num2;
    console.log("The result of dividing is", result)
    // return result
  } else {
    console.log("You did not give a valid operator")
  }
}

calculator(num1, num2)

// my first attempt at building my functions for my calculator
// function sum(num1, num2) {
//   let result = num1 + num2
//   console.log("sum", result)
//   return result
// }

// function multiply(num1, num2) {
//   let result = num1 * num2
//   console.log("multiply", result)
//   return result
// }


// function divide(num1, num2) {
//   let result = num1 / num2
//   console.log("divide", result)
//   return result
// }

// function subtract(num1, num2) {
//   let result = num1 - num2
//   console.log("subtract", result)
//   return result
// }
